// import { Box, Heading, ScrollView, Text, View } from "native-base";
// import React from "react";
// import Colors from "../color";
// import OrderInfo from "../Components/OrderInfo";
// import { FontAwesome5, Ionicons } from "@expo/vector-icons";
// import OrderItem from "../Components/OrderItem";
// import OrderModel from "../Components/OrderModel";

// function OrderScreen() {
//     return (
//         <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
//             <Box>
//                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                     <OrderInfo
//                         title="SHIPPING INFO"
//                         success
//                         subTitle="Shipping: Ma Seo Sau"
//                         text="Pay Method: PayPal"
//                         icon={
//                             <FontAwesome5 
//                                 name="shipping-fast" 
//                                 size={30} 
//                                 color={Colors.white} 
//                             />
//                         }
//                     />
//                     <OrderInfo
//                         title="DELIVER TO"
//                         subTitle="Adress:"
//                         danger
//                         text="Phường Linh Trung, Thành phố Thủ Đức, Tp.Hồ Chí Minh"
//                         icon={
//                             <Ionicons 
//                                 name="location-sharp" 
//                                 size={30} 
//                                 color={Colors.white} 
//                             />
//                         }
//                     />
//                 </ScrollView>
//             </Box>
//             {/* Order Item */}
//             <Box px ={6} flex={1} pb={3}>
//                 <Heading bold fontSize={15} isTruncated my={4}>
//                     PRODUCTS
//                 </Heading>
//                 <OrderItem />
//                 {/* Total */}
//                 <OrderModel />
//             </Box>
//         </Box>
//     );
// }
// export default OrderScreen;


import React from "react";
import { View, ScrollView, Text } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderItem from "../Components/OrderItem";
import OrderModel from "../Components/OrderModel";

function OrderScreen() {
    return (
        <View style={{ backgroundColor: Colors.subGreen, flex: 1, paddingTop: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: 'fit-content' }}>
                <OrderInfo
                    title="SHIPPING INFO"
                    success
                    subTitle="Shipping: Ma Seo Sau"
                    text="Pay Method: PayPal"
                    icon={
                        <FontAwesome5
                            name="shipping-fast"
                            size={30}
                            color={Colors.white}
                        />
                    }
                />
                <OrderInfo
                    title="DELIVER TO"
                    subTitle="Address:"
                    danger
                    text="Phường Linh Trung, Thành phố Thủ Đức, Tp.Hồ Chí Minh"
                    icon={
                        <Ionicons
                            name="location-sharp"
                            size={30}
                            color={Colors.white}
                        />
                    }
                />
            </ScrollView>
            {/* Order Item */}
            <View style={{ paddingHorizontal: 6, flex: 1, paddingBottom: 3 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>
                    PRODUCTS
                </Text>
                <OrderItem />
                {/* Total */}
                <OrderModel />
            </View>
        </View>
    );
}

export default OrderScreen;
