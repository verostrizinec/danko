import {object,string} from 'yup'

export const loginSchema = object({
    password:string()
            .required("Password requerido")
            .min(8,"La contraseña debe tener mínimo 8 caracteres")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"La contraseña debe contener una mayúscula, una minúscula y un número"),
    email:string()
            .required("El email es requerido")
            .email("Email no válido")
})