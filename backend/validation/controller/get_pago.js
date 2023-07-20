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
export class get_pago {
    constructor(pago_id, monto_num, monto_palabras, valor_unitario, subtotal_unitario, total, metodo_pago_id){
        this.pago_id = pago_id;
        this.monto_num = monto_num;
        this.monto_palabras = monto_palabras;
        this.valor_unitario = valor_unitario;
        this.subtotal_unitario = subtotal_unitario;
        this.total = total;
        this.metodo_pago_id = metodo_pago_id;
    }
}

// * validaciones de las columnas
__decorate([
    Expose({ name: 'pago_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `el pago_identificador no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "pago_id", void 0);

__decorate([
    Expose({ name: 'monto_numumeros' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
        throw { status: 400, message: `el monto_numumeros no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "monto_num", void 0);

__decorate([
    Expose({ name: 'monto_en_palabras' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 150);
        else
        throw { status: 400, message: `el monto_en_palabras no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_pago.prototype, "monto_palabras", void 0);


__decorate([
    Expose({ name: 'valor_unidad' }),
    Transform(({ value }) => {
        if (Math.floor(value))
            return Math.floor(value);
        else
        throw { status: 400, message: `el valor_unidad no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "valor_unitario", void 0);

__decorate([
    Expose({ name: 'subtotal_unidad' }),
    Transform(({ value }) => {
        if (Math.floor(value))
            return Math.floor(value);
        else
        throw { status: 400, message: `el subtotal_unidad no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "subtotal_unitario", void 0);

__decorate([
    Expose({ name: 'total_monto' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
        throw { status: 400, message: `el total no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "total", void 0);

__decorate([
    Expose({ name: 'metodo_pago' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 150);
        else
        throw { status: 400, message: `el metodo_pago no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo number y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener letras o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "metodo_pago_id", void 0);