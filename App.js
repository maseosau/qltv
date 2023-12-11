import React from "react";
import Btn from "./src/components/Btn";
import HomeProducts from "./src/components/HomeProducts";
import HomeSearch from "./src/components/HomeSearch";
import CartEmpty from "./src/components/CartEmpty";
import CartItem from "./src/components/Carttem";
import OrderInfo from "./src/components/OrderInfo";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "./src/color";

export default function App(){
  return (
    <View style={styles.container}>
      <OrderInfo 
      icon="person"
      title="Customer"
      subTitle="Duy"
      text="duyyyyyy@gmail.com"
      />
      <OrderInfo 
      icon="location"
      title="Order Infomation"
      subTitle="Address:"
      text="UIT"
      success={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.subGreen,
  }
})