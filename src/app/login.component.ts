import { Component } from '@angular/core';
import { Http } from "@angular/http";
import {ServiciosService} from './user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./login.html'
})
export  class LoginComponent{
    userName: string='';
    pws: string='';
    errorMessage: string='';

    constructor(public service:ServiciosService,public router:Router){}

    OnLogin(){
        alert('click');
        this.service.login(this.userName,this.pws).subscribe(
          result=>{
            alert('Autentico');
            this.router.navigate(['/clientes']);
          },
          error=>{
            console.log(<any>error);
          }
        );
    }
}