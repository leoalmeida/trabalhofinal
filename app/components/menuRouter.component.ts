/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";
import {FormsComponent} from "./forms.component";
import {ImagensComponent} from "./imagens.component";
import {TableComponent} from "./table.component";
import {InfoComponent} from "./info.component";
import {LinksComponent} from "./links.component";
import {HomeComponent} from "./home.component";
import {AnimationDirective} from "../directives/animation.directive";
import {ClientesComponent} from "./clientes.component";
import {ClientesData} from "../data/clientes-data";

@Component({
    template:  `
        <router-outlet></router-outlet>
        
        <a (click)="openMenu()" class="botao botao-success botao-grande botao-shadow img-circle fixed-btn-menu">
            <i class="fa fa-bars fa-fw" aria-hidden="true"></i>
        </a>
    `,
    directives: [AnimationDirective, ROUTER_DIRECTIVES]
})
@Routes([
    { path: '', component: HomeComponent},
    { path: '/forms', component: FormsComponent},
    { path: '/imagens', component: ImagensComponent},
    { path: '/clientes', component: ClientesComponent},
    { path: '/info', component: InfoComponent},
    { path: '/:id', component: LinksComponent},
    { path: '/data/clientes', component: ClientesData}
])
export class MenuRouterComponent{

    constructor(private router: Router) {}

    openMenu(){
        this.router.navigate([`./${'home'}`]);
    }

}
