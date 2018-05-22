import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiciosService{
    constructor(private http:Http){}

    login(user:string,pws:string):Observable<any>{
        this.http.post
    }
}