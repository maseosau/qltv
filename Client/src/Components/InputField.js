import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../color';
//21520766 -  Đặng Quốc Duy
export default function InputField({ icon, placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <View style={styles.inputField}>
            <Icon name={icon} style={styles.icon} />
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry} />
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
        width: "85%"
    },
})