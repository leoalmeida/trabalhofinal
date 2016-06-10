/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../services/cliente.service";
import {ClienteDefinition} from "../models/cliente.model";

@Component({
    selector: 'lista-clientes',
    templateUrl: 'app/templates/table.html',
    styleUrls: [
        'app/stylesheets/table.css'
    ]
})
export class TableComponent implements OnInit {
    constructor (private clienteService: ClientesService) {}

    errorMessage: string;
    clientes: ClienteDefinition[];

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