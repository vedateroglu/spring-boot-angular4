import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataSourceService {

    url : string ='http://localhost:8080/';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {}

    getMessage() {
        return this.http.get(this.url+'message')
            .map(
                (res : Response) =>{
                    return res.text();
                }
            )
            .catch(
                (error : Error) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }

    updateName(name : any){
        return this.http.post(this.url+'name/'+ name, this.options)
            .map(
                (res : Response) =>{
                    return res.text();
                }
            )
            .catch(
                (error : Error) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }
    
}