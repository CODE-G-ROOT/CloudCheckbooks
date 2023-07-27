import {Expose, Transform} from 'class-transformer';

export class get_fechas {

    @Expose ({name : 'fecha'})
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
    fecha : String;

    constructor  (fecha : String){
        this.fecha = fecha;
    }
}







