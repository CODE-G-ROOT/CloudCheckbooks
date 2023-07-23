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
export class get_pago {
    constructor(metodo_pagoID, mpNombre) {
        this.metodo_pagoID = metodo_pagoID;
        this.mpNombre = mpNombre;
    }
}
__decorate([
    Expose({ name: 'method_pago_id' }),
    Transform(({ value }) => {
        if (!Math.floor(value) && value > 0) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "metodo_pagoID", void 0);
__decorate([
    Expose({ name: 'mp_nombre' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo string. El dato que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_pago.prototype, "mpNombre", void 0);
