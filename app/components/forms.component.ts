/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component} from '@angular/core';
import {ClienteDefinition} from "../models/cliente.model";
import {CORE_DIRECTIVES} from "@angular/common";

@Component({
    selector: 'forms',
    templateUrl: 'app/templates/form.html',
    styleUrls: [
        'app/stylesheets/form.css'
    ],
    directives: [CORE_DIRECTIVES]
})
export class FormsComponent {
    novocliente: ClienteDefinition
    constructor(){
        this.novocliente = new ClienteDefinition();
    }
}