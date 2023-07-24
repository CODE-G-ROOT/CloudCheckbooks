import { Expose, Type, Transform } from "class-transformer";

export class get_usuarios {
    @Expose({ name: 'usu_id' })
    @Transform(({ value }) => {
        if (Math.floor(value)) {
            throw {
                status: 400,
                message: `El valor de user_id es invalido. Solo se permiten datos de tipo number.`
            };
        }
        return value;
    },
        { toClassOnly: true })
    user_id: Number;

    @Expose({ name: 'usu_nickname' })
    @Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El valor de nickname es invalido. Solo se permiten registros de tipo string.`
            };
        }
        return value;
    },
    { toClassOnly: true })
    nickname: String;

    @Expose({ name: 'usu_email' })
    @Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (regex.test(value)) {
            throw {
                status: 400,
                message: `El valor de usuario_email es invalido. Solo se permiten registros de tipo string.`
            };
        }
        return value;
    },
    { toClassOnly: true })
    usuario_email: String;

    @Expose({ name: 'contraseña' })
    @Transform(({ value }) => {
        const regex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|\-]+$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El valor de password es invalido. Solo se permiten registros de tipo string.`
            };
        }
        return value;
    },
    { toClassOnly: true })
    password: String;

    @Expose({ name: 'libros_cantidad' })
    @Transform(({ value }) => {
        if (Math.floor(value)) {
            throw {
                status: 400,
                message: `El valor de libros_CANT es invalido. Solo se permiten registros de tipo number.`
            };
        }
        return value;
    },
        { toClassOnly: true })
    libros_CANT: Number;

    constructor(user_id: Number, nickname: string, usuario_email: String,password: String) {
        this.user_id = user_id;
        this.nickname = nickname;
        this.usuario_email = usuario_email;
        this.password = password;
    }
}