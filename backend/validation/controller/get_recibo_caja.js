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


export class get_recibo_caja {
    constructor(
        recibo_caja_id,
        persona_id,
        pago_id
    ) {
        this.recibo_caja_id = recibo_caja_id;
        this.persona_id = persona_id;
        this.pago_id = pago_id;
    }
}
__decorate([
    Expose({ name: 'recibo_caja_identificador' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value > 0)
            return Math.floor(value);
        else
            throw {
                status: 400,
                message: `El formato de recibo_caja_identificador ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_recibo_caja.prototype, "recibo_caja_id", void 0);

__decorate([
    Expose({ name: 'persona_identificador' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de persona_identificador ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_recibo_caja.prototype, "persona_id", void 0);

__decorate([
    Expose({ name: 'pago_identificador' }),
    Transform(({ value }) => {
        if ( Math.floor(value))
            throw {
                status: 400,
                message: `El formato de pago_identificador ingresado no es válido. Debe seguir la especificación "INT > 0".`
            };
            return Math.floor(value);
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_recibo_caja.prototype, "pago_id", void 0);