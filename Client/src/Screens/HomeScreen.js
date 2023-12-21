import React from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Colors from "../color";
import HomeProducts from "../Components/HomeProducts";
import HomeSearch from "../Components/HomeSearch";

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.subGreen }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <HomeSearch />
          <HomeProducts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;