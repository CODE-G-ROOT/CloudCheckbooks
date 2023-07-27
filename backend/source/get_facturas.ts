import {Expose, Transform} from 'class-transformer';

export class get_facturas {

    @Expose ({name : 'terminos_condiciones'})
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
    terminosCondiciones : String;

    @Expose({name : 'comprador_id'})
    @Transform(({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `EL identificador del comprador, solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    compradorID : Number;

    @Expose({name : 'vendedor_id'})
    @Transform(({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El identificador del vendedorID solo puede ser de tipo numérico.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    vendedorID : Number;

    @Expose({name : 'pago_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El identificador del pagoID solo puede ser de tipo numérico.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    pagoID : Number;

    @Expose({name : 'N_I_T'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El identificador del NIT solo puede ser de tipo numérico.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    NIT : Number;
    
    @Expose({name : 'id_fecha_emision'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El identificador del NIT solo puede ser de tipo numérico.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    emision : Number;

    @Expose({name : 'id_fecha_recepcion'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El identificador del NIT solo puede ser de tipo numérico.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    recepcion : Number;

    constructor  (terminosCondiciones : String, NIT: Number,  compradorID: Number, vendedorID : Number, pagoID : Number,emision : Number,recepcion : Number){
        this.terminosCondiciones = terminosCondiciones
        this.NIT = NIT
        this.compradorID = compradorID
        this.vendedorID = vendedorID
        this.pagoID = pagoID
        this.emision = emision
        this.recepcion = recepcion
    }
}







