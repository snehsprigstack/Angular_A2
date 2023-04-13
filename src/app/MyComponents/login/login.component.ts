import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ContactsService } from 'src/app/Service/contacts.service';
import helper from 'src/helper/helper';
declare var google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor( private profile:ContactsService,private router:ActivatedRoute,private route:Router,private fb:FormBuilder,
   private toast:NgToastService){}
   
  type:string = "password";
  isText: boolean= false;
  eyeIcon : string = "fa fa-eye-slash";  
  formModal:any;
  
login!:FormGroup;
resetPasswordEmail!:string;
isEmailValid!:boolean;
  ngOnInit():void{
  this.login = this.fb.group({
    UserName:['',Validators.required],    
    Password:['',Validators.required]
  })
  google.accounts.id.initialize({
    client_id: "944211606769-jrmdfgfsoi98d11jo1nq0h13ils7ke9m.apps.googleusercontent.com",
    callback: (response: any) => this.handleGoogleSignIn(response)
  });
  google.accounts.id.renderButton(
    
    document.getElementById("buttonDiv"),
    { 'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
     }  // customization attributes
  );
}
 
handleGoogleSignIn(response: any) {
  this.login.reset()
  console.log(response.credential);


  // This next is for decoding the idToken to an object if you want to see the details.
  let base64Url = response.credential.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  if(JSON.parse(jsonPayload).email_verified == true){
    localStorage.setItem('token',response.credential)
    this.toast.success({detail:'SUCCESS',summary:'login successful ',duration:3000})  
        
     this.route.navigate(['/dash'])
  }
  console.log(JSON.parse(jsonPayload).picture);
}


  verify(){
    if(this.login.valid && this.login){
      this.profile.verifyProfile(this.login.value).subscribe({
        next:(result)=>{
        console.log(result);
        this.login.reset();
        this.profile.storeToken(result.token);
       // this.profile.storeRefreshToken(result.refreshToken);
        this.toast.success({detail:'SUCCESS',summary:result.message,duration:3000})        
        this.route.navigate(['dash']) 
      },
      error:(err)=>{
        this.toast.error({detail:'ERROR',summary:'Invalid UserName or Password',duration:3000})
        localStorage.clear();        
      },
    });
    }
      else{      
           this.toast.error({detail:'Error',summary:'Invalid',duration:3000}); 
           helper.Validatefield(this.login);
    }
    
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  remove(){
    this.login.reset();
  }
  hideshowpass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" :this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
  checkValidEmail(event:string){
  const value=event;
  const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  this.isEmailValid = pattern.test(value);
  return this.isEmailValid;
  }
  confirmToSend(){
    if(this.checkValidEmail(this.resetPasswordEmail)){
      console.log(this.resetPasswordEmail)
      
      this.profile.sendResetPasswordLink(this.resetPasswordEmail).subscribe({
        next:(res)=>{
          this.toast.success({
            detail:'SUCCESS',
           summary:'Reset Mail Sent Successfully',
           duration:3000            
          })
          this.resetPasswordEmail=""
          this.closePopup()
        },
        error:(err)=>{
          this.toast.error({
            detail:'ERROR',
            summary:'Something went wrong',
           duration:3000
          });
        }
      })
    }

  }
}
