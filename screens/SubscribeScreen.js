import * as React from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  // Add subscribe screen code here
  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <View style={tw`mt-12`}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
          style={tw`w-48 h-48 mx-auto mb-8`}
        />
        <Text style={tw`text-2xl text-center mx-2`}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          placeholder="Your email here"
          style={tw`rounded-md text-lg px-3 border mt-6 h-12`}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
        <Pressable
          style={tw` rounded-md px-3 py-2 my-8 ${
            validateEmail(email) ? "bg-green-900" : "bg-gray-300"
          }`}
          onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
          disabled={!validateEmail(email)}
        >
          <Text style={tw`text-center text-lg text-white`}>Subscribe</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SubscribeScreen;
