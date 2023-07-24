import { Expose, Transform} from 'class-transformer';

export class get_ubicacion {
    @Expose ({name : 'ubicacion_id'})
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
    ubicacionID: Number;

    @Expose ({name : 'ubicacion_direccion'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z0-9\s\-#.,]+$/;
        if(regex.test(value)){
            throw {
                status: 400,
                message: `Èl dato ingresado no es valido. El valor ${value} solo puede ser de tipo string y no puede contener los siguientes carácteres: "@, #, {}, [], ^". Si su consulta tiene alguno de estos carácteres, por favor corríjalos.`
            }
        }
        return value
    },
    {toClassOnly: true})
    ubicacionDIRECT : String;

    @Expose  ({name : 'ubicacion_ciudad'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string sin simbolos. El dato que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionCity: String;

    @Expose  ({name : 'ubicacion_estado'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string sin simbolos. El dato que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionEstado: String;

    @Expose  ({name : 'ubicacion_pais'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string sin simbolos. El dato que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionPais: String;

    constructor(ubicacionID: Number,ubicacionDIRECT : String,ubicacionCity: String,ubicacionPais: String, ubicacionEstado: String){
        this.ubicacionID = ubicacionID;
        this.ubicacionDIRECT  = ubicacionDIRECT ;
        this.ubicacionCity = ubicacionCity;
        this.ubicacionPais = ubicacionPais;
        this.ubicacionEstado = ubicacionEstado;
    }
}