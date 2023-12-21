// import { Center } from "native-base"; 
// import React, { useState } from "react"; 
// import Button from "./Button";
// import Colors from "../color";
// import { Pressable } from "react-native";

// const OrdersInfos =[
//     {
//         title: "Products",
//         price: 125.77,
//         color:"black"
//     },
//     {
//         title: "Shipping", 
//         price: 34.00,
//         color:"black"
//     },
//     {
//         title: "Tax",
//         price:23.34,
//         color:"black"
//     },
//     {
//         title: "Total Amount",
//         price: 3458.00,
//         color:"main"
//     }
// ]

// const OrderModel = () => {
//     const [showModel, setShowModel] = useState(false); 
//     return(
//         <Center>
//             <Button
//                 onPress={() => setShowModel(true)} 
//                 bg={Colors.main}
//                 color={Colors.white}
//                 mt={5}
//             >
//                 SHOW PAYMENT & TOTAL
//             </Button>
//             <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
//                 <Modal.Content maxWidth={350}>
//                     <Modal.CloseButton />
//                     <Modal.Header>Order</Modal.Header>
//                     <Modal.Body>
//                         <VStack space={7}>
//                             {OrdersInfos.map((i,index) =>(
//                             <HStack 
//                                 key={index} 
//                                 alignItems="center" 
//                                 justifyContent="space-between"
//                             >
//                                 <Text fontWeight="medium">{i.title}</Text>
//                                 <Text 
//                                     color={i.color === "main" ? Colors.main : Colors.black} 
//                                     bold
//                                 >
//                                     ${i.price}
//                                 </Text>
//                             </HStack>
//                             ))}
//                         </VStack>
//                     </Modal.Body>
//                     <Modal.Footer> 
//                         <Pressable 
//                             w="full" 
//                             justifyContent="center" 
//                             bg={Colors.paypal} 
//                             h={45} 
//                             rounded={3}
//                             overflow="hidden"
//                             onPress={() => setShowModel(false)}
//                         >
//                             <Image
//                                 source={ require("../../assets/images/paypal.png")}
//                                 alt="paypal"
//                                 resizeMode="contain"
//                                 w="full"
//                                 h={34}
//                             />
//                         </Pressable>
//                         <Button
//                             w="full"
//                             mt={2}
//                             bg={Colors.main}
//                             h={45}
//                             _text={{
//                                 color: Colors.white,
//                             }}
//                             onPress={() => setShowModel(false)} 
//                             _pressed={{
//                                 bg: Colors.black,
//                             }}
//                         >
//                             PLACE AN ORDER
//                         </Button>
//                     </Modal.Footer>
//                 </Modal.Content>
//             </Modal>
//         </Center>
//     );
// };
// export default OrderModel;

import React, { useState } from "react";
import { Modal, View, Text, Image, Pressable } from "react-native";
import Colors from "../color";
import Btn from "./Btn";

const OrdersInfos = [
  {
    title: "Products",
    price: 125.77,
    color: "black",
  },
  {
    title: "Shipping",
    price: 34.00,
    color: "black",
  },
  {
    title: "Tax",
    price: 23.34,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 3458.00,
    color: "main",
  },
];

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <View>
      <Btn
        bgColor={Colors.main}
        color= {Colors.white}
        text= "SHOW PAYMENT & TOTAL"
        onPress={() => setShowModel(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModel}
        onRequestClose={() => setShowModel(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 300,
            }}
          >
            <Text>Order</Text>
            <View>
              {OrdersInfos.map((i, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    style={{
                      color: i.color === "main" ? Colors.main : Colors.black,
                      fontWeight: "bold",
                    }}
                  >
                    ${i.price}
                  </Text>
                </View>
              ))}
            </View>

            <Pressable
              style={{
                backgroundColor: Colors.paypal,
                height: 45,
                borderRadius: 3,
                overflow: "hidden",
                marginTop: 2,
              }}
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/favicon.png")}
                alt="paypal"
                resizeMode="contain"
                style={{ width: "100%", height: 34 }}
              />
            </Pressable>

            <Btn
                bgColor={Colors.main}
                color= {Colors.white}
                text= "PLACE AN ORDER"
                onPress={() => setShowModel(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OrderModel;
