/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component} from '@angular/core';
import {ClienteDefinition} from "../models/cliente.model";

@Component({
    selector: 'forms',
    templateUrl: 'app/templates/form.html',
    styleUrls: [
        'app/stylesheets/form.css'
    ]
})
export class FormsComponent {
    public novocliente: ClienteDefinition;
}