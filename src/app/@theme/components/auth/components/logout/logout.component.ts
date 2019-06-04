/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'nb-logout',
  template: `
    <div>Logging out, please wait...</div>
  `,
})
export class NbLogoutComponent implements OnInit {


  constructor(protected router: Router) {

  }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    console.log("logoutt");
    localStorage.removeItem("currentUser");
    this.router.navigate(["login"]);
  }


}
