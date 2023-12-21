import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Profile from "../Components/Profile/Profile";
import Orders from "../Components/Profile/Orders";
import TabComponent from "../Components/Profile/Tabs";
import Colors from "../color";


export default function ProfileScreen() {
    const [user, setUser] = useState(
        {
            id: 1,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
    )
    return (
        <>
            <View style={styles.profileContainer}>
                <Image source={user.image} style={styles.profileAvatar} />
                <Text style={styles.profileName}>
                    Quốc Duy
                </Text>
                <Text style={styles.profileJoin} >
                    Joined Dec 12 2023
                </Text>
            </View>
            <TabComponent />
        </>
    )
};

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: Colors.main,
        paddingTop: 10,
        paddingBottom: 10,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileAvatar: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5,
        color: Colors.white,
    },
    profileJoin: {
        fontStyle: 'italic',
        fontSize: 13,
        color: Colors.white,
    }
})