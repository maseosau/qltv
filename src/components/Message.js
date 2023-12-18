import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../color";

export default function Message({ bgColor, color, text }) {
    return (
        <View style={[styles.messageContainer, bgColor ? { backgroundColor: bgColor } : {backgroundColor: Colors.white}]}>
            <Text style={[styles.messageText, color ? { color: color } : {color: Colors.black}]}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
    }
})