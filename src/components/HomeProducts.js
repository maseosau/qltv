import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView, Pressable, Image, View } from 'react-native';
import Colors from '../color';

export default function HomeProducts() {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 2,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 3,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 4,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 5,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 6,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 7,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 8,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 9,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 10,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 11,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
        {
            id: 12,
            image: require('../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
        },
    ]);
    return (
        <ScrollView style={styles.productListContainer}>
            <View style={styles.productList}>
                {
                    products.map((product) => (
                        <Pressable key={product.id} style={styles.product}>
                            <Image source={product.image} alt={product.name} style={styles.productImage}/>
                            <View style={styles.productContent}>
                                <Text style={styles.productPrices}>
                                    {product.price}
                                </Text>
                                <Text style={styles.productName}
                                numberOfLines={2}
                                ellipsizeMode='tail'
                                >
                                {product.name}
                                </Text>
                            </View>
                        </Pressable>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
    },
    productList: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 25,
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
        fontSize: 10,
        marginTop: 5,
    },

})