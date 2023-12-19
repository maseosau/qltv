import React, { useState } from "react";
import Colors from "../color";
import InputField from "../Components/InputField";
import Btn from "../Components/Btn";
import { View, Text, Image, TouchableOpacity, StyleSheet, } from "react-native"
import CheckBox from "react-native-check-box";
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckbox, setIsCheckbox] = useState(false);
    return (
        <View style={styles.loginContainer}>
            <Image style={styles.loginLogo} source={require('../../assets/small_logo_official.png')} />
            <Text style={styles.loginHeader}>
                Welcome to Chiccloset
            </Text>
            <InputField icon="person"
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername} />
            <InputField
                icon="lock-closed-outline"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword} />
            <View style={styles.loginOptions}>
                <View style={styles.loginRemember}>
                    <CheckBox
                        isChecked={isCheckbox}
                        onClick={() => setIsCheckbox(!isCheckbox)}
                    />
                    <Text> 
                        Remember me
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <Btn text="LOGIN" width="100%" />
            <View style={styles.loginAnotherContainer}>
                <Text style={styles.loginAnother}>
                    Or login with
                </Text>
                <View style={styles.loginSocial}>
                    <Btn icon="logo-facebook" text="Facebook" bgColor={Colors.blue} />
                    <Btn icon="logo-github" text="Github" bgColor={Colors.black} />
                </View>
            </View>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Do not have an account?
                </Text>
                <TouchableOpacity >
                    <Text style={styles.registerNavigate}>
                        Register now!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Colors.subGreen
    },
    loginLogo: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    loginHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    loginAnotherContainer: {
        margin: 10,

    },
    loginAnother: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    loginSocial: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    registerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 2,
    },
    registerText: {
        fontSize: 18,
    },
    registerNavigate: {
        color: Colors.main,
        fontSize: 18,
    },
    loginOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    loginRemember: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    forgotPassword: {
        color: Colors.blue,
    }
})