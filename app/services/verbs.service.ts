import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//import { Hero }           from './models/verbs.model';
import { Observable }     from 'rxjs/Observable';

class VerbDefinition {
    public nome: string;
    public id: number;

    static qtItens: number = 0;

    constructor(nome: string) {
        this.nome = nome;
        this.id = ++VerbDefinition.qtItens;
    }

    filter(list: VerbDefinition, filterOption: string){
        return list;
    }
}


@Injectable()
export class VerbsService {
    public verbs: any;

    constructor (private http: Http) {}

    private heroesUrl = 'app/apis/verbs';  // URL to web api

    /*getVerbs(): Observable<VerbDefinition[]>{
        return this.http.get(this.heroesUrl)
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
    }*/
}