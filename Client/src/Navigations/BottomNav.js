// import { View, Text, StyleSheet, Pressable } from "react-native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import HomeScreen from "../Screens/HomeScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
// import { Center } from "native-base";
// import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
// import Colors from "../color";
// import CartScreen from "../Screens/CartScreen";
// import StackNav from "./StackNav";

// const Tab = createBottomTabNavigator();
// const CustomTab = ({ children, onPress }) => (
//     <Pressable
//         onPress={onPress}
//         h={70}
//         w={70}
//         rounded='full'
//         bg={Colors.main}
//         top={-30}
//         shadow={2}>
//         {children}
//     </Pressable>
// );
// const BottomNav = () => {
//     return (
//         <Tab.Navigator
//             backBehavior="Main"
//             initialRouteName="Main"
//             screenOptions={{
//                 tabBarShowLabel: false,
//                 tabBarStyle: { ...styles.tab },
//                 headerShown: false,
//                 tabBarHideOnKeyboard: true,
//             }}
//         >
//             <Tab.Screen
//                 name="Main"
//                 component={StackNav}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <Center>
//                             {focused ? (
//                                 <Entypo name="home" size={24} color={Colors.main} />
//                             ) : (
//                                 <AntDesign name="home" size={24} color={Colors.black} />
//                             )}
//                         </Center>
//                     ),
//                 }}
//             />
//             {/* Cart */}
//             <Tab.Screen
//                 name="Cart"
//                 component={CartScreen}
//                 options={{
//                     tabBarButton: (props) => <CustomTab {...props} />,
//                     tabBarIcon: ({ focused }) => (
//                         <Center>
//                             {focused ? (
//                                 <FontAwesome5 
//                                     name="shopping-basket" 
//                                     size={24} 
//                                     color={Colors.white} 
//                                 />
//                             ) : (
//                                 <MaterialCommunityIcons 
//                                     name="shopping-outline" 
//                                     size={24} 
//                                     color={Colors.white} 
//                                 />
//                             )}
//                         </Center>
//                     ),
//                 }}
//             />
//             {/* Profile */}
//             <Tab.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <Center>
//                             {focused ? (
//                                 <FontAwesome name="user" size={24} color={Colors.main} />
//                             ) : (
//                                 <AntDesign name="user" size={24} color={Colors.black} />
//                             )}
//                         </Center>
//                     ),
//                 }}
//             />
//         </Tab.Navigator>
//     );
// };

// const styles = StyleSheet.create({
//     tab: {
//         elevation: 0,
//         backgroundColor: Colors.white,
//         height: 60,
//         // paddingTop: 5,
//     },
// })

// export default BottomNav;


import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../color";
import CartScreen from "../Screens/CartScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.customTab}>
    {children}
  </TouchableOpacity>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* Main */}
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.center}>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </View>
          ),
        }}
      />
      {/* Cart */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <View style={styles.center}>
              {focused ? (
                <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
              ) : (
                <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.white} />
              )}
            </View>
          ),
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.center}>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
  customTab: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.main,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    top: -30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNav;
