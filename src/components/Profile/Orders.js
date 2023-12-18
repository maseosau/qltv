// import { Box, HStack, ScrollView, Text } from "native-base";
// import React from "react";
// import { Pressable } from "react-native";
// import Colors from "../../color";

// const Orders = () => {
//     return (
//         <Box h="full" bg={Colors.white} pt={5}>
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 {/* Paid Order */}
//                 <Pressable>
//                     <HStack
//                         space={4}
//                         justifyContent="space-between"
//                         alignItems="center"
//                         bg={Colors.deepGray}
//                         py={5} 
//                         px={2}
//                     >
//                         <Text fontSize={9} color={Colors.blue} isTruncated>
//                             64645383844766557
//                         </Text>
//                         <Text fontSize={12} bold color={Colors.black} isTruncated>
//                             PAID
//                         </Text>
//                         <Text fontSize={11} italic color={Colors.black} isTruncated>
//                             Dec 12 2023
//                         </Text>
//                         <Button 
//                             px={7} 
//                             py={1.5}
//                             rounded={50}
//                             bg={Colors.main} 
//                             _text={{
//                                 color: Colors.white,
//                             }}
//                             _pressed={{
//                                 bg: Colors.main,
//                             }}
//                         >
//                             $456 
//                         </Button>
//                     </HStack>
//                 </Pressable>
//                 {/* Not Paid */}
//                 <Pressable>
//                     <HStack
//                         space={4}
//                         justifyContent="space-between"
//                         alignItems="center"
//                         py={5} 
//                         px={2}
//                     >
//                         <Text fontSize={9} color={Colors.blue} isTruncated>
//                             64645383844766557
//                         </Text>
//                         <Text fontSize={12} bold color={Colors.black} isTruncated>
//                             NOT PAID
//                         </Text>
//                         <Text fontSize={11} italic color={Colors.black} isTruncated>
//                             Jan 12 2023
//                         </Text>
//                         <Button 
//                             px={7} 
//                             py={1.5}
//                             rounded={50}
//                             bg={Colors.red} 
//                             _text={{
//                                 color: Colors.white,
//                             }}
//                             _pressed={{
//                                 bg: Colors.red,
//                             }}
//                         >
//                             $23
//                         </Button>
//                     </HStack>
//                 </Pressable>
//             </ScrollView>
//         </Box >
//     );
// };

// export default Orders;

import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import Colors from "../../color";

const Orders = () => {
    return (
        <View style={{ height: "100%", backgroundColor: Colors.white, paddingTop: 5 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Paid Order */}
                <Pressable>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: Colors.deepGray,
                            paddingVertical: 5,
                            paddingHorizontal: 2,
                        }}
                    >
                        <Text style={{ fontSize: 9, color: Colors.blue }} numberOfLines={1}>
                            64645383844766557
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: "bold", color: Colors.black }} numberOfLines={1}>
                            PAID
                        </Text>
                        <Text style={{ fontSize: 11, fontStyle: "italic", color: Colors.black }} numberOfLines={1}>
                            Dec 12 2023
                        </Text>
                        <Pressable
                            style={{
                                paddingHorizontal: 7,
                                paddingVertical: 1.5,
                                borderRadius: 50,
                                backgroundColor: Colors.main,
                            }}
                        >
                            <Text style={{ color: Colors.white }}>$456</Text>
                        </Pressable>
                    </View>
                </Pressable>
                {/* Not Paid */}
                <Pressable>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingVertical: 5,
                            paddingHorizontal: 2,
                        }}
                    >
                        <Text style={{ fontSize: 9, color: Colors.blue }} numberOfLines={1}>
                            64645383844766557
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: "bold", color: Colors.black }} numberOfLines={1}>
                            NOT PAID
                        </Text>
                        <Text style={{ fontSize: 11, fontStyle: "italic", color: Colors.black }} numberOfLines={1}>
                            Jan 12 2023
                        </Text>
                        <Pressable
                            style={{
                                paddingHorizontal: 7,
                                paddingVertical: 1.5,
                                borderRadius: 50,
                                backgroundColor: Colors.red,
                            }}
                        >
                            <Text style={{ color: Colors.white }}>$23</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default Orders;
