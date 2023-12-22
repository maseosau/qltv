import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../color';
//21520766 -  Đặng Quốc Duy
export default function InputField({ icon, placeholder, value, onChangeText, secureTextEntry, setSecureTextEntry }) {
    return (
        <View style={styles.inputField}>
            <Icon name={icon} style={styles.icon} />
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry} />
            {
                // console.log(secureTextEntry)
                secureTextEntry === undefined ? null : (secureTextEntry === true ? <Icon name="eye-outline" style={styles.iconEye} onPress={setSecureTextEntry} /> :
                    <Icon name="eye-off-outline" style={styles.iconEye} onPress={setSecureTextEntry} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        marginVertical: 10
    },
    inputField: {
        width: '100%',
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
        marginVertical: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.white,
    },
    icon: {
        fontSize: 30,
        color: "gray",
    },
    textInput: {
        width: "85%",
        color: Colors.main
    },
    iconEye: {
        position: 'absolute',
        right: 10,
        fontSize: 20,
        color: Colors.main
    }
})