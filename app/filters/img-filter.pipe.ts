import {Pipe, PipeTransform} from 'angular2/core';
import {ItemDefinition} from '../models/item.model';
//import _ from 'lodash';

@Pipe({
    name: 'imgFilter'
})
export class ImgFilterPipe implements PipeTransform {
    transform(items: ItemDefinition[], filter): ItemDefinition[] {
        if (filter.trim().length<=0) {
            return items;
        }
        return items.filter(item => (item.nome.indexOf(filter) > -1));
        //return _.filter(items, {filter});
    }
}
