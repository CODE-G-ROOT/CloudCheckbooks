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
export class get_facturas {
    constructor(facturaID, terminosCondiciones, NIT, compradorID, vendedorID, pagoID) {
        this.facturaID = facturaID,
            this.terminosCondiciones = terminosCondiciones,
            this.NIT = NIT,
            this.compradorID = compradorID,
            this.vendedorID = vendedorID,
            this.pagoID = pagoID;
    }
}
__decorate([
    Expose({ name: 'factura_id' }),
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
], get_facturas.prototype, "facturaID", void 0);
__decorate([
    Expose({ name: 'terminos_condiciones' }),
    Transform(({ value }) => {
        const regex = /^[A-Za-z0-9!$%&*()_+:;<>,.?~\\/\|\-]+$/;
        if (regex.test(value)) {
            throw {
                status: 400,
                message: `Èl dato ingresado no es valido. El valor ${value} solo puede ser de tipo string y no puede contener los siguientes carácteres: "@, #, {}, [], ^". Si su consulta tiene alguno de estos carácteres, por favor corríjalos.`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], get_facturas.prototype, "terminosCondiciones", void 0);
__decorate([
    Expose({ name: 'comprador_id' }),
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
], get_facturas.prototype, "compradorID", void 0);
__decorate([
    Expose({ name: 'vendedor_id' }),
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
], get_facturas.prototype, "vendedorID", void 0);
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
], get_facturas.prototype, "pagoID", void 0);
__decorate([
    Expose({ name: 'N_I_T' }),
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
], get_facturas.prototype, "NIT", void 0);
