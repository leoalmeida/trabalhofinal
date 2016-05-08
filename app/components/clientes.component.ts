/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
import { Component }            from '@angular/core';
import { TableComponent }       from './table.component';
import { ClientesService }      from '../services/cliente.service';
import { provide }              from '@angular/core';
import { XHRBackend, HTTP_PROVIDERS }           from '@angular/http';

// in-memory web api imports
import { InMemoryBackendService,
            SEED_DATA }         from 'angular2-in-memory-web-api/core';
import { ClientesData }         from '../data/clientes-data';

@Component({
    selector: 'clientes',
    template: `
            <h1>Gestão de Clientes</h1>
            <lista-clientes></lista-clientes>
    `,
    directives: [TableComponent],
    providers:  [
        HTTP_PROVIDERS,
        ClientesService,
        // in-memory web api providers
        provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        provide(SEED_DATA,  { useClass: ClientesData }) // in-mem server data
    ]
})
export class ClientesComponent { }