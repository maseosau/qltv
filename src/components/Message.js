import { View, Text } from "react-native";
import React from "react";

export default function Message({ bgColor, color, text }) {
    return (
        <View style={[styles.messageContainer, bgColor ? { backgroundColor: bgColor } : null]}>
            <Text style={[styles.messageText, color ? { color: color } : null]}>
                {text}
            </Text>
        </View>
    )
}