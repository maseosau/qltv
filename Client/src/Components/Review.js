// import React, { useState } from "react";
// import {Box, Heading, Text} from "native-base";
// import Colors from "../color";
// import Rating from "./Rating";
// import Message from "./Notifications/Message"
// import { Button } from "react-native";

// export default function Review() {
//     const [ratings, setRatings] = useState("")
//     return (
//         <Box my ={9}>
//             <Heading bold fontSize={15} mb={2}>
//                 REVIEW
//             </Heading>
//             {/* {If there is no review} */}
//             {/* <Message 
//                 color={Colors.main} 
//                 bg={Colors.deepGray} 
//                 bold
//                 size={10} 
//                 children={
//                     "NO REVIEW"
//                 } 
//             /> */}
//             {/* {REVIEW} */}
//             <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
//                 <Heading fontSize={15} color={Colors.black}>
//                     User Doe
//                 </Heading>
//                 <Rating value={4} />
//                 <Text my={2} fontSize={11}>
//                     Jan 12 2022
//                 </Text>
//                 <Message 
//                     color={Colors.black} 
//                     bg={Colors.white} 
//                     size={10} 
//                     children={
//                         "NativeBase Icons was designed to make integration of icons in nativebase projects easier."
//                     } 
//                 />
//             </Box>
//             {/* {WRITE REVIEW} */}
//             {/* <Box mt={6}>
//                 <Heading fontSize={15} bold mb={4}>
//                     REVIEW THIS PRODUCT
//                 </Heading>
//                 <VStack space={6}>
//                     <FormControl>
//                         <FormControl.Label 
//                             _text={{
//                                 fontSize: '12px',
//                                 fontWeight: "bold",
//                             }}
//                         >
//                             Rating
//                         </FormControl.Label>
//                         <Select 
//                             bg={Colors.subGreen} 
//                             borderWidth={0} 
//                             rounded={5} 
//                             py={4} 
//                             placeholder="Choose Rate"
//                             _selectedItem={{
//                                 bg: Colors.subGreen,
//                                 endIcon: <CheckIcon size={3} />,
//                             }}
//                             selectedValue={ratings}
//                             onValueChange={(e) => setRatings(e)}
//                         >
//                             <Select.Item label="1 - Poor" value="1" />
//                             <Select.Item label="2 - Fair" value="2" />
//                             <Select.Item label="3 - Good" value="3" />
//                         </Select>
//                     </FormControl>
//                     <FormControl>
//                         <FormControl.Label
//                             _text={{
//                                 fontSize: "12px",
//                                 fontWeight: "bold",
//                             }}
//                         >
//                             Comment
//                         </FormControl.Label>
//                         <TextArea 
//                             h={24} 
//                             w="full" 
//                             placeholder="This product is good ....."
//                             borderWidth={0}
//                             bg={Colors.subGreen}
//                             py={4}
//                             _focus={{
//                                 bg: Colors.subGreen,
//                             }}
//                         />
//                     </FormControl>
//                     <Button bg={Colors.main} color={Colors.white}>
//                         SUBMIT
//                     </Button>
//                     <Message 
//                         color={Colors.white} 
//                         bg={Colors.black} 
//                         children={"Please 'Login' to write a review"} 
//                     />
//                 </VStack>
//             </Box> */}
//         </Box>
//     )
// }

import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Colors from "../color";
import Rating from "./Rating";
import Btn from "./Btn";

export default function Review() {
  const [ratings, setRatings] = useState("");

  return (
    <View style={{ marginVertical: 9 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 2 }}>
        REVIEW
      </Text>

      {/* If there is no review */}
      <View
        style={{
          backgroundColor: Colors.deepGray,
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: Colors.main, fontWeight: "bold", fontSize: 10 }}>
          NO REVIEW
        </Text>
      </View>

      {/* REVIEW */}
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.deepGray,
          marginTop: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 15, color: Colors.black, fontWeight: "bold" }}>
          User Doe
        </Text>
        <Rating value={4} />
        <Text style={{ marginTop: 2, fontSize: 11 }}>Jan 12 2022</Text>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 5,
            borderRadius: 5,
            marginTop: 5,
          }}
        >
          <Text style={{ color: Colors.black, fontSize: 10 }}>
            NativeBase Icons was designed to make integration of icons in
            nativebase projects easier.
          </Text>
        </View>
      </View>

      {/* WRITE REVIEW */}
      <View style={{ marginTop: 6 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}>
          REVIEW THIS PRODUCT
        </Text>
        <View style={{ marginBottom: 6 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Rating</Text>
          <View
            style={{
              backgroundColor: Colors.subGreen,
              borderRadius: 5,
              paddingVertical: 4,
              paddingHorizontal: 10,
              marginTop: 4,
            }}
          >
            <Text 
                style={{ 
                    color: Colors.black,
                    fontSize: 12,
                }}
            >
                {ratings || "Choose Rate"}
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 6 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Comment</Text>
            <View
                style={{
                height: 24,
                width: "100%",
                backgroundColor: Colors.subGreen,
                padding: 4,
                borderRadius: 5,
                marginTop: 4,
                }}
            >
                <Text
                style={{
                    color: Colors.black,
                    fontSize: 12,
                }}
                >
                This product is good .....
                </Text>
            </View>
        </View>
        <Btn
          bgColor={Colors.main}
          color= {Colors.white}
          text= "SUBMIT"
          onPress={() => console.log("Submit pressed")}
        />
        <View style={{ marginTop: 6 }}>
          <View
            style={{
              backgroundColor: Colors.black,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: Colors.white }}>
              Please 'Login' to write a review
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
