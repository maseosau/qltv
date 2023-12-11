import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Colors from '../color';

export default function Btn({bgColor, color, text, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.btnContainer, bgColor ? { backgroundColor: bgColor} : {backgroundColor: Colors.main},]}
            onPress={onPress}
        >
            <Text style={[styles.btnText, color ? {color: color} : {color: Colors.white}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        paddingVertical: 10,
        paddingHorizontal: '15%',
        borderRadius: 50,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
    }
})