import {NgModule} from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';
import { LoginComponent } from './login.component';

const appModules : Routes = [
    {path:'',component:LoginComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appModules,{})
    ],
    exports:[RouterModule],
    providers:[]
})

export class AppRouterModule{}