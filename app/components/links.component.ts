/**
 * Created by LeonardoAlmeida on 03/05/16.
 */
import {Component} from '@angular/core';
import {OnActivate, Router, RouteSegment, RouteTree} from "@angular/router";
import {MenuService} from "../services/menu.service";
import {ItemDefinition} from "../models/item.model";

@Component({
    template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class LinksComponent implements OnActivate {
    itemList: ItemDefinition[];
    private currSegment: RouteSegment;
    private selectedId: number;

    constructor(
        private service: MenuService,
        private router: Router) { }

    isSelected(item: ItemDefinition) { return item.id === this.selectedId; }

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        //this.service.getAllMenuItems().then(list => this.itemList = list);
    }

    onSelect(item: ItemDefinition) {
        // Absolute link
        // this.router.navigate([`/crisis-center`, crisis.id]);

        // Relative link
        this.router.navigate([`./${item.id}`], this.currSegment);
    }
}
