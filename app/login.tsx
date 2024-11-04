import {openAuthSessionAsync} from "expo-web-browser";
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";

//
// Component.
//

export const Login: FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!isRefreshing) {
      return;
    }

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [isRefreshing]);

  const onButtonPress = useCallback(() => {
    Keyboard.dismiss()
  }, []);

  console.log("Re-rendering", Date.now());
  if (isRefreshing) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
      >
        <View  style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <TextInput placeholder="user.host.com" />
            <Button
              onPress={onButtonPress}
              title="Hello"
            />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
