import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmPasswordValidator } from 'src/helper/confirmpassword.validator';
import { ResetPassword } from 'src/Model/reset-password.model';
import helper from 'src/helper/helper';
import { NgToastService } from 'ng-angular-popup';
import { ContactsService } from 'src/app/Service/contacts.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword!:FormGroup;
  emailToReset!:string;
  emailToken!:string;
  resetPasswordObj = new ResetPassword();
  constructor(private fb:FormBuilder,private router:ActivatedRoute,private profile:ContactsService,
    private toast:NgToastService,private route:Router){}
  ngOnInit(): void {
    this.resetPassword =this.fb.group({
      password:[null,Validators.required],
      confirmPassword:[null,Validators.required]

    },{
      validator:confirmPasswordValidator('password','confirmPassword')
    });
    this.router.queryParams.subscribe(val=>{
      this.emailToReset = val['email'];
      let uriToken = val['code'];
      this.emailToken = uriToken.replace(/ /g,'+');      
    })
  }
  reset(){
    if(this.resetPassword.valid){
      this.resetPasswordObj.email = this.emailToReset;
      this.resetPasswordObj.newPassword = this.resetPassword.value.password;
      this.resetPasswordObj.confirmPassword = this.resetPassword.value.confirmPassword;
      this.resetPasswordObj.emailToken = this.emailToken;
      this.profile.resetPassword(this.resetPasswordObj).subscribe({
        next:(res)=>{
          this.toast.success({
            detail:'SUCCESS',
            summary:'Password Reset Successfully',
            duration:5000
          })
          this.route.navigate(['login'])
        },
        error:(err)=>{
          this.toast.error({
            detail:'ERROR',
            summary:'Something Went Wrong',
            duration:5000
          })
        }
      })

    }else{
     helper.Validatefield(this.resetPassword);
    }
  }

}
