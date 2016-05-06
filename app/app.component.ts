import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router, OnActivate, RouteSegment, Route} from '@angular/router';
import {APP_ROUTES, MENU_ROUTES} from './app.routes';
import {NavbarComponent} from "./components/navbar.component";
import {LoggerService} from "./services/logger.service";
import {MenuRouterComponent} from "./components/menuRouter.component";

@Component({
    selector: 'main-app',
    templateUrl: 'app/templates/app.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@Routes([
    {path: '/home', component: MenuRouterComponent}
])
export class AppComponent implements OnInit, OnActivate {
    private logger: LoggerService;
    private curSegment: RouteSegment;

    constructor(private router: Router, logger: LoggerService) {
        this.logger = logger;
    }

    ngOnInit() {
        this.router.navigate(['/home']);
    }

    routerOnActivate(curr: RouteSegment) {
        this.curSegment = curr;
    }
}
