// import { View, Text } from "react-native";
// import React from "react";
// // import { createNativeStackNavigator } from "@react-navigation/native-st";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import {createNativeStackNavigator}
// import HomeScreen from "../Screens/HomeScreen";
// // import SingleProductScreen from "../Screens/SingleProductScreen";
// import ShippingScreen from "../Screens/ShippingScreen";
// import PaymentScreen from "../Screens/PaymentScreen";
// import PlaceOrderScreen from "../Screens/PlaceOrderScreen";
// import ProductDetail from "../Screens/ProductDetail";

// const Stack = createNativeStackNavigator();

// const StackNav = () => {
//     return (
//         <Stack.Navigator
//             initialRouteName="Home"
//             screenOptions={{
//                 headerShown: false,
//             }}
//         >
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Single" component={ProductDetail} /> 
//             <Stack.Screen name="Shipping" component={ShippingScreen} /> 
//             <Stack.Screen name="Checkout" component={PaymentScreen} />
//             <Stack.Screen name="Placeorder" component={PlaceOrderScreen} /> 
//         </Stack.Navigator>
//     )
// };

// export default StackNav;

import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; // Thay đổi import
import HomeScreen from "../Screens/HomeScreen";
import ShippingScreen from "../Screens/ShippingScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import PlaceOrderScreen from "../Screens/PlaceOrderScreen";
import ProductDetail from "../Screens/ProductDetail";
import OrderScreen from "../Screens/OrderScreen";

const Stack = createStackNavigator(); // Sử dụng createStackNavigator thay vì createNativeStackNavigator

const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Single" component={ProductDetail} /> 
            <Stack.Screen name="Shipping" component={ShippingScreen} /> 
            <Stack.Screen name="Payment" component={PaymentScreen} /> 
            <Stack.Screen name="Placeorder" component={PlaceOrderScreen} /> 
            <Stack.Screen name="Order" component={OrderScreen} />
        </Stack.Navigator>
    )
};

export default StackNav;
