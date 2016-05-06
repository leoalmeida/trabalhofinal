/**
 * Created by LeonardoAlmeida on 30/04/16.
 */
import {Injectable} from '@angular/core';
import {ItemDefinition} from "../models/item.model";

const MenuItems = [
    new ItemDefinition('Forms',"/assets/imagens/Form-96.png", '/forms', ""),
    new ItemDefinition("Imagens","/assets/imagens/Beach-96.png", '/imagens', ""),
    new ItemDefinition('Table',"/assets/imagens/Grid-96.png", '/table', ""),
    new ItemDefinition('Info', "/assets/imagens/About-96.png", '/info', ""),
    new ItemDefinition("Github","/assets/imagens/Github2-96.png",'/Links',"https://github.com/leoalmeida/trabalhofinal"),
    new ItemDefinition("CSS","/assets/imagens/CSS3-96.png",'/Links',"https://cssanimation.rocks/pt/"),
    new ItemDefinition("HBO Go","/assets/imagens/HBOGo-96.png",'/Links',"http://www.hbogo.com.br/"),
    new ItemDefinition("WhatsApp","/assets/imagens/WhatsApp-96.png",'/Links',"https://web.whatsapp.com/"),
    new ItemDefinition("Facebook","/assets/imagens/Facebook-96.png",'/Links',"http://www.facebook.com"),
    new ItemDefinition("Chrome","/assets/imagens/Chrome-96.png",'/Links',"https://www.google.com/chrome/")
]

let menuPromise = Promise.resolve(MenuItems);

@Injectable()
export class MenuService {

    static nextMenuId = 100;

    getAllMenuItems() { return menuPromise; }

}