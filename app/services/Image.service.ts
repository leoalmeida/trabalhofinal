import {Injectable} from '@angular/core';
import {ItemDefinition} from "../models/item.model";
import {Observable} from "rxjs/Observable";


 const ImageItems = [
    new ItemDefinition("Img1","/assets/imgHD/apple-logo-white.jpg","./Imagens",""),
    new ItemDefinition("Img2","/assets/imgHD/amsterdam.jpg","./Imagens",""),
    new ItemDefinition("Img3","/assets/imgHD/applecrash.jpg","./Imagens",""),
    new ItemDefinition("Img4","/assets/imgHD/bandg.jpg","./Imagens",""),
    new ItemDefinition("Img5","/assets/imgHD/black_leather.jpg","./Imagens",""),
    new ItemDefinition("Img6","/assets/imgHD/Cavalo-selvagem-no-Mar.jpg","./Imagens",""),
    new ItemDefinition("Img7","/assets/imgHD/crissxcross.jpg","./Imagens",""),
    new ItemDefinition("Img8","/assets/imgHD/fundos-de-tela-fundos.jpg","./Imagens",""),
    new ItemDefinition("Img9","/assets/imgHD/Mar-Papel-de-Parede.jpg","./Imagens",""),
    new ItemDefinition("Img10","/assets/imgHD/Imagem-do-Mar.jpg","./Imagens",""),
    new ItemDefinition("Img11","/assets/imgHD/Mar.jpg","./Imagens",""),
    new ItemDefinition("Img12","/assets/imgHD/Megulho-no-Mar.jpg","./Imagens",""),
    new ItemDefinition("Img13","/assets/imgHD/Paisagem-do-Mar.jpeg","./Imagens",""),
    new ItemDefinition("Img14","/assets/imgHD/Papel-de-Parede-do-Mar.jpg","./Imagens",""),
    new ItemDefinition("Img15","/assets/imgHD/Papel-de-Parede-Mar-Aberto.jpg","./Imagens",""),
    new ItemDefinition("Img16","/assets/imgHD/Por-do-sol-no-Mar.jpg","./Imagens",""),
    new ItemDefinition("Img17","/assets/imgHD/thinkdifferent.jpg","./Imagens",""),
    new ItemDefinition("Img18","/assets/imgHD/Wallpaper-do-Mar.jpg","./Imagens",""),
    new ItemDefinition("Img19","/assets/imgHD/wallpapers-hd-Papel-de-Parede.jpg","./Imagens",""),
    new ItemDefinition("Img20","/assets/imgHD/water-apple.jpg","./Imagens",""),
    new ItemDefinition("Img20","/assets/imgHD/wwdc2012.jpg","./Imagens","")
];

let imagePromise = Promise.resolve(ImageItems);

@Injectable()
export class ImageService {
    static nextImageId = 100;

   constructor(){}

    getAllImageItems() { return imagePromise; }

   // See the "Take it slow" appendix
   getAllImagesSlowly() {
      return new Promise<ItemDefinition[]>(resolve =>
          setTimeout(()=>resolve(ImageItems), 2000) // 2 seconds
      );
   }

}