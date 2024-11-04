import {FC, useCallback} from "react";
import {
  Button,
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
  const onButtonPress = useCallback(() => {
    Keyboard.dismiss()
  }, []);

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
