import { Expose, Transform } from "class-transformer";

export class get_metodos_pago{
    @Expose ({name : 'method_pago_id'})
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
    metodo_pagoID : Number;

    @Expose  ({name : 'mp_nombre'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string. El dato que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    mpNombre: String;

    constructor(metodo_pagoID : Number, mpNombre: String){
        this.metodo_pagoID = metodo_pagoID;
        this.mpNombre = mpNombre;
    }

}