import React from "react";
import { View, ActivityIndicator, StyleSheet} from "react-native";
import Colors from "../color";

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.main} />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})