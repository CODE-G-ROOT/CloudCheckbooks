import { Expose, Type, Transform } from "class-transformer";

export class get_{
    @Expose({ name: 'citaFecha' })
    @Transform(({ value }) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(value)) {
          throw {
            status: 400,
            message: `El formato de fecha ingresado no es válido. Debe seguir el formato "YYYY-MM-DD".`
          };
        }
        return value;
    }, 
    { toClassOnly: true })
    citaDATE: Date;

    constructor( citaDATE : Date){
        this.citaDATE = citaDATE;
    }
}