import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router, OnActivate, RouteSegment} from '@angular/router';
import {NavbarComponent} from "./components/navbar.component";
import {MenuRouterComponent} from "./components/menuRouter.component";
import {CONSTANTS} from './shared';

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@Routes([
    {path: '/home', component: MenuRouterComponent}
])
export class AppComponent implements OnInit, OnActivate {
    private curSegment: RouteSegment;
    public appBrand: string;

    constructor(private router: Router) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }

    ngOnInit() {
        this.router.navigate(['/home']);
    }

    routerOnActivate(curr: RouteSegment) {
        this.curSegment = curr;
    }
}
