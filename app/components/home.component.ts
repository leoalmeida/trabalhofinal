/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES} from "@angular/common";
import {Router, ROUTER_DIRECTIVES, RouteSegment, RouteTree} from "@angular/router";
import {MenuService} from "../services/menu.service";

@Component({
    selector: 'painel',
    templateUrl: 'app/templates/home.html',
    styleUrls: ['app/stylesheets/home.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [MenuService]
})
export class HomeComponent implements OnInit{

    list: ItemDefinition[]
    private currSegment: RouteSegment;
    private selectedId: number;
    @Input() filtername: string;
    @Input() showMenu: boolean;

    constructor(private service: MenuService, private router: Router) {
        this.filtername = "";
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    goExternal(link: string) {
        window.location.href=link;
    }

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        this.service.getAllMenuItems().then(list => this.list = list);
    }

    onSelect(item: ItemDefinition) {
        if (item.externalLink){
            this.router.navigate([item.externalLink]);
        }else{
            this.router.navigate([`./${item.route}`], this.currSegment);
        }
    }

    ngOnInit() {
        this.service.getAllMenuItems().then(list => this.list = list)
        this.showMenu = true;
    }

}
