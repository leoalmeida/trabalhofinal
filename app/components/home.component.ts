/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES} from "angular2/common";
import {ImgFilterPipe} from "../filters/img-filter.pipe";
import {RouterLink, RouteDefinition} from "angular2/router";
import {MENU_ITEMS} from "../app.routes";

@Component({
    selector: 'painel',
    templateUrl: 'app/templates/home.html',
    styleUrls: ['app/stylesheets/home.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [RouterLink, CORE_DIRECTIVES],
    pipes: [ImgFilterPipe]
})
export class HomeComponent {
    @Input() routes: RouteDefinition[];
    @Input() list: ItemDefinition[];
    @Input() filtername: string;
    @Input() showMenu: boolean;
    

    constructor() {
        this.filtername = "";
        this.list = MENU_ITEMS;
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    openRoute(itemEscolhido: number) {
        this.showMenu = false;
    }

    goExternal(link: string) {
        window.location.href=link;
    }
}
