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
export class get_libros {
    constructor(talonID, talonDATE, responsableID, descripcion_, libroID, personaID, talonType, ubicacionID, metodo_pagoID) {
        this.talonID = talonID;
        this.talonDATE = talonDATE;
        this.responsableID = responsableID;
        this.descripcion_ = descripcion_;
        this.libroID = libroID;
        this.personaID = personaID;
        this.talonType = talonType;
        this.ubicacionID = ubicacionID;
        this.metodo_pagoID = metodo_pagoID;
    }
}
__decorate([
    Expose({ name: 'talon_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "talonID", void 0);
__decorate([
    Expose({ name: 'talon_fecha' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "talonDATE", void 0);
__decorate([
    Expose({ name: 'responsable_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "responsableID", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string sin simbolos. El dato que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_libros.prototype, "descripcion_", void 0);
__decorate([
    Expose({ name: 'libro_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "libroID", void 0);
__decorate([
    Expose({ name: 'persona_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "personaID", void 0);
__decorate([
    Expose({ name: 'talon_tipo' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "talonType", void 0);
__decorate([
    Expose({ name: 'ubicacion_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "ubicacionID", void 0);
__decorate([
    Expose({ name: 'metodo_pago_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_libros.prototype, "metodo_pagoID", void 0);
