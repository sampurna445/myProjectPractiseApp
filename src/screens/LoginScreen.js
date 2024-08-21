import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { UserContext } from "../context/UserContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUser(email);
    navigation.navigate("Home");
  };
  return (
    <View className="h-full w-full absolute">
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/background.jpg")}
      />
      <View className="h-full w-full flex-justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-gray font-bold tracking-wider text-5xl"
          >
            Login
          </Animated.Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
              onPress={handleLogin}
            >
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text className="text-sky-600"> SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
