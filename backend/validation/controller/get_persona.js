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


export class get_persona {
    constructor(
        persona_id,
        persona_nombre,
        person_phone,
        peron_email
    ) {
        this.persona_id = persona_id;
        this.persona_nombre = persona_nombre;
        this.person_phone = person_phone;
        this.peron_email = peron_email;
    }
}

__decorate([
    Expose({ name: 'persona_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw {
                status: 400,
                message: `El formato de persona_identificador ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_persona.prototype, "persona_id", void 0);

__decorate([
    Expose({ name: 'persona_name' }),
    Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if ( regex.test(value) && value < 51 )
            throw {
                status: 400,
                message: `El formato de persona_name ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return value.substring(0, 50);
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_persona.prototype, "persona_nombre", void 0);

__decorate([
    Expose({ name: 'person_celular' }),
    Transform(({ value }) => {
        if ( Math.floor(value) && value > 0)
            throw {
                status: 400,
                message: `El formato de person_celular ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_persona.prototype, "person_phone", void 0);

__decorate([
    Expose({ name: 'peron_correo' }),
    Transform(({ value }) => {
        const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        if ( regex.test(value))
            throw {
                status: 400,
                message: `El formato de usuario_id ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
        return value.substring(0, 64);
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_persona.prototype, "peron_email", void 0);

