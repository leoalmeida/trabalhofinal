import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app.component';
import {LoggerService} from './services/logger.service';

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS
]);