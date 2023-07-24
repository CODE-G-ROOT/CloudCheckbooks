import { Expose, Transform } from "class-transformer";

export class get_recibos_caja{

    @Expose  ({name : 'persona_id'})
    @Transform (({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    libroID: Number;

    @Expose  ({name : 'pago_id'})
    @Transform (({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    pagoID: Number;

    constructor(libroID: Number,pagoID: Number){
        this.libroID = libroID;
        this.pagoID = pagoID;
    }
}