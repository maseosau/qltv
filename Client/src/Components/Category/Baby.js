import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView, Pressable, Image, View } from 'react-native';
import Colors from '../../color';
import ProductList from "../ProductList";
import Products from "../../data/Products";

export default function Baby() {
    return (
        <ScrollView style={styles.productListContainer}>
            <ProductList products={Products} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
        padding: 10,
    },
})