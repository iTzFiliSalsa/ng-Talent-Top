import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class UserService{

    public status:string;
    public url:string;
    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    login(log):Observable<any>{

        let json = JSON.stringify(log);
        let params = "json="+json;
        let headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");

        return this._http.post(this.url+"login",params,{headers:headers});
    }

    register(log):Observable<any>{
        let json= JSON.stringify(log);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url+"register",params,{headers:headers});
    }

    getStatus(){
        return localStorage.getItem("status");
    }

}