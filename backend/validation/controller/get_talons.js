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


export class get_talons {
    constructor(
        talon_id,
        talon_fecha,
        descripcion,
        libro_id,
        persona_id,
        responsable_id,
        talon_tipo_id,
        ubicacion_id,
        metodo_pago_id
    ) {
        this.talon_id = talon_id;
        this.talon_fecha = talon_fecha;
        this.descripcion = descripcion;
        this.libro_id = libro_id;
        this.persona_id = persona_id;
        this.responsable_id = responsable_id;
        this.talon_tipo_id = talon_tipo_id;
        this.ubicacion_id = ubicacion_id;
        this.metodo_pago_id = metodo_pago_id;
    }
}
__decorate([
    Expose({ name: 'talon_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw {
                status: 400,
                message: `El formato de talon_identificador ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "talon_id", void 0);

__decorate([
    Expose({ name: 'talon_date' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 25);
        else
        throw { status: 400, message: `el talon_date no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_talons.prototype, "talon_fecha", void 0);

__decorate([
    Expose({ name: 'definicion' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (1 < regex.test(value) && regex.test(value) < 51)
            return value.substring(0, 25);
        else
        throw { status: 400, message: `el definicion no cumple con los parametros requeridos:  
        posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
        El dato ${value} no puede contener carácteres especiales o números` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_talons.prototype, "descripcion", void 0);

__decorate([
    Expose({ name: 'libro_identificacion' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de libro_identificacion ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "libro_id", void 0);

__decorate([
    Expose({ name: 'persona_identificacion' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de persona_identificacion ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "persona_id", void 0);

__decorate([
    Expose({ name: 'responsable_identificacion' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de responsable_identificacion ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "responsable_id", void 0);

__decorate([
    Expose({ name: 'talon_tipo_identificacion' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de talon_tipo_id ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "talon_tipo_id", void 0);

__decorate([
    Expose({ name: 'ubicacion_identificacion' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de ubicacion_identificacion ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "ubicacion_id", void 0);

__decorate([
    Expose({ name: 'metodo_pago_identificacion' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de metodo_pago_identificacion ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_talons.prototype, "metodo_pago_id", void 0);