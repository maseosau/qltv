import React, { useState } from "react";
import Colors from "../color";
import InputField from "../Components/InputField";
import Btn from "../Components/Btn";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../contexts/authContext";
import axios from 'axios';
import { NAME_API } from "../config/ApiConfig";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
    const [userData, setUserData] = useState({
        username: '',
        fullname: '',
        phoneNumber: '',
        email: '',
        address: '',
    });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    function isStrongPassword(password) {
        // Kiểm tra độ dài mật khẩu
        if (password.length < 8) {
            return false;
        }

        // Kiểm tra chứa chữ hoa, chữ thường, số và ký tự đặc biệt
        const uppercaseCharacters = /[A-Z]/;
        const lowercaseCharacters = /[a-z]/;
        const numericCharacters = /[0-9]/;
        const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (
            !uppercaseCharacters.test(password) ||
            !lowercaseCharacters.test(password) ||
            !numericCharacters.test(password) ||
            !specialCharacters.test(password)
        ) {
            return false;
        }

        return true;
    }

    const signUp = () => {
        const isStrong = isStrongPassword(password);
        if (!isStrong) {
            return Alert.alert('Register failed', 'Password is not strong');
        }
        if (password !== confirmPassword) {
            return Alert.alert('Register failed', 'Passwords do not match');
        }

        // axios.get(NAME_API + 'getInfomation')
        // .then(() => {

        axios.post(NAME_API.LOCALHOST + '/register', {
            email: userData.email,
            username: userData.username,
            fullname: userData.fullname,
            password: password,
        })
        .then((response) => {
            if (response.status === 200) {
                // Registration successful, navigate to login screen or perform necessary actions
                Alert.alert('Register successfully', 'You can now log in.');
                // navigation.navigate('Login'); // Assuming 'navigation' is available
            } else {
                Alert.alert('Register failed', response.data.message || 'Unknown error occurred');
            }
        })
        .catch((error) => {
            console.error(error);
            Alert.alert('Register failed', 'Something went wrong');
        });
    };

    return (
        <SafeAreaView style={styles.registerContainer}>
            <Image style={styles.registerLogo} source={require('../../assets/small_logo_official.png')} />
            <Text style={styles.registerHeader}>
                Create an account
            </Text>
            <InputField icon="mail"
                placeholder="Enter your email"
                value={userData.email}
                onChangeText={(text) => setUserData({ ...userData, email: text })} />
            <InputField icon="person"
                placeholder="Enter your username"
                value={userData.username}
                onChangeText={(text) => setUserData({ ...userData, username: text })} />
            <InputField icon="person"
                placeholder="Enter your full name"
                value={userData.fullname}
                onChangeText={(text) => setUserData({ ...userData, fullname: text })} />
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
            <Btn text="REGISTER" onPress={() => signUp()}/>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginNavigate}>
                        Login now!
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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