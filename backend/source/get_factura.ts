import {Expose, Transform} from 'class-transformer';

export class get_facturas {
    @Expose ({name : 'factura_id'})
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
    facturaID : Number;

    @Expose ({name : 'terminos_condiciones'})
    @Transform (({value})=>{
        if(!value){
            throw {
                status: 400,
                message: `Èl dato ingresado no es valido. Falta llenar el campo.`
            }
        }
        return value
    },
    {toClassOnly: true})
    terminosCondiciones : String;

    @Expose({name : 'comprador_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    compradorID : Number;

    @Expose({name : 'vendedor_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    vendedorID : Number;

    @Expose({name : 'pago_id'})
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
    pagoID : Number;

    @Expose({name : 'N_I_T'})
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
    NIT : Number;

    constructor  (facturaID : Number ,terminosCondiciones : String, NIT: Number,  compradorID: Number, vendedorID : Number, pagoID : Number){
        this.facturaID = facturaID,
        this.terminosCondiciones = terminosCondiciones,
        this.NIT = NIT,
        this.compradorID = compradorID,
        this.vendedorID = vendedorID,
        this.pagoID = pagoID
    }
}







