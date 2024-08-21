import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text } from "react-native";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "Pink",
      }}
    >
      <Text style={{ color: "Black", fontWeight: "bold" }}>
        Welcome,{user ? user : "Guest"}
      </Text>
    </View>
  );
};
