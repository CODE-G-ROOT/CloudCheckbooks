import { Expose, Transform} from 'class-transformer';

export class get_cheque {
    @Expose ({name : 'cheque_id'})
    @Transform(({value}) => {
        if (!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    }, 
    {toClassOnly: true})
    chequeID: Number;

    @Expose ({name : 'persona_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
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
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            };
        }
        return value;
    },
    {toClassOnly: true})
    pagoID: Number;

    constructor(chequeID: Number, personaID: Number, pagoID: Number){
        this.chequeID = chequeID;
        this.personaID = personaID;
        this.pagoID = pagoID;
    }
}