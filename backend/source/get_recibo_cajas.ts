import { Expose, Transform } from "class-transformer";

export class get_libros{
    @Expose  ({name : 'recibo_caja_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    recibo_cajaID: Number;

    @Expose  ({name : 'persona_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
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
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    pagoID: Number;

    constructor(recibo_cajaID: Number,libroID: Number,pagoID: Number){
        this.recibo_cajaID = recibo_cajaID;
        this.libroID = libroID;
        this.pagoID = pagoID;
    }
}