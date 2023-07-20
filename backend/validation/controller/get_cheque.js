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
export class get_cheque {
    constructor(cheque_id, persona_id, pago_id){
        this.cheque_id = cheque_id;
        this.persona_id = persona_id;
        this.pago_id = pago_id;
    }
}

// * validaciones de las columnas
__decorate([
    Expose({ name: 'cheque_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return value.Math.floor(value);
        else
            throw { status: 400, message: `el cheque_identificador no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_cheque.prototype, "cheque_id", void 0);

__decorate([
    Expose({ name: 'persona_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return value.Math.floor(value);
        else
        throw { status: 400, message: `el persona_identificador no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_cheque.prototype, "persona_id", void 0);

__decorate([
    Expose({ name: 'pago_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0 )
            return value.Math.floor(value);
        else
        throw { status: 400, message: `el pago_identificador no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_cheque.prototype, "pago_id", void 0);