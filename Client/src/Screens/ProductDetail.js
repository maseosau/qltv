import React, { useState } from "react";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";
import Colors from "../color";
// import NumericInput from "react-native-numeric-input";
import Btn from "../Components/Btn";
import Message from "../Components/Message";
import ProductList from "../Components/ProductList";

export default function ProductDetail() {
    const [similarProducts, setSimilarProducts] = useState([
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
    ]);
    const [product, setProduct] = useState({
        id: 1,
        title: "Product 1",
        price: 100,
        description: "Product description for product 1 Product description for product 1 Product description for product 1Product description for product 1",
        rating: 4,
        image: require("../../assets/images/sapa.jpeg")
    });
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.productDetailContainer}>
            <ScrollView >
                <Image style={styles.productDetailImage} source={product.image} />
                <Text style={styles.productDetailTitle}>
                    {product.title}
                </Text>
                <View style={styles.flexContainer}>
                    <Text style={styles.productDetailPrice}>
                        Price: ${product.price}
                    </Text>
                    {/* <NumericInput
                        value={quantity}
                        onChange={value => setQuantity(value)}
                        totalWidth={140}
                        totalHeight={30}
                        iconSize={25}
                        step={1}
                        minValue={1}
                        maxValue={99}
                        textColor={Colors.main}
                    /> */}
                </View>
                <Text style={styles.productDetailDescription}>
                    {product.description}
                </Text>
                <View style={{backgroundColor: Colors.subGreen, padding: 20,}}>
                    <Message text="Product is very beautiful" />
                </View>
                <View style={styles.similarProductContainer}>
                    <Text style={styles.similarProducts}>Similar products</Text>
                </View>
                <ProductList products={similarProducts} />
            </ScrollView>
            <Btn text="Add to Cart" width="100%" />
        </View>
    )
}

const styles = StyleSheet.create({
    productDetailContainer: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 50,
        marginBottom: 5,
    },
    productDetailImage: {
        width: "100%",
        height: 200
    },
    productDetailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    flexContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    productDetailPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.red,
    },
    productDetailDescription: {
        lineHeight: 20,
        marginVertical: 10,
    },
    similarProductContainer: {
        backgroundColor: Colors.subGreen,
        marginTop: 15,
    },
    similarProducts: {
        fontSize: 18,
        color: Colors.main,
        paddingVertical: 15,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})