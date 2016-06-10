/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
export class TelefoneDefinition {

    static qtTelefones: number = 0;

    constructor(
            public id: number,
            public numero: string,
            public tipo: string){
        this.id = ++TelefoneDefinition.qtTelefones;
    }

    filter(list: TelefoneDefinition, filterOption: string){
        return list;
    }

}