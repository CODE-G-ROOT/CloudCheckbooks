import { Expose, Transform } from 'class-transformer';

export class get_bancos {
    @Expose({ name: 'banco_name' })
    @Transform(({ value }) => {
        if (typeof value !== 'string') {
            throw {
                status: 400,
                message: 'El valor solo puede ser de tipo string.'
            };
        }
        return value;
    })
    banco: string;

    constructor(banco: string) {
        this.banco = banco;
    }
}
