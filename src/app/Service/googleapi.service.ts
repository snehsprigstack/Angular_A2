import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig:AuthConfig ={
  issuer:'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:window.location.origin,
  clientId:'944211606769-jrmdfgfsoi98d11jo1nq0h13ils7ke9m.apps.googleusercontent.com',
  
}

@Injectable({
  providedIn: 'root'
})
export class GoogleapiService {

  constructor(private readonly oAuthService:OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.loadDiscoveryDocument().then(()=>{
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        }else{
          oAuthService.loadUserProfile().then((userProfile)=>{
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })
   }
}
