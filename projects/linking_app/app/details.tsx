import { Linking, Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Pressable
        onPress={() => {
          Linking.openURL("https://google.com");
        }}
      >
        <Text>Google</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          Linking.openURL("mailto:be1newinner@gmail.com");
        }}
      >
        <Text>Mail</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          Linking.openURL("tel:+918130506284");
        }}
      >
        <Text>Call</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          Linking.openURL("sms:+918130506284");
        }}
      >
        <Text>SMS</Text>
      </Pressable>
    </View>
  );
}
