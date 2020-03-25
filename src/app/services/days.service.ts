import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global'; 

@Injectable()
export class DayService{

    public url:string;

    constructor(
        public _http:HttpClient
    ){
        this.url = global.url;
    }


    cursos(semestre, dia):Observable<any>{
        return this._http.get(this.url+"cursos/"+dia+"/"+semestre);
    }

    saveCurso(curso):Observable<any>{
        let json = JSON.stringify(curso);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url+"cursos",params,{headers:headers});
    }
}