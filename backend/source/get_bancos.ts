import {Expose, Transform} from 'class-transformer';

export class get_bancos {

    @Expose ({name : 'banco_name'})
    @Transform (({value})=>{
        if(value){
            throw {
                status: 400,
                message: `Los terminos y condiciones solo pueden ser de tipo string.`
            }
        }
        return value
    },
    {toClassOnly: true})
    banco : String;

    constructor  (banco : String){
        this.banco = banco;
    }
}

