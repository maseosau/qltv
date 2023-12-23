import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Pressable, StyleSheet } from "react-native";
import axios from "axios";
import ProductList from "./ProductList";
import Loading from "./Loading";
import Colors from "../color";
import { AntDesign } from '@expo/vector-icons';
import { NAME_API } from "../config/ApiConfig";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
//21520766 -  Đặng Quốc Duy
export default function Collection({ title, sort, icon }) {
    const [products, setProducts] = useState(null);
    const navigation = useNavigation();
    
    const getProducts = () => {
        axios.get(NAME_API.LOCALHOST + '/products')
            .then((response) => {
                const sortedProducts = [...response.data.products].sort(sort);
                const firstSixProducts = sortedProducts.slice(0, 6);
                setProducts(firstSixProducts);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <View style={styles.productListContainer}>
            <View style={styles.collectionHeaderContainer}>
                <Text style={styles.collectionHeader}>
                    {title}
                </Text>
                <Image style={styles.iconImage} source={icon} />
            </View>
            <FlatList
                data={products}
                nestedScrollEnabled
                keyExtractor={item => item.id.toString()}
                scrollEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable key={item.id} style={styles.product} onPress={() => navigation.navigate("Single")}>
                        <Image source={{ uri: item.thumbnail }} alt={item.title} style={styles.productImage} />
                        <View style={styles.productContent}>
                            <Text style={styles.productName}
                                numberOfLines={2}
                                ellipsizeMode='tail'
                            >
                                {item.title}
                            </Text>
                            <View style={styles.smallContainer}>
                                <View style={styles.priceAndRating}>
                                    <Text style={styles.productPrices}>
                                        ${item.price}
                                    </Text>
                                    <Rating value={item.rating.rate} />
                                </View>
                                <Pressable style={styles.addToCart}>
                                    <AntDesign name="pluscircle" size={30} color={Colors.paypal} />
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    product: {
        width: 200,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    productImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    productContent: {
        paddingHorizontal: 4,
        paddingTop: 1,
    },
    productPrices: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.red,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
    },
    smallContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    collectionHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        margin: 10,
    },
    collectionHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
    },
    iconImage: {
        width: 30,
        height: 30,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
})