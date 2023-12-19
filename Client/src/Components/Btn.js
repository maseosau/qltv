import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Colors from '../color';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Btn({bgColor, color, text, onPress, icon, width }) {
    return (
        <TouchableOpacity
            style={[styles.btnContainer, 
                bgColor ? { backgroundColor: bgColor} : {backgroundColor: Colors.main},
                width ? { width: width } : { width: "auto" } 
            ]}
            onPress={onPress}
        >
            {icon ? <Icon name={icon} style={[styles.btnIcon, color ? {color: color} : {color: Colors.white}]} /> : null}
            <Text style={[styles.btnText, color ? {color: color} : {color: Colors.white}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        paddingVertical: 10,
        paddingHorizontal: '10%',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    btnText: {
        fontSize: 18,
    },
    btnIcon: {
        fontSize: 30,
    }
})