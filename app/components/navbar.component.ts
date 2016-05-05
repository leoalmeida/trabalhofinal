import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';
import {HomeComponent} from "./home.component";

@Component({
    selector: 'navbar',
    templateUrl: 'app/templates/navbar.html',
    styleUrls: ['app/stylesheets/navbar.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [RouterLink, CORE_DIRECTIVES, HomeComponent]
})
export class NavbarComponent{
    searchText: string = " ";
    showSearch: boolean = false;
    @Input() routes: RouteDefinition[];
    @Output() teste: EventEmitter<any> = new EventEmitter();

    contructor(){
    }
    
    toggle() {
        this.showSearch = !this.showSearch;
    }

    eventHandler($event) {
        console.log(this.searchText);
        this.teste.emit({
            value: this.searchText
        })
    }

}
