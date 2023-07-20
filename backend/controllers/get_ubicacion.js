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


export class get_ubicacion {
    constructor(
        ubicacion_id,
        ubicacion_direccion,
        ubicacion_ciudad,
        ubicacion_estado,
        ubicacion_pais
    ) {
        this.ubicacion_id = ubicacion_id;
        this.ubicacion_direccion = ubicacion_direccion;
        this.ubicacion_ciudad = ubicacion_ciudad;
        this.ubicacion_estado = ubicacion_estado;
        this.ubicacion_pais = ubicacion_pais;
    }
}
__decorate([
    Expose({ name: 'ubicacion_identificacion' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw {
                status: 400,
                message: `El formato de ubicacion_identificacion ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_ubicacion.prototype, "ubicacion_id", void 0);

__decorate([
    Expose({ name: 'ubicacion_direccion_' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|\-]+$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 50);
        else
        throw { status: 400, message: `el ubicacion_direccion_ no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_ubicacion.prototype, "ubicacion_direccion", void 0);

__decorate([
    Expose({ name: 'ubicacion_city' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 25);
        else
        throw { status: 400, message: `el ubicacion_city no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_ubicacion.prototype, "ubicacion_ciudad", void 0);

__decorate([
    Expose({ name: 'ubicacion_de_estado' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 25);
        else
        throw { status: 400, message: `el ubicacion_city no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_ubicacion.prototype, "ubicacion_estado", void 0);

__decorate([
    Expose({ name: 'ubicacion_de_pais' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 25);
        else
        throw { status: 400, message: `el ubicacion_city no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_ubicacion.prototype, "ubicacion_pais", void 0);