import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES, Route} from '@angular/router';
import {HomeComponent} from "./home.component";

@Component({
    selector: 'navbar',
    templateUrl: 'app/templates/navbar.html',
    styleUrls: ['app/stylesheets/navbar.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class NavbarComponent{
    searchText: string = " ";
    showSearch: boolean = false;
    //@Output() teste: EventEmitter<any> = new EventEmitter();

    contructor(){
    }
    
    toggle() {
        this.showSearch = !this.showSearch;
    }
/*
    eventHandler($event) {
        console.log(this.searchText);
        this.teste.emit({
            value: this.searchText
        })
    }*/

}
