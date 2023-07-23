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
    constructor(pagoID, monto_NUM, montoPalabras, val_UNI, subtotal_item, total_, metodo_p_ID) {
        this.pagoID = pagoID;
        this.monto_NUM = monto_NUM;
        this.montoPalabras = montoPalabras;
        this.val_UNI = val_UNI;
        this.subtotal_item = subtotal_item;
        this.total_ = total_;
        this.metodo_p_ID = metodo_p_ID;
    }
}
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
], get_pago.prototype, "pagoID", void 0);
__decorate([
    Expose({ name: 'monto_num' }),
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
], get_pago.prototype, "monto_NUM", void 0);
__decorate([
    Expose({ name: 'monto_palabras' }),
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
], get_pago.prototype, "montoPalabras", void 0);
__decorate([
    Expose({ name: 'valor_unitario' }),
    Transform(({ value }) => {
        if (!Math.floor(value)) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "val_UNI", void 0);
__decorate([
    Expose({ name: 'subtotal_por_item' }),
    Transform(({ value }) => {
        if (!Math.floor(value)) {
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof (value)}.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], get_pago.prototype, "subtotal_item", void 0);
__decorate([
    Expose({ name: 'total' }),
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
], get_pago.prototype, "total_", void 0);
__decorate([
    Expose({ name: 'metodo_pago_id' }),
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
], get_pago.prototype, "metodo_p_ID", void 0);
