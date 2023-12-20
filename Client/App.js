import React from "react";
import RegisterScreen from "./src/Screens/RegisterScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import { View, StyleSheet } from "react-native";
import Colors from "./src/color";
import CartEmpty from "./src/Components/CartEmpty";
import ProductDetail from "./src/Screens/ProductDetail";
import { AuthProvider } from "./src/contexts/authContext";

export default function App(){
  return (
    <AuthProvider>
      <LoginScreen />
    </AuthProvider>
  )
}
