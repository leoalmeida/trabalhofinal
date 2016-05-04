/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, ChangeDetectionStrategy, ViewChild, OnInit} from 'angular2/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES} from "angular2/common";
import {ImgFilterPipe} from "../filters/img-filter.pipe";
import {NavbarComponent} from "./navbar.component";
import {RouterLink} from "angular2/router";
import {MENU_ITEMS, IMAGE_ITEMS} from "../app.routes";
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    selector: 'imagens',
    templateUrl: 'app/templates/imagens.html',
    styleUrls: ['app/stylesheets/imagens.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [RouterLink, CORE_DIRECTIVES, MODAL_DIRECTIVES],
    pipes: [ImgFilterPipe]
})
export class ImagensComponent implements OnInit{

    imageList: ItemDefinition[];
    @Input() filtername: string;
    

    constructor() {
        this.filtername = "";
        this.imageList = IMAGE_ITEMS;
    }

    close() {
        this.modal.close();
    }


}
