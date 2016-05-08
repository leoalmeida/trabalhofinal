import {Route} from '@angular/router';
import {RouteDefinition} from '@angular/router-deprecated';
import {HomeComponent} from './components/home.component';
import {ImagensComponent} from "./components/imagens.component";
import {FormsComponent} from "./components/forms.component";
import {LinksComponent} from "./components/links.component";
import {InfoComponent} from "./components/info.component";
import {TableComponent} from "./components/table.component";
import {ClientesComponent} from "./components/clientes.component";

export var APP_ROUTES: Route[] = [
    {path: '/', component: HomeComponent}
];

export var MENU_ROUTES: Route[] = [
    { path: '/forms', component: FormsComponent},
    { path: '/imagens', component: ImagensComponent},
    { path: '/clientes', component: ClientesComponent},
    { path: '/info', component: InfoComponent},
    { path: '/:id', component: LinksComponent}
];

/*
*  { path: '/link/github',name:"Github", component: LinksComponent, imgSrc:"/assets/imagens/Github2-96.png", extLink:"https://github.com/leoalmeida/trabalhofinal"},
 { path: '/link/css',name:"CSS", component: LinksComponent, imgSrc:"/assets/imagens/CSS3-96.png", extLink:"https://cssanimation.rocks/pt/"},
 { path: '/link/hbogo',name:"HBO Go", component: LinksComponent, imgSrc:"/assets/imagens/HBOGo-96.png", extLink:"http://www.hbogo.com.br/"},
 { path: '/link/whatsapp',name:"WhatsApp", component: LinksComponent, imgSrc:"/assets/imagens/WhatsApp-96.png", extLink:"https://web.whatsapp.com/"},
 { path: '/link/facebook',name:"Facebook", component: LinksComponent, imgSrc:"/assets/imagens/Facebook-96.png", extLink:"http://www.facebook.com"},
 { path: '/link/chrome',name:"Chrome", component: LinksComponent, imgSrc:"/assets/imagens/Chrome-96.png", extLink:"https://www.google.com/chrome/"}
* */