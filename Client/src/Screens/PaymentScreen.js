// import { Box, Button, Center, FormControl, HStack, Input, ScrollView, Spacer, Text, VStack } from "native-base";
// import React from "react";
// import Colors from "../color";
// import {Ionicons, FontAwesome} from "@expo/vector-icons";

// const paymentMethods = [
//     {
//         image: require("../../assets/images/paypal.png"),
//         alt: "paypal",
//         icon: "Ionicons",
//     },
//     {
//         image: require("../../assets/images/momo.png"),
//         alt: "momo",
//         icon: "fontAwesome",
//     },
//     {
//         image: require("../../assets/images/zalopay.png"),
//         alt: "zalopay",
//         icon: "fontAwesome",
//     },
// ];

// export default function PaymentScreen(){
//     return (
//         <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
//             {/* Header */}
//             <Center pb={15}>
//                 <Text color={Colors.white} fontSize={14} bold>
//                     PAYMENT METHOD
//                 </Text>
//             </Center>
//             {/* Selection */}
//             <Box h="full" bg={Colors.subGreen} px={5}>
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     <VStack space={6} mt={5}>
//                         {paymentMethods.map((i, index) =>(
//                             <HStack
//                                 key={index}
//                                 alignItems="center"
//                                 bg={Colors.white}
//                                 px={3}
//                                 py={1}
//                                 justifyContent="space-between"
//                                 rounded={10}
//                             >
//                                 <Box>
//                                     <Image 
//                                         source={i.image}
//                                         alt={i.alt}
//                                         resizeMode="contain"
//                                         w={60}
//                                         h={50}
//                                     />
//                                 </Box>
//                                 {i.icon === "Ionicons" ? (
//                                     <Ionicons 
//                                         name="cherkmark-circle"
//                                         size={30}
//                                         color={Colors.main}
//                                     />
//                                 ) : (
//                                     <FontAwesome 
//                                         name="circle-thin"
//                                         size={30}
//                                         color={Colors.main}
//                                     />
//                                 )}
//                             </HStack>
//                         ))}
//                         <Button
//                             bg={Colors.main}
//                             color={Colors.white}
//                             mt={5}
//                         >
//                             CONTINUE
//                         </Button>
//                         <Text italic textAlign="center">
//                             Payment method is <Text bold>Paypal</Text> by default
//                         </Text>
//                     </VStack>
//                 </ScrollView>
//             </Box>
//         </Box>
//     );
// };


import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/momo.png"),
    alt: "momo",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/images/zalopay.png"),
    alt: "zalopay",
    icon: "FontAwesome",
  },
];

export default function PaymentScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: Colors.main }}>
      {/* Header */}
      <View style={{ alignItems: "center", paddingBottom: 15 }}>
        <Text style={{ color: Colors.white, fontSize: 14, fontWeight: "bold" }}>
          PAYMENT METHOD
        </Text>
      </View>
      {/* Selection */}
      <View style={{ flex: 1, backgroundColor: Colors.subGreen, paddingHorizontal: 15 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 5 }}>
            {paymentMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: Colors.white,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  justifyContent: "space-between",
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    source={method.image}
                    resizeMode="contain"
                    style={{ width: 60, height: 50 }}
                  />
                </View>
                {method.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                backgroundColor: Colors.main,
                paddingVertical: 10,
                alignItems: "center",
                marginTop: 10,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("Placeorder")}
            >
              <Text style={{ color: Colors.white }}>CONTINUE</Text>
            </TouchableOpacity>
            <Text style={{ fontStyle: "italic", textAlign: "center", marginTop: 10 }}>
              Payment method is <Text style={{ fontWeight: "bold" }}>Paypal</Text> by default
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
