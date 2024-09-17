import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useRegisterMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../validations/registerSchema'
import Icon from 'react-native-vector-icons/Ionicons' // Importar íconos

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false) // Estado para alternar visibilidad
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false) // Estado para alternar visibilidad
    const [triggerRegister, { data, isSuccess, error: registerError }] = useRegisterMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            console.log("Registration successful:", data)
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))
        }

        if (registerError) {
            console.log("Registration error:", registerError)
        }
    }, [isSuccess, registerError])

    const onSubmit = async () => {
        try {
            registerSchema.validateSync({ email, password, confirmPassword })
            await triggerRegister({ email, password })
        } catch (error) {
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    setErrorPassword("")
                    setErrorConfirmPassword("")
                    break
                case "password":
                    setErrorEmail("")
                    setErrorPassword(error.message)
                    setErrorConfirmPassword("")
                    break
                case "confirmPassword":
                    setErrorEmail("")
                    setErrorPassword("")
                    setErrorConfirmPassword(error.message)
                    break
                default:
                    console.log("Unexpected error:", error)
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
                        isSecure={!isPasswordVisible} // Toggle para mostrar/ocultar contraseña
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

                <View style={styles.passwordContainer}>
                    <InputForm
                        label="Confirmar Password"
                        value={confirmPassword}
                        onChangeText={(t) => setConfirmPassword(t)}
                        isSecure={!isConfirmPasswordVisible} // Toggle para mostrar/ocultar confirmación de contraseña
                        error={errorConfirmPassword}
                    />
                    <Pressable
                        style={styles.icon}
                        onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    >
                        <Icon
                            name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
                            size={30}
                            color="white"
                        />
                    </Pressable>
                </View>

                <SubmitButton onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Iniciar sesión</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.background,
        alignItems: "center"
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
        fontFamily: "Josefin"
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "blue"
    }
})
