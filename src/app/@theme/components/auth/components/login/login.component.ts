/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject } from '../../helpers';

import { NbAuthService } from '../../services/auth.service';

import { HttpClient } from '@angular/common/http';
import { NB_THEME_OPTIONS } from '@nebular/theme';

@Component({
  selector: 'nb-login',
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbLoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  mess:string;
  show:boolean=false;
  submitted: boolean = false;
 

  constructor(protected http:HttpClient,protected router: Router) {

    
  }


  login()  {

    console.log("email"+this.user.email);
    console.log("pwd"+this.user.password);
    return this.http.post<any>('http://localhost:8080/myapp/auth', 
    { email: this.user.email, password: this.user.password }).subscribe( 
      (res) => {
      
      console.log("response"+JSON.stringify(res));
      if(res.user!=null){
      localStorage.setItem("currentUser",JSON.stringify(res.user));
      this.router.navigate(["pages/home"]);}
      else{
        this.router.navigate(["login"]);
        this.mess="Error: Invalid email/password ";
        this.show=true;
      }
    },
      (error)=>{
        console.log("error");
    });
  }


}

 