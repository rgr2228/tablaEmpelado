import { Component } from '@angular/core';

@Component({
    templateUrl:'./login.html'
})
export  class LoginComponent{
    userName: string='';
    pws: string='';
    errorMessage: string='';

    OnLogin(){
        alert('click');
    }
}