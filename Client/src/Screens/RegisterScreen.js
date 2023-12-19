import React, { useState } from "react";
import Colors from "../color";
import InputField from "../Components/InputField";
import Btn from "../Components/Btn";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <View style={styles.registerContainer}>
            <Image style={styles.registerLogo} source={require('../../assets/small_logo_official.png')} />
            <Text style={styles.registerHeader}>
                Create an account
            </Text>
            <InputField icon="mail"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail} />
            <InputField icon="person"
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername} />
            <InputField
                icon="lock-closed-outline"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword} />
            <InputField
                icon="lock-closed-outline"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword} />
            <Btn text="REGISTER" />
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    Already have an account?
                </Text>
                <TouchableOpacity >
                    <Text style={styles.loginNavigate}>
                        Login now!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Colors.subGreen
    },
    registerLogo: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    registerHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    loginContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 2,
    },
    loginNavigate: {
        color: Colors.main,
        fontSize: 18,
    },
    loginText: {
        fontSize: 18,
    }
})