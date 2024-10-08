import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import { insertSession } from '../db'
import Icon from 'react-native-vector-icons/Ionicons' // Importar ícono

const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false) // Nuevo estado
    const [triggerLogin, { data, isSuccess, isError, error }] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data } = await triggerLogin({ email, password })
            insertSession(data)
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))
        } catch (error) {
            console.log(error)
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    setErrorPassword("")
                    break
                case "password":
                    setErrorPassword(error.message)
                    setErrorEmail("")
                    break
                default:
                    break
            }
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />

                <View style={styles.passwordContainer}>
                    <InputForm
                        label="Password"
                        value={password}
                        onChangeText={(t) => setPassword(t)}
                        isSecure={!isPasswordVisible} // Toggle para mostrar u ocultar contraseña
                        error={errorPassword}
                    />
                    <Pressable
                        style={styles.icon}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        <Icon
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={30}
                            color="white"
                        />
                    </Pressable>
                </View>

                <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
                <Text style={styles.sub}>¿No tenes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registrarme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    },
    container: {
        width: "90%",
        backgroundColor: colors.background,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 20, // Ajusta según sea necesario
    },
    sub: {
        fontSize: 14,
        fontFamily: "Josefin",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "white",
        width: "50%",
        backgroundColor: colors.background,
        padding: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        margin: 20,
    }
})
