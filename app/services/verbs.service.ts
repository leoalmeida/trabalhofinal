import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class VerbsService {
    public verbs: any;

    constructor(){}

    getVerbs(http: Http){
        this.verbs = http.get('api/verbs.json')
            .map(response => response.json())
    }
}