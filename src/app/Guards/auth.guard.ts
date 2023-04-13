import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsService } from '../Service/contacts.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ContactsService,private router:Router,private toast:NgToastService){}
  canActivate():any {
    if(this.service.isLoggedIn()){
      return true;
    }else{
      this.toast.error({detail:'Error',summary:'Please login First!',duration:5000})
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
