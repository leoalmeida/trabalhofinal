/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
export class TelefoneDefinition {


    //Telefone
    public id: number;
    public numero: string;
    public tipo: string;

    static qtTelefones: number = 0;

    constructor() {
        this.id = ++TelefoneDefinition.qtTelefones;
    }

    filter(list: TelefoneDefinition, filterOption: string){
        return list;
    }

}