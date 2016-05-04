import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './components/home.component';
import {ImagensComponent} from "./components/imagens.component";
import {FormsComponent} from "./components/forms.component";
import {LinksComponent} from "./components/links.component";
import {ItemDefinition} from "./models/item.model";
import {InfoComponent} from "./components/info.component";

export var APP_ROUTES: RouteDefinition[] = [
    { path: '/home', name: 'Home', component: HomeComponent},
    { path: '/forms', name: 'Forms', component: FormsComponent },
    { path: '/imagens', name: 'Imagens', component: ImagensComponent },
    { path: '/info', name: 'Info', component: InfoComponent },
    { path: '/github', name: 'Github', component: LinksComponent },
    { path: '/css', name: 'CSS', component: LinksComponent },
    { path: '/hbogo', name: 'HBOGo', component: LinksComponent },
    { path: '/whatsapp', name: 'WhatsApp', component: LinksComponent },
    { path: '/facebook', name: 'Facebook', component: LinksComponent },
    { path: '/chrome', name: 'Chrome', component: LinksComponent }
];

export var MENU_ITEMS: ItemDefinition[] = [
    new ItemDefinition("Images","/assets/imagens/Beach-96.png","./Imagens"),
    new ItemDefinition("Forms","/assets/imagens/Form-96.png","./Forms"),
    new ItemDefinition("Info","/assets/imagens/About-96.png","./Info"),
    new ItemDefinition("Github","/assets/imagens/Github2-96.png","./Github"),
    new ItemDefinition("CSS","/assets/imagens/CSS3-96.png","./CSS"),
    new ItemDefinition("HBO Go","/assets/imagens/HBOGo-96.png","./HBOGo"),
    new ItemDefinition("WhatsApp","/assets/imagens/WhatsApp-96.png","./WhatsApp"),
    new ItemDefinition("Facebook","/assets/imagens/Facebook-96.png","./Facebook"),
    new ItemDefinition("Chrome","/assets/imagens/Chrome-96.png","./Chrome")
];

export var IMAGE_ITEMS: ItemDefinition[] = [
    new ItemDefinition("Img1","/assets/imgHD/apple-logo-white.jpg","./Imagens"),
    new ItemDefinition("Img2","/assets/imgHD/amsterdam.jpg","./Imagens"),
    new ItemDefinition("Img3","/assets/imgHD/applecrash.jpg","./Imagens"),
    new ItemDefinition("Img4","/assets/imgHD/bandg.jpg","./Imagens"),
    new ItemDefinition("Img5","/assets/imgHD/black_leather.jpg","./Imagens"),
    new ItemDefinition("Img6","/assets/imgHD/Cavalo-selvagem-no-Mar.jpg","./Imagens"),
    new ItemDefinition("Img7","/assets/imgHD/crissxcross.jpg","./Imagens"),
    new ItemDefinition("Img8","/assets/imgHD/fundos-de-tela-fundos.jpg","./Imagens"),
    new ItemDefinition("Img9","/assets/imgHD/Mar-Papel-de-Parede.jpg","./Imagens"),
    new ItemDefinition("Img10","/assets/imgHD/Imagem-do-Mar.jpg","./Imagens"),
    new ItemDefinition("Img11","/assets/imgHD/Mar.jpg","./Imagens"),
    new ItemDefinition("Img12","/assets/imgHD/Megulho-no-Mar.jpg","./Imagens"),
    new ItemDefinition("Img13","/assets/imgHD/Paisagem-do-Mar.jpeg","./Imagens"),
    new ItemDefinition("Img14","/assets/imgHD/Papel-de-Parede-do-Mar.jpg","./Imagens"),
    new ItemDefinition("Img15","/assets/imgHD/Papel-de-Parede-Mar-Aberto.jpg","./Imagens"),
    new ItemDefinition("Img16","/assets/imgHD/Por-do-sol-no-Mar.jpg","./Imagens"),
    new ItemDefinition("Img17","/assets/imgHD/thinkdifferent.jpg","./Imagens"),
    new ItemDefinition("Img18","/assets/imgHD/Wallpaper-do-Mar.jpg","./Imagens"),
    new ItemDefinition("Img19","/assets/imgHD/wallpapers-hd-Papel-de-Parede.jpg","./Imagens"),
    new ItemDefinition("Img20","/assets/imgHD/water-apple.jpg","./Imagens"),
    new ItemDefinition("Img20","/assets/imgHD/wwdc2012.jpg","./Imagens")
];