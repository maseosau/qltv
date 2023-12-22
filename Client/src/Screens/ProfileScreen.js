import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Profile from "../Components/Profile/Profile";
import Orders from "../Components/Profile/Orders";
import TabComponent from "../Components/Profile/Tabs";
import Colors from "../color";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { NAME_API } from "../config/ApiConfig";
import { useAuth } from "../contexts/authContext";

export default function ProfileScreen() {
    const navigation = useNavigation();
    const { userId, setUserId } = useAuth();
    const [userData, setUserData] = useState({
        fullname: '',
        created_at: '',
    });
    const getInformation = async () => {
        try {
            const response = await axios.get(`${NAME_API.LOCALHOST}/getInformation/${userId}`);
            // console.log(response.data.user.create_at);
            const user = response.data.user;

            const dateTime = new Date(user.create_at);
            const formattedDate = dateTime.getDate() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getFullYear();

            setUserData(prevUserData => ({
                ...prevUserData,
                fullname: user.fullname,
                created_at: formattedDate,
            }));
        } catch (error) {
            console.error(error);
            // Xử lý lỗi ở mức component hoặc nơi gọi hàm getInformation
            throw error;
        }
    };
    useEffect(() => {
        getInformation();
    }, [userData.fullname])

    return (
        <>
            <View style={styles.profileContainer}>
                <View style={styles.profileInfomation}>
                    {/* <Image source={user.image} style={styles.profileAvatar} /> */}
                    <View style={styles.profileBox}>
                        <Text style={styles.profileName}>
                            {userData.fullname}
                        </Text>
                        <Text style={styles.profileJoin}>
                            Joined {userData.created_at}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Icon name="settings-outline" style={styles.iconSettings} />
                </TouchableOpacity>
            </View>
            <TabComponent />
        </>
    )
};

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: Colors.main,
        padding: 10,
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    profileInfomation: {
        // width: "100%",
        // height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    profileBox: {
        marginLeft: 10,
    },
    profileOrder: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // // width: "100%",
        backgroundColor: Colors.white,
        // margin: 10,
        // padding: 10,
        // borderRadius: 12,
    },
    profileAvatar: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 30,
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
    },
    delivered: {
        color: Colors.main,
        fontSize: 16,
    },
    inprogress: {
        color: Colors.paypal,
        fontSize: 16,
    },
    canceled: {
        color: Colors.red,
        fontSize: 16,
    },
    iconSettings: {
        color: Colors.white,
        fontSize: 30,
    }
})
