/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';

import { NbAuthService } from '../../services/auth.service';
import { NbAuthResult } from '../../services/auth-result';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: 'register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];
  languages=[{id:1,name:'en_US'},{id:1,name:'fr_FR'},{id:1,name:'es_ES'}]; 
  institutions=[{id:1,name:'CIH'},{id:1,name:'BNP'},{id:1,name:'BP'}]; 


  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},private http:HttpClient,
              protected cd: ChangeDetectorRef,
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

 
  register() {

    return this.http.post<any>('http://localhost:8080/myapp/addUser', 
   this.user).subscribe( 
      (res) => {
      
    console.log("response"+res);
    console.log("response"+JSON.stringify(res));
   
      this.router.navigate(["login"]);},
      (error)=>{
        console.log("error");
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
