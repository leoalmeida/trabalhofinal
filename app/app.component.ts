import {Component, Input, OnInit} from 'angular2/core';
import {
    RouterOutlet, RouteConfig, RouteDefinition, ROUTER_DIRECTIVES, Router, OnActivate,
    ComponentInstruction
} from 'angular2/router';
import {APP_ROUTES, MENU_ITEMS} from './app.routes';
import {HomeComponent} from "./components/home.component";
import {NavbarComponent} from "./components/navbar.component";
import {ItemDefinition} from "./models/item.model";

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent, HomeComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent implements OnInit, OnActivate {
    public appRoutes: RouteDefinition[];
    public menuItems: ItemDefinition[];
    searchText: string = " ";
    showSearch: boolean = false;
    showMenu: boolean;
    prev: ComponentInstruction;
    next: ComponentInstruction;

    constructor(private router: Router) {
        this.appRoutes = APP_ROUTES;
        this.menuItems = MENU_ITEMS;
        this.showMenu = true;
    }

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log('hello');
        this.log = `Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}"`;
        this.next = next;
        this.prev = prev;
    }

    goback(){
        this.routes.navigateByUrl(this.prev.urlPath);
    }

    toggle() {
        this.showSearch = !this.showSearch;
    }

    ngOnInit() {
        this.router.navigate(['/home']);
    }
}
