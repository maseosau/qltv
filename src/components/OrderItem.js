// import { 
//     Box, 
//     Button,
//     Center,
//     FlatList, 
//     HStack,
//     Image,
//     Pressable,
//     Text,
//     VStack,
// } from "native-base";
// import React from "react";
// import products from "../data/Products";
// import Colors from "../color";

// const OrderIterm = () => {
//     return (
//         <FlatList
//             showsVerticalScrollIndicator={false}
//             data={products.slice(0, 3)} 
//             keyExtractor={(item) => item._id} 
//             renderItem={({ item }) => (
//                 <Pressable>
//                     <Box mb={3}>
//                         <HStack
//                             alignItems="center"
//                             bg={Colors.white}
//                             shadow={1}
//                             rounded={10} 
//                             overflow="hidden"
//                         >
//                             <Center w="25%" bg={Colors.deepGray}>
//                                 <Image
//                                     source={{ uri: item.image }}
//                                     alt={item.name}
//                                     w="full"
//                                     h={24}
//                                     resizeMode="contain"
//                                 />
//                             </Center>
//                             <VStack w="60%" px={2}>
//                                 <Text isTruncated color={Colors.black} bold fontSize={12}>
//                                     {item.name}
//                                 </Text>
//                                 <Text color={Colors.lightBlack} mt={2} bold>
//                                     ${item.price}
//                                 </Text>
//                             </VStack>
//                             <Center>
//                                 <Button
//                                     bg={Colors.main}
//                                     _pressed={{ bg: Colors.main }} 
//                                     _text={{
//                                         color: Colors.white,
//                                     }}
//                                 >
//                                     5
//                                 </Button> 
//                             </Center>
//                         </HStack>
//                     </Box> 
//                 </Pressable>
//             )}
//         />
//     );
// };

// export default OrderIterm;

import React from "react";
import { FlatList, Pressable, Text, View, Image, TouchableOpacity } from "react-native";
import Products from "../data/Products";
import Colors from "../color";

const OrderItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Products.slice(0, 3)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={{ marginBottom: 3 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.white,
                shadowColor: Colors.black,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View style={{ width: "25%", backgroundColor: Colors.deepGray }}>
                <Image
                  source={ item.image }
                  alt={item.name}
                  style={{ width: "100%", height: 24, resizeMode: "contain" }}
                />
              </View>
              <View style={{ width: "60%", paddingHorizontal: 2 }}>
                <Text
                  numberOfLines={1}
                  style={{ color: Colors.black, fontWeight: "bold", fontSize: 12 }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: Colors.lightBlack, marginTop: 2, fontWeight: "bold" }}>
                  ${item.price}
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.main,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ color: Colors.white }}>5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default OrderItem;
