import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ResetPassword } from 'src/Model/reset-password.model';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'https://localhost:7089/api/ToDo/'
  
  constructor(private http: HttpClient,private route:Router) { }
  getAllProfile() {
    
    return this.http.get(this.url);
  }
  verifyProfile(data: any) :Observable<any>{
    //console.log(data)
    return this.http.post<any>(this.url + 'Authorize', data);
  }
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
    }
    getToken(){
      return localStorage.getItem('token')
    }
    sendResetPasswordLink(email : string){
      return this.http.post<any>(`${this.url}send-reset-email/${email}`,{})
    }
    isLoggedIn():boolean{
      return !!localStorage.getItem('token')
        }
        sigOut(){
          localStorage.clear();
          this.route.navigate(['login'])
            }
            resetPassword(resetPassword:ResetPassword){
              return this.http.post<any>(`${this.url}reset-password`,resetPassword);
                }
}
