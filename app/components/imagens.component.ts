/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES} from "@angular/common";
import {ImageService} from "../services/Image.service";


@Component({
    selector: 'imagens',
    templateUrl: 'app/templates/imagens.html',
    styleUrls: ['app/stylesheets/imagens.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [ImageService]
})
export class ImagensComponent implements OnInit{

    imageList: ItemDefinition[];
    errorMessage: string;

    @Input() filtername: string;

    constructor(private service: ImageService) {}

    getImages() {

        this.service.getAllImageItems().then(
            imageList => this.imageList  = imageList);
    }

    ngOnInit() { this.getImages(); }
}
