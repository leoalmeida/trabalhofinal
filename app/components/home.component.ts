/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from "@angular/common";
import {Router, RouteSegment, RouteTree, OnActivate} from "@angular/router";
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {ItemsService} from "../services/items.service";

@Component({
    selector: 'painel',
    templateUrl: 'app/templates/home.html',
    styleUrls: ['app/stylesheets/home.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers:  [JSONP_PROVIDERS, ItemsService]
})
export class HomeComponent implements OnInit, OnActivate{

    constructor(private service: ItemsService, private router: Router) {
        //   this.list = this.searchTermStream
        //       .debounceTime(300)
        //       .distinctUntilChanged()
        //       .switchMap((searchText: string) => this.service.search(searchText));
    }

    list: ItemDefinition[];
    private currSegment: RouteSegment;
    private selectedId: number;
    showSearch: boolean = false;
    errorMessage: string;

    searchText: Control = new Control('');

    private searchTermStream = new Subject<string>();

    search(searchText: string) { this.searchTermStream.next(searchText); }

    toggle() {this.showSearch = !this.showSearch;}

    goExternal(link: string) {window.location.href=link;}

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        //this.service.getAllItems().then(list => this.list = list);
    }

    getAllMenuItems() {
        this.service.getAllItems("menu")
            .subscribe(
                menuItems => this.list = menuItems,
                error =>  this.errorMessage = <any>error);
    }

    onSelect(item: ItemDefinition) {
        if (item.isExternal == true){
            this.router.navigate([item.routeLink]);
        }else{
            this.router.navigate([`./${item.routeLink}`], this.currSegment);
        }
    }

    ngOnInit() {
        this.getAllMenuItems();
        //this.service.search("");
    }

}
