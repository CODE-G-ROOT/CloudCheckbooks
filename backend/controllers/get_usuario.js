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
    constructor(usu_id, nickname, usuario_email, password) {
        this.usu_id = usu_id;
        this.nickname = nickname;
        this.usuario_email = usuario_email;
        this.password = password;
    }
}
__decorate([
    Expose({ name: 'usu_id' }),
    Transform(({ value }) => {
        if (!Math.floor(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. No se permiten letras, ni simbolos".`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_usuario.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_surname' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. No se permiten símbolos ni números".`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_usuario.prototype, "nickname", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. Debe seguir el formato de email".`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_usuario.prototype, "usuario_email", void 0);
__decorate([
    Expose({ name: 'contraseña' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|\-]+$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido".`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_usuario.prototype, "password", void 0);
