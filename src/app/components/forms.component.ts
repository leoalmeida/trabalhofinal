/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit, Input} from '@angular/core';
import {ClienteDefinition} from "../models/cliente.model";
import {CORE_DIRECTIVES} from "@angular/common";
import {ClientesService} from "../services/cliente.service";
import { provide }              from '@angular/core';
import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';

// in-memory web api imports
import { InMemoryBackendService,
    SEED_DATA }         from 'angular2-in-memory-web-api';
import { ClientesData }         from '../data/clientes-data';
import {DropdownComponent} from "../directives/dropdown.directive";

@Component({
    selector: 'forms',
    templateUrl: 'app/templates/form.html',
    styleUrls: [
        'app/stylesheets/form.css'
    ],
    directives: [CORE_DIRECTIVES, DropdownComponent],
    providers:  [
        HTTP_PROVIDERS,
        ClientesService,
        // in-memory web api providers
        provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        provide(SEED_DATA,  { useClass: ClientesData }) // in-mem server data
    ]
})
export class FormsComponent implements OnInit{


    errorMessage: string;
    clientes: ClienteDefinition[];

    constructor (private clienteService: ClientesService) {}

    ngOnInit() { this.getClientes(); }

    getClientes() {
        this.clienteService.getClientes()
            .subscribe(
                clientes => this.clientes = clientes,
                error =>  this.errorMessage = <any>error);
    }

    addClientes (novoCliente: ClienteDefinition) {
        if (!novoCliente) {return;}
        this.clienteService.addCliente(novoCliente)
            .subscribe(
                cliente  => this.clientes.push(cliente),
                error =>  this.errorMessage = <any>error);
    }

}