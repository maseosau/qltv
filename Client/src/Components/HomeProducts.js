import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView, Pressable, Image, View } from 'react-native';
import Colors from '../color';
import ProductList from './ProductList';

export default function HomeProducts() {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 2,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 3,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 4,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 5,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 6,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 7,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 8,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 9,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 10,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 11,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 12,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
    ]);
    return (
        <ScrollView style={styles.productListContainer}>
            <ProductList products={products} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
    },
    

})