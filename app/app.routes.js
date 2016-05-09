"use strict";
var home_component_1 = require('./components/home.component');
var imagens_component_1 = require("./components/imagens.component");
var forms_component_1 = require("./components/forms.component");
var links_component_1 = require("./components/links.component");
var info_component_1 = require("./components/info.component");
var clientes_component_1 = require("./components/clientes.component");
exports.APP_ROUTES = [
    { path: '/', component: home_component_1.HomeComponent }
];
exports.MENU_ROUTES = [
    { path: '/forms', component: forms_component_1.FormsComponent },
    { path: '/imagens', component: imagens_component_1.ImagensComponent },
    { path: '/clientes', component: clientes_component_1.ClientesComponent },
    { path: '/info', component: info_component_1.InfoComponent },
    { path: '/:id', component: links_component_1.LinksComponent }
];
/*
*  { path: '/link/github',name:"Github", component: LinksComponent, imgSrc:"/assets/imagens/Github2-96.png", extLink:"https://github.com/leoalmeida/trabalhofinal"},
 { path: '/link/css',name:"CSS", component: LinksComponent, imgSrc:"/assets/imagens/CSS3-96.png", extLink:"https://cssanimation.rocks/pt/"},
 { path: '/link/hbogo',name:"HBO Go", component: LinksComponent, imgSrc:"/assets/imagens/HBOGo-96.png", extLink:"http://www.hbogo.com.br/"},
 { path: '/link/whatsapp',name:"WhatsApp", component: LinksComponent, imgSrc:"/assets/imagens/WhatsApp-96.png", extLink:"https://web.whatsapp.com/"},
 { path: '/link/facebook',name:"Facebook", component: LinksComponent, imgSrc:"/assets/imagens/Facebook-96.png", extLink:"http://www.facebook.com"},
 { path: '/link/chrome',name:"Chrome", component: LinksComponent, imgSrc:"/assets/imagens/Chrome-96.png", extLink:"https://www.google.com/chrome/"}
* */ 

//# sourceMappingURL=app.routes.js.map
