var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";

// Columnas pertenecientes a la tabla
export class get_libros {
constructor(libro_id, libro_name, talon_cant, responsable_id){
        this.libro_id = libro_id;
        this.libro_name = libro_name;
        this.talon_cant = talon_cant;
        this.responsable_id = responsable_id;
    }
}

// * validaciones de las columnas
__decorate([
    Expose({ name: 'libro_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value > 0))
            return Math.floor(value);
        else
            throw { status: 400, message: `el libro_identificador no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "libro_id", void 0);

__decorate([
    Expose({ name: 'libro_name' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 25);
        else
        throw { status: 400, message: `el persona_identificador no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "libro_name", void 0);

__decorate([
    Expose({ name: 'talon_cantidad' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return Math.floor(value);
        else
        throw { status: 400, message: `el talon_cantidad no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "talon_cant", void 0);

__decorate([
    Expose({ name: 'responsable_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
        throw { status: 400, message: `el responsable_identificador no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "responsable_id", void 0);