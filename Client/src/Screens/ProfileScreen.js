// import { View,Text } from "react-native";
// import React from "react";
// import Tabs from "../Components/Profile/Tabs";

// export default function ProfileScreen(){
//     return (
//         <>
//             <Tabs />
//         </>
//     )
// };



// import { Center, Heading, Image, Text } from "native-base"; 
// import React from "react";
// import Colors from "../color";
// import Tabs from "../Components/Profile/Tabs";

// export default function ProfileScreen() {
//     return(
//         <>
//             <Center bg={Colors.main} pt={10} pb={6}>
//                 <Image
//                     source={{
//                         uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png"
//                     }}
//                     alt="profile"
//                     w={24}
//                     h={24}
//                     resizeMode="cover"
//                 />
//                 <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
//                     Admin Doe
//                 </Heading>
//                 <Text italic fontSize={10} color={Colors.white}>
//                     Joined Dec 12 2022
//                 </Text>
//             </Center>
//             <Tabs />
//         </>
//     );
// };

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

export default function ProfileScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.main }]}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Admin Sau</Text>
        <Text style={styles.joinDate}>Joined Dec 12 2023</Text>
      </View>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    // paddingBottom: 6,
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25, // Rounded corners for the image
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 2,
    color: Colors.white,
  },
  joinDate: {
    fontStyle: "italic",
    fontSize: 12,
    color: Colors.white,
  },
});
