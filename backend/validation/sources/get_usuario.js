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


export class get_usuario {
    constructor(
        usu_id,
        usu_nickname,
        usu_email,
        contraseña
    ) {
        this.usu_id = usu_id;
        this.usu_nickname = usu_nickname;
        this.usu_email = usu_email;
        this.contraseña = contraseña;
    }
}
__decorate([
    Expose({ name: 'usuario_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw {
                status: 400,
                message: `El formato de usuario_id ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_usuario.prototype, "usu_id", void 0);

__decorate([
    Expose({ name: 'usuario_nickname' }),
    Transform(({ value }) => {
        const regex = /^[a-zA-Z0-9_-]+$/;
        if ( regex.test(value))
            throw {
                status: 400,
                message: `El formato de usuario_id ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return value.substring(0, 50);
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_usuario.prototype, "usu_nickname", void 0);

__decorate([
    Expose({ name: 'usuario_email' }),
    Transform(({ value }) => {
        const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        if ( regex.test(value))
            throw {
                status: 400,
                message: `El formato de usuario_id ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return value.substring(0, 100);
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_usuario.prototype, "usu_email", void 0);

__decorate([
    Expose({ name: 'contraseñaa' }),
    Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if ( regex.test(value))
            return value.substring(0,100);
        else
            throw {
                status: 400,
                message: `El formato de usuario_id ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_usuario.prototype, "contraseña", void 0);

