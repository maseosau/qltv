import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView, Pressable, Image, View } from 'react-native';
import Colors from '../color';
import { useNavigation } from "@react-navigation/native";
import Rating from './Rating';
import { AntDesign } from '@expo/vector-icons';

export default function ProductList({ products }) {
    const navigation = useNavigation();
    return (
        <View style={styles.productList}>
            {
                products.map((product) => (
                    <Pressable key={product.id} style={styles.product} onPress={() => navigation.navigate("Single")}>
                        <Image source={product.image} alt={product.name} style={styles.productImage} />
                        <View style={styles.productContent}>
                            <Text style={styles.productName}
                                numberOfLines={2}
                                ellipsizeMode='tail'
                            >
                                {product.name}
                            </Text>
                            <View style={styles.smallContainer}>
                                <View style={styles.priceAndRating}>
                                    <Text style={styles.productPrices}>
                                        ${product.price}
                                    </Text>
                                    <Rating value={product.rating} />
                                </View>
                                <Pressable style={styles.addToCart}>
                                    <AntDesign name="pluscircle" size={30} color={Colors.paypal} />
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    productList: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: Colors.subGreen,
    },
    product: {
        width: '47%',
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 8,
        marginVertical: 10,
    },
    productImage: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
    },
    productContent: {
        paddingHorizontal: 4,
        paddingTop: 1,
    },
    productPrices: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 5,
    },
    smallContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})