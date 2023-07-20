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
export class get_metodo_pago {
constructor(metodo_pago_id, mp_nombre){
        this.metodo_pago_id = metodo_pago_id;
        this.mp_nombre = mp_nombre;
    }
}

// * validaciones de las columnas
__decorate([
    Expose({ name: 'metodo_pago_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `el metodo_pago_identificador no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_metodo_pago.prototype, "metodo_pago_id", void 0);

__decorate([
    Expose({ name: 'metodo_pago_nombre' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-z\s]+$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return Math.floor(value);
        else
        throw { status: 400, message: `el metodo_pago_nombre no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o letras`};
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_metodo_pago.prototype, "mp_nombre", void 0);