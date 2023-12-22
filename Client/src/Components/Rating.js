import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../color";

function Rating({ value, text }) {
  const size = 10;
  const color = Colors.orange;

  return (
    <View style={{ flexDirection: 'row', marginTop: 4, alignItems: 'center' }}>
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      {text && (
        <Text style={{ fontSize: 12, marginLeft: 8 }}>
          {text}
        </Text>
      )}
    </View>
  );
}

export default Rating;
