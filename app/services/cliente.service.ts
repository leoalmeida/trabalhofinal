/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

import { ClienteDefinition } from '../models/cliente.model';


@Injectable()
export class ClientesService {
    constructor (private http: Http) {}

    /*
     private clientesUrl = 'app/clientes.json'; // URL to JSON file
     */

    private clientesUrl = 'data/clientes';  // URL to web api

    getClientes (): Observable<ClienteDefinition[]> {
        return this.http.get(this.clientesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addCliente (cliente: ClienteDefinition): Observable<ClienteDefinition>  {

        let body = JSON.stringify({ cliente });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.clientesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}