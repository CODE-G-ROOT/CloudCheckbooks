import { Expose, Transform } from "class-transformer";

export class get_personas{
    @Expose  ({name : 'persona_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato personaID solo permite números.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    personaID: Number;

    @Expose  ({name : 'persona_nombre'})
    @Transform (({value})=>{
        const regex = /^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            throw {
                status: 400,
                message: `El dato personaNombre solo permite letras.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    personaNombre: String;

    @Expose  ({name : 'persona_phone'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato personPhone solo permite números.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    personPhone: Number;

    @Expose  ({name : 'persona_email'})
    @Transform (({value})=>{
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(regex.test(value)){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor person_email solo puede ser tipo string.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    personEmail: String;

    @Expose  ({name : 'ubicacion_id'})
    @Transform (({value})=>{
        if(Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado ubicacionID no es valido. El valor ${value} solo puede ser tipo numérico.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    ubicacionID: Number;



    constructor(personaID: Number,personaNombre: String,personPhone: Number,personEmail: String, ubicacionID: Number){
        this.personaID = personaID;
        this.personaNombre = personaNombre;
        this.personPhone = personPhone;
        this.personEmail = personEmail;
        this.ubicacionID = ubicacionID;
    }
}