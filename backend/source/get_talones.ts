import { Expose, Transform } from "class-transformer";

export class get_talones{
    // ! ESTA VALIDACIÓN DEBE DESER TIPO DATE O FECHA, QUEDA PENDIENTE

    @Expose  ({name : 'descripcion'})
    @Transform (({value})=>{
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado descripcion_ no es valido.  El valor solo puede ser string.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    descripcion_: String;

    @Expose  ({name : 'libro_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado libroID no es valido. El valor solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    libroID: Number;

    @Expose  ({name : 'persona_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado personaID no es valido. El valor solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    personaID: Number;

    @Expose  ({name : 'talon_tipo_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado talonType no es valido. El valor solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    talonType: Number;

    @Expose  ({name : 'ubicacion_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado ubicacionID no es valido. El valor solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionID: Number;

    @Expose  ({name : 'metodo_pago_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado metodo_pagoID no es valido. El valor solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    metodo_pagoID: Number;

    @Expose  ({name : 'id_fecha'})
    @Transform (({value})=>{
        if(value){
            throw {
                status: 400,
                message: `El dato ingresado metodo_pagoID no es valido. El valor solo puede ser de tipo number.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    fecha: Number;

    constructor(fecha: Number ,responsableID: Number,descripcion_: String,libroID: Number,personaID: Number,talonType: Number,ubicacionID: Number,metodo_pagoID: Number){
        this.fecha = fecha;
        this.descripcion_ = descripcion_;
        this.libroID = libroID;
        this.personaID = personaID;
        this.talonType = talonType;
        this.ubicacionID = ubicacionID;
        this.metodo_pagoID = metodo_pagoID;
    }
}