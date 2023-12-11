import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Colors from '../color';
import { SwipeListView } from 'react-native-swipe-list-view';
import NumericInput from 'react-native-numeric-input'; // Kiểm tra xem thư viện này đã được import đúng chưa
import Icon from 'react-native-vector-icons/Ionicons'; // Đảm bảo thư viện icon đã được import

const CartItem = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 2,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 3,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 2,
        },
        {
            id: 4,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 3,
        },
        {
            id: 5,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 6,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 7,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 8,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 9,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 10,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 11,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
        {
            id: 12,
            image: require('../../assets/favicon.png'),
            name: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
            price: 111,
            quantity: 1,
        },
    ]);

    const updateQuantity = (index, newQuantity) => {
        const updatedItems = [...items];
        updatedItems[index].quantity = newQuantity;
        setItems(updatedItems);
    };

    const renderItem = ({ item, index }) => {
        return (
            <Pressable>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.cartItemImageContainer}>
                            <Image
                                source={item.image}
                                alt={item.name}
                                style={styles.cartItemImage}
                            />
                        </View>
                        <View style={styles.cartItemContent}>
                            <Text style={styles.cartItemName} numberOfLines={2} ellipsizeMode='tail'>
                                {item.name}
                            </Text>
                            <Text style={styles.cartItemPrice}>
                                ${item.price}
                            </Text>
                            <NumericInput
                                value={item.quantity}
                                onChange={(value) => updateQuantity(index, value)}
                                totalWidth={100}
                                totalHeight={30}
                                iconSize={25}
                                step={1}
                                minValue={1}
                                maxValue={99}
                                valueType='integer'
                                rounded
                                textColor={Colors.black}
                                iconStyle={{ color: Colors.white }}
                                rightButtonBackgroundColor={Colors.main}
                                leftButtonBackgroundColor={Colors.main} />
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    };

    const renderHiddenItem = () => {
        return (
            <TouchableOpacity style={styles.iconDeleteContainer}>
                <View style={styles.iconDeletePosition}>
                    <Icon name='trash-outline' style={styles.iconDelete} />
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.cartItemContainer}>
            <SwipeListView
                rightOpenValue={-50}
                previewRowKey='0'
                previewOpenValue={-40}
                previewOpenDelay={3000}
                data={items}
                renderHiddenItem={renderHiddenItem}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

export default CartItem;

// Các phần styles và các phần code khác không thay đổi


const styles = StyleSheet.create({
    itemContainer: {
        marginLeft: 20,
        marginBottom: 15,
    },
    item: {
        backgroundColor: Colors.white,
        shadowOffset: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cartItemImageContainer: {
        width: '25%',
        backgroundColor: Colors.deepGray,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 120,
    },
    cartItemImage: {
        width: '80%', // Giả sử hình ảnh chiếm 80% chiều rộng của cartItemImageContainer
        resizeMode: 'contain',
    },
    cartItemContent: {
        width: '70%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'column',
        gap: 5,
    },
    cartItemName: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 14,
    },
    cartItemPrice: {
        color: Colors.lightBlack,
        fontWeight: 'bold',
    },
    iconDeleteContainer: {
        backgroundColor: Colors.red,
        width: 50,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        height: 120,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconDeletePosition: {
        alignItems: 'center',
    },
    iconDelete: {
        fontSize: 24,
        color: Colors.white,
    },
    cartItemContainer: {
        marginRight: 10,
    },
})