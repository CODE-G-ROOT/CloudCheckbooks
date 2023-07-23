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
    constructor(personaID, personaNombre, personPhone, personEmail) {
        this.personaID = personaID;
        this.personaNombre = personaNombre;
        this.personPhone = personPhone;
        this.personEmail = personEmail;
    }
}
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
    Expose({ name: 'persona_nombre' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string sin simbolos. El dato que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_libros.prototype, "personaNombre", void 0);
__decorate([
    Expose({ name: 'person_phone' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_libros.prototype, "personPhone", void 0);
__decorate([
    Expose({ name: 'person_email' }),
    Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string. El dato que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_libros.prototype, "personEmail", void 0);
