import { Expose, Transform} from 'class-transformer';

export class get_ubicaciones {

    @Expose ({name : 'ubicacion_direccion'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z0-9\s\-#.,]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `Èl dato ingresado ubicacionDIRECT no es valido. El valor solo permite datos tipo string.`
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
                message: `El dato ingresado ubicacionCity no es valido. El valor solo permite datos tipo string.`
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
                message: `El dato ingresado ubicacionEstado no es valido. El valor solo permite datos tipo string.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionEstado: String;

    @Expose  ({name : 'ubicacion_pais'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!    regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado ubicacionPais no es valido. El valor solo permite datos tipo string.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionPais: String;

    constructor(ubicacionDIRECT : String,ubicacionCity: String,ubicacionPais: String, ubicacionEstado: String){
        this.ubicacionDIRECT  = ubicacionDIRECT ;
        this.ubicacionCity = ubicacionCity;
        this.ubicacionPais = ubicacionPais;
        this.ubicacionEstado = ubicacionEstado;
    }
}