import { Expose, Transform} from 'class-transformer';

export class get_cheques {

    @Expose ({name : 'persona_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `Para el identificador de la persona, se solicita que solo sea de tipo numérico.`
            };
        }
        return value
    },
    {toClassOnly: true})
    personaID: Number;

    @Expose ({name : 'pago_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `Para el identificador del pago, se solicita que solo sea de tipo numérico.`
            };
        }
        return value;
    },
    {toClassOnly: true})
    pagoID: Number;

    constructor(personaID: Number, pagoID: Number){
        this.personaID = personaID;
        this.pagoID = pagoID;
    }
}