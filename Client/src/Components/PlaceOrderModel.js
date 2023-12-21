// import { Center } from "native-base"; 
// import React, { useState } from "react"; 
// import Button from "./Button";
// import Colors from "../color";

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

// const PlaceOrderModel = () => {
//     const [showModel, setShowModel] = useState(false); 
//     return(
//         <Center>
//             <Button
//                 onPress={() => setShowModel(true)} 
//                 bg={Colors.black}
//                 color={Colors.white}
//                 mt={5}
//             >
//                 SHOW TOTAL
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
//                         <Button
//                             flex={1}
//                             bg={Colors.main}
//                             h={45}
//                             _text={{
//                                 color: Colors.white,
//                             }}
//                             onPress={() => setShowModel(false)} 
//                             _pressed={{
//                                 bg: Colors.main,
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
// export default PlaceOrderModel;

import React, { useState } from "react";
import { Modal, View, Text, Pressable } from "react-native";
import Colors from "../color";
import Btn from "./Btn";
import { useNavigation } from "@react-navigation/native";

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

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(false);

  const navigation = useNavigation();
  return (
    <View>
      <Btn
        bgColor={Colors.black}
        color= {Colors.white}
        text= "SHOW TOTAL"
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
              width: 350,
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
                    marginBottom: 7,
                  }}
                >
                  <Text style={{ fontWeight: "medium" }}>{i.title}</Text>
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

            <Btn
              bgColor={Colors.main}
              color= {Colors.white}
              text= "PLACE AN ORDER"
              // onPress={() => }
              onPress={() => {
                setShowModel(false);
                navigation.navigate("Order");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlaceOrderModel;
