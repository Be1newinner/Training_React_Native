import { Button, Text, View, StyleSheet, Linking } from "react-native";
import Constants from "expo-constants";
import * as IntentLauncher from "expo-intent-launcher";

export default function App() {
  const _handlePressButtonAsync = async () => {
    // startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);
    // IntentLauncher.startActivityAsync(
    //   IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS
    // );
    Linking.openURL("https://maps.apple.com/?ll=37.484847,-122.148386");
  };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
