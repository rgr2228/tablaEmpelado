import { Component } from '@angular/core';
import { Http } from "@angular/http";
import {ServiciosService} from './user.service';

@Component({
    templateUrl:'./login.html'
})
export  class LoginComponent{
    userName: string='';
    pws: string='';
    errorMessage: string='';

    constructor(public service:ServiciosService){}

    OnLogin(){
        alert('click');
        this.service.login(this.userName,this.pws).subscribe(
          result=>{
            alert('Autentico');
          },
          error=>{
            console.log(<any>error);
          }
        );
    }
}