import {NgModule} from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';
import { LoginComponent } from './login.component';
import {ListaClientesComponent} from './listaClientes.component'

const appModules : Routes = [
    {path:'',component:LoginComponent},
    {path:'clientes',component:ListaClientesComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appModules,{})
    ],
    exports:[RouterModule],
    providers:[]
})

export class AppRouterModule{}