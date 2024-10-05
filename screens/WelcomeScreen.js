import * as React from "react";
import { View, SafeAreaView, Pressable, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View>
          <Image
            source={require("../assets/little-lemon-logo.png")}
            style={tw`mx-auto`}
            width={200}
            height={200}
            resizeMode="contain"
          />
          <Text style={tw`text-2xl text-center font-semibold mt-8`}>
            Little Lemon, you local
          </Text>
          <Text style={tw`text-2xl text-center font-semibold`}>
            Mediterranean Bistro
          </Text>
        </View>
      </View>
      <View style={tw`bg-green-900 mb-4 mt-auto mx-4 rounded-lg`}>
        <Pressable onPress={() => navigation.navigate("SubscribeScreen")}>
          <Text style={tw`text-center py-2 text-lg text-white`}>
            Newsletter
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
