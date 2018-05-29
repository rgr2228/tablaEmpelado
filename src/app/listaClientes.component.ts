import { Component } from '@angular/core';
import { Http } from "@angular/http";
import {Cliente} from './cliente'
import {ServiciosService} from './user.service';
import {Router} from '@angular/router';

@Component({
  templateUrl:'./listaClientes.html'
})

export class ListaClientesComponent{
  clientes: Cliente[];

  constructor(public service:ServiciosService,public router:Router){
    this.service.obtenerClientes().subscribe(
      result=>{
        var obj = JSON.parse(result);
        this.clientes = obj.clienteWS;
      }
    )
  }
}