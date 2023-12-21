// import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
// import React from "react";
// import Colors from "../../color";
// import { Button } from "../Button";

// const Inputs = [
//     {
//         label: "USERNAME",
//         type:"text",
//     },
//     {
//         label: "EMAIL", 
//         type:"text",
//     },
//     {
//         label: "NEW PASSWORD", 
//         type: "password",
//     },
//     {
//         label: "COMFIRM PASSWORD", 
//         type: "password",
//     }
// ]

// const Profile = () => {
//     return (
//         <Box h="full" bg={Colors.white} px={5}>
//             <ScrollView shows VerticalScroll Indicator={false}>
//                 <VStack space={10} mt={5} pb={10}>
//                     {Inputs.map((i, index) =>(
//                         <FormControl key={index}>
//                             <FormControl.Label
//                                 _text={{
//                                     fontSize: "12px",
//                                     fontWeight: "bold",
//                                 }}
//                             >
//                                 {i.label}
//                             </FormControl.Label>
//                             <Input
//                                 borderWidth={0.5}
//                                 bg={Colors.subGreen}
//                                 borderColor= {Colors.main}
//                                 py={4}
//                                 type={i.type}
//                                 color={Colors.main}
//                                 fontSize={15}
//                                 _focus={{
//                                     bg: Colors.subGreen,
//                                     borderColor: Colors.main,
//                                     borderWidth: 1,
//                                 }}
//                             />
//                         </FormControl>
//                     ))}
//                     <Button bg={Colors.main} color={Colors.white}>
//                         UPDATE PROFILE
//                     </Button>
//                 </VStack>
//             </ScrollView>
//     </Box>
//     );
// };

// export default Profile;

import React from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import Colors from "../../color";
import Btn from "../Btn";

const Inputs = [
  {
    label: "User Name",
    type: "text",
  },
  {
    label: "Email",
    type: "text",
  },
  {
    label: "New password",
    type: "password",
  },
  {
    label: "Confirm password",
    type: "password",
  },
];

const Profile = () => {
  return (
    <View style={{ height: "100%", backgroundColor: Colors.white, paddingHorizontal: 5 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 5, paddingBottom: 10 }}>
          {Inputs.map((i, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>{i.label}</Text>
              <TextInput
                style={{
                  borderWidth: 0.5,
                  backgroundColor: Colors.subGreen,
                  borderColor: Colors.main,
                  paddingVertical: 4,
                  color: Colors.main,
                  fontSize: 15,
                }}
                secureTextEntry={i.type === "password"}
                keyboardType={i.type === "email" ? "email-address" : "default"}
                placeholder={i.label}
                placeholderTextColor={Colors.main}
                underlineColorAndroid="transparent"
                selectTextOnFocus={true}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                onFocus={() => {}}
              />
            </View>
          ))}
          <Btn
            bgColor={Colors.main}
            color= {Colors.white}
            text= "UPDATE PROFILE"
            onPress={() => console.log("Submit pressed")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
