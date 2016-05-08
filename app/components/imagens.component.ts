/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ItemDefinition} from "../models/item.model";
import {CORE_DIRECTIVES} from "@angular/common";
import {ItemsService} from "../services/items.service";


@Component({
    selector: 'imagens',
    templateUrl: 'app/templates/imagens.html',
    styleUrls: ['app/stylesheets/imagens.css'],
    directives: [CORE_DIRECTIVES],
    providers:  [ItemsService]
})
export class ImagensComponent implements OnInit{

    imageList: ItemDefinition[];
    errorMessage: string;

    @Input() filtername: string;

    constructor(private service: ItemsService) {}

    getImages() {

        this.service.getAllItems("images")
            .subscribe(
                imageList => this.imageList = imageList,
                error =>  this.errorMessage = <any>error);
    }

    ngOnInit() { this.getImages(); }
}
