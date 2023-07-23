var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class get_cheque {
    constructor(chequeID, personaID, pagoID) {
        this.chequeID = chequeID;
        this.personaID = personaID;
        this.pagoID = pagoID;
    }
}
__decorate([
    Expose({ name: 'cheque_id' }),
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
], get_cheque.prototype, "chequeID", void 0);
__decorate([
    Expose({ name: 'persona_id' }),
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
], get_cheque.prototype, "personaID", void 0);
__decorate([
    Expose({ name: 'pago_id' }),
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
], get_cheque.prototype, "pagoID", void 0);
