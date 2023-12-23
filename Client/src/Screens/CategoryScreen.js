import React from "react";
import { View, Text } from "react-native";
import CategoryTabs from "../Components/Category/CategoryTabs";
import HomeSearch from "../Components/HomeSearch";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../color";

export default function CategoryScreen(){
    return(
        <>
            <HomeSearch />
            <CategoryTabs />
        </>
    )
}