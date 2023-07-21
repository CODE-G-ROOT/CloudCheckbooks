import { Expose, Transform } from "class-transformer";

export class get_libros{
    @Expose  ({name : 'libro_id'})
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
    
    @Expose  ({name : 'libro_name'})
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
    libroName: String;

    @Expose  ({name : 'talon_cant'})
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
    talon_CANT: Number;

    @Expose  ({name : 'responsable_id'})
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
    resposableID: Number;
    
    constructor(libroID: Number, libroName: String, talon_CANT: Number, resposableID: Number){
        this.libroID = libroID,
        this.libroName = libroName,
        this.resposableID = resposableID,
        this.talon_CANT = talon_CANT
    }
}   