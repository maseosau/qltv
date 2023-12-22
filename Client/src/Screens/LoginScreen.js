import React, { useState, useEffect } from "react";
import Colors from "../color";
import InputField from "../Components/InputField";
import Btn from "../Components/Btn";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from "expo-checkbox";
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../contexts/authContext";
import axios from 'axios';
import { NAME_API } from "../config/ApiConfig";
import { useNavigation } from "@react-navigation/native";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export default function LoginScreen() {
    const {setUserId, isLoggedIn, setIsLoggedIn} = useAuth();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [isCheckbox, setIsCheckbox] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const loadRememberMe = async () => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                if (userToken !== null) {
                    setIsLoggedIn(true);
                }
                else {
                    console.log("Token not found");
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error('Error loading token:', error);
            }
        };
        loadRememberMe();
    }, []);

    const login = () => {
        axios.post(NAME_API.LOCALHOST + '/login', {
            username: username, password: password,
        })
            .then(async (response) => {
                if (response.status === 200) {
                    const token = response.data.token;
                    const decode = jwtDecode(token);
                    setUserId(decode.userId);
                    // Lưu token vào AsyncStorage
                    try {
                        if (isCheckbox) {
                            await AsyncStorage.setItem('userToken', token);
                        }
                        setIsLoggedIn(true);
                    } catch (error) {
                        console.error('Error saving token to AsyncStorage:', error);
                    }
                }
                else {
                    Alert.alert("Login failed", "Incorrect username or passwordddddddddddd")
                }
            })
            .catch(error => {
                console.error(error)
                Alert.alert("Login failed", "Incorrect username or password")
            });
    }


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
                        disabled={false}
                        value={isCheckbox}
                        onValueChange={() => setIsCheckbox(!isCheckbox)}
                    />
                    {/* <CheckBox
                        isChecked={isCheckbox}
                        onClick={}
                    /> */}
                    <Text>
                        Remember me
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <Btn text="LOGIN" width="100%" onPress={() => login()} />
            <View style={styles.loginAnotherContainer}>
                <Text style={styles.loginAnother}>
                    Or login with
                </Text>
                <View style={styles.loginSocial}>
                    <Btn icon="logo-facebook" text="Facebook" bgColor={Colors.blue} />
                    <Btn icon="logo-google" text="Google" bgColor={Colors.red} />
                </View>
            </View>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Do not have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
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