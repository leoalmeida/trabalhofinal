import {Component, Input} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';
import {APP_ROUTES, MENU_ITEMS} from './app.routes';
import {HomeComponent} from "./components/home.component";
import {NavbarComponent} from "./components/navbar.component";
import {ItemDefinition} from "./models/item.model";

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    directives: [RouterOutlet, NavbarComponent, HomeComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public appRoutes: RouteDefinition[];
    public menuItems: ItemDefinition[];
    searchText: string = " ";
    showSearch: boolean = false;
    showMenu: boolean;

    constructor() {
        this.appRoutes = APP_ROUTES;
        this.menuItems = MENU_ITEMS;
        this.showMenu = true;
    }

    toggle() {
        this.showSearch = !this.showSearch;
    }
}
