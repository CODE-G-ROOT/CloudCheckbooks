import { Expose, Type, Transform } from "class-transformer";

export class get_usuarios {
    @Expose({ name: 'usu_id' })
    @Transform(({ value }) => {
        if (!Math.floor(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. No se permiten letras, ni simbolos".`
            };
        }
        return value;
    },
        { toClassOnly: true })
    usu_id: Number;

    @Expose({ name: 'usu_nickname' })
    @Transform(({ value }) => {
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]{1,50}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. No se permiten símbolos ni números".`
            };
        }
        return value;
    },
    { toClassOnly: true })
    nickname: String;

    @Expose({ name: 'usu_email' })
    @Transform(({ value }) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. Debe seguir el formato de email".`
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
                message: `El formato de fecha ingresado no es válido".`
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
                message: `El formato de fecha ingresado no es válido. No se permiten letras, ni simbolos".`
            };
        }
        return value;
    },
        { toClassOnly: true })
    libros_CANT: Number;

    constructor(usu_id: Number, nickname: string, usuario_email: String,password: String) {
        this.usu_id = usu_id;
        this.nickname = nickname;
        this.usuario_email = usuario_email;
        this.password = password;
    }
}