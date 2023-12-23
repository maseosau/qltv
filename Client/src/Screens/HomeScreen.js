import React from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar, FlatList } from "react-native";
import Colors from "../color";
import HomeProducts from "../Components/HomeProducts";
import HomeSearch from "../Components/HomeSearch";
import Collection from "../Components/Collection";
import HomeCarousel from "../Components/HomeCarousel";

function HomeScreen() {
  const collections = [
    {
      title: "Hot Deals",
      sort: (a, b) => a.price - b.price,
      icon: require("../../assets/images/fire.png")
    },
    {
      title: "New Arrivals",
      sort: (a, b) => b.rating.rate - a.rating.rate,
      icon: require("../../assets/images/medal.png")
    },
  ];

  const renderCollectionItem = ({ item }) => (
    <Collection title={item.title} sort={item.sort} icon={item.icon} />
  );
  // 21520766 - Đặng Quốc Duy
  return (
    <>
      <HomeSearch />
      <FlatList
        data={collections}
        renderItem={renderCollectionItem}
        keyExtractor={(item, index) => index.toString()}
        // ListHeaderComponent={<HomeCarousel />}
      />
    </>
  );
}

export default HomeScreen;