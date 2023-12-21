
// import React, { useState } from "react";
// import { SceneMap , TabBar, TabView } from "react-native-tab-view"
// // import { Colors } from "react-native/Libraries/NewAppScreen";
// import Orders from "./Orders";
// import Profile from "./Profile";
// import Colors from "../../color";
// import { Text } from "native-base";

// const renderScene = SceneMap({
//     first: Profile,
//     second: Orders,
// })

// export default function Tabs() {
//     const layout = useWindowDimensions()
//     const [index, setIndex] = useState(0)
//     const [routes] = useState([
//         {
//             key: "first",
//             title: "PROFILE",
//         },
//         {
//             key: "second",
//             title: "ORDERS",
//         },
//     ]);

//     const renderTabsBar = (props) => (
//         <TabBar 
//             {...props} 
//             tabStyle={styles.tabStyle} 
//             indicatorStyle={{ backgroundColor: Colors.black }}
//             activeColor={Colors.main} 
//             inactiveColor={Colors.white}
//             renderLabel={({ route, color }) => <Text style={{color, ...styles.text}}>{route.title}</Text>}
//         />
//     );

//     return (
//         <TabView
//             navigationState={{ index, routes }}
//             renderScene={renderScene}
//             onIndexChange={setIndex}
//             initialLayout={{ width: layout.width }}
//             renderTabBar={renderTabsBar}
//         />
//     );
// }

// const styles = StyleSheet.create ({
//     tabStyle: {
//         backgroundColor: "black",
//     },
//     text: {
//         fontSize: 13,
//         fontWeight:  "bold",
//     },
// })


// import React, { useState } from "react";
// import { SceneMap, TabBar, TabView } from "react-native-tab-view";
// import { useWindowDimensions } from "react-native";
// import Orders from "./Orders";
// import Profile from "./Profile";
// import { Text, StyleSheet } from "react-native";
// import Colors from "../../color"; // Đảm bảo rằng bạn đã sử dụng import đúng cho Colors

// const renderScene = SceneMap({
//   first: Profile,
//   second: Orders,
// });

// export default function Tabs() {
//   const layout = useWindowDimensions();
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {
//       key: "first",
//       title: "PROFILE",
//     },
//     {
//       key: "second",
//       title: "ORDERS",
//     },
//   ]);

//   const renderTabsBar = (props) => (
//     <TabBar
//       {...props}
//       tabStyle={styles.tabStyle}
//       indicatorStyle={{ backgroundColor: Colors.black }}
//       activeColor={Colors.main}
//       inactiveColor={Colors.white}
//       renderLabel={({ route, color }) => (
//         <Text style={{ color, ...styles.text }}>{route.title}</Text>
//       )}
//     />
//   );

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//       renderTabBar={renderTabsBar}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   tabStyle: {
//     backgroundColor: "black",
//   },
//   text: {
//     fontSize: 13,
//     fontWeight: "bold",
//   },
// });

// import React, { useState } from "react";
// import { Dimensions, StyleSheet, Text } from "react-native";
// import { SceneMap, TabBar, TabView } from "react-native-tab-view";
// import Orders from "./Orders";
// import Profile from "./Profile";
// import Colors from "../../color";

// const initialLayout = { width: Dimensions.get("window").width };

// const renderScene = SceneMap({
//   first: Profile,
//   second: Orders,
// });

// const Tabs = () => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: "first", title: "PROFILE" },
//     { key: "second", title: "ORDERS" },
//   ]);

//   const renderTabBar = (props) => (
//     <TabBar
//       {...props}
//       style={styles.tabBar}
//       indicatorStyle={{ backgroundColor: Colors.black }}
//       activeColor={Colors.main}
//       inactiveColor={Colors.white}
//       renderLabel={({ route, color }) => (
//         <Text style={{ color, ...styles.text }}>{route.title}</Text>
//       )}
//     />
//   );

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       renderTabBar={renderTabBar}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: "black",
//   },
//   text: {
//     fontSize: 13,
//     fontWeight: "bold",
//   },
// });

// export default Tabs;

// import React, { useState } from "react";
// import { Dimensions, StyleSheet, Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Orders from "./Orders";
// import Profile from "./Profile";
// import Colors from "../../color";

// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           style: styles.tabBar,
//           activeTintColor: Colors.main,
//           inactiveTintColor: Colors.white,
//           indicatorStyle: { backgroundColor: Colors.black },
//         }}
//       >
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Orders" component={Orders} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: "black",
//   },
//   text: {
//     fontSize: 13,
//     fontWeight: "bold",
//   },
// });

// export default Tabs;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Orders from './Orders';
// import Profile from './Profile';
// import Colors from '../../color';

// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <NavigationContainer>
//         <Tab.Navigator
//             screenOptions={{
//             tabBarActiveTintColor: Colors.main,
//             tabBarInactiveTintColor: Colors.white,
//             tabBarStyle: { backgroundColor: Colors.black },
//             }}
//         >
//             <Tab.Screen name="Profile" component={Profile} />
//             <Tab.Screen name="Orders" component={Orders} />
//         </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Tabs;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Dimensions } from 'react-native';
import Orders from "../Profile/Orders";
import Profile from "../Profile/Profile";


// const Orders = () => {
//   return (
//     <View>
//       <Text>This is the Orders screen content.</Text>
//       {/* Add more JSX to display the content you want */}
//     </View>
//   );
// };

// const Profile = () => {
//   return (
//     <View>
//       <Text>This is the Profile screen content.</Text>
//       {/* Add more JSX to display the content you want */}
//     </View>
//   );
// };

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

const TabComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Orders' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{ backgroundColor: 'black' }}
      indicatorStyle={{ backgroundColor: 'white' }}
      activeColor={'#48B600'}
      inactiveColor={'#FFFFFF'}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default TabComponent;
