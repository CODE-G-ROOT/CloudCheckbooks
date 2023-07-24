import { Expose, Transform } from "class-transformer";

export class get_pagos{

    @Expose ({name : 'monto_num'})
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
    monto_NUM : Number;

    @Expose  ({name : 'monto_palabras'})
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
    montoPalabras: String;

    @Expose({name : 'valor_unitario'})
    @Transform (({value})=>{
        if(!Math.floor(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value
    },
    {toClassOnly: true})
    val_UNI : Number;

    @Expose({name : 'subtotal_por_item'})
    @Transform (({value})=>{
        if(!Math.floor(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value
    },
    {toClassOnly: true})
    subtotal_item : Number;

    @Expose({name : 'total'})
    @Transform (({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value
    },
    {toClassOnly: true})
    total_ : Number;

    @Expose({name : 'metodo_pago_id'})
    @Transform (({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value
    },
    {toClassOnly: true})
    metodo_p_ID : Number;

    constructor(monto_NUM : Number ,montoPalabras: String ,val_UNI : Number ,subtotal_item : Number ,total_ : Number ,metodo_p_ID : Number){
        this.monto_NUM = monto_NUM;
        this.montoPalabras = montoPalabras;
        this.val_UNI = val_UNI;
        this.subtotal_item = subtotal_item;
        this.total_ = total_;
        this.metodo_p_ID = metodo_p_ID;
    }

}