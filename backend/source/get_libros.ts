import { Expose, Transform } from "class-transformer";

export class get_libros{
    
    @Expose  ({name : 'libro_name'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `El dato libroName solo permite letas A-z .`
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
                message: `El dato talon_CANT solo permite números.`
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
                message: `El dato resposableID solo permite números..`
            }
        }
        return value;
    },
    {toClassOnly: true})
    resposableID: Number;
    
    constructor( libroName: String, talon_CANT: Number, resposableID: Number){
        this.libroName = libroName;
        this.resposableID = resposableID;
        this.talon_CANT = talon_CANT;
    }
}   