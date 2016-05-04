/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, ChangeDetectionStrategy, EventEmitter, Output} from 'angular2/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES} from "angular2/common";
import {ImgFilterPipe} from "../filters/img-filter.pipe";
import {RouterLink, RouteDefinition, OnActivate, ComponentInstruction} from "angular2/router";
import {MENU_ITEMS} from "../app.routes";

@Component({
    selector: 'painel',
    templateUrl: 'app/templates/home.html',
    styleUrls: ['app/stylesheets/home.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [RouterLink, CORE_DIRECTIVES],
    pipes: [ImgFilterPipe]
})
export class HomeComponent implements OnActivate {
    @Input() routes: RouteDefinition[];
    @Input() list: ItemDefinition[];
    @Input() filtername: string;
    @Input() showMenu: boolean;
    prev: ComponentInstruction;
    next: ComponentInstruction;


    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log('hello');
        this.log = `Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}"`;
        this.next = next;
        this.prev = prev;
    }

    constructor() {
        this.filtername = "";
        this.list = MENU_ITEMS;
    }

    goback(){
        this.routes.navigateByUrl(this.prev.urlPath);
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    openRoute(itemEscolhido: number) {
        this.showMenu = false;
    }

    myValueChange($event) {
        // result: { value: <number> }
        console.log($event);
    }
}
