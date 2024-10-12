import {
  Camera,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function App() {
  const [facing, setFacing] = useState("BACK");
  const [permission, requestPermission] = useCameraPermissions();
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {};

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = { base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setBase64Image(data.base64); // Save the base64 image
        Alert.alert(
          "Picture Taken",
          "Image captured successfully",
          data.base64
        );
        console.log()
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {base64Image && (
        <View style={styles.base64Container}>
          <Text>Base64 Image:</Text>
          <Text style={styles.base64Text}>{base64Image}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    marginBottom: 30,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  base64Container: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  base64Text: {
    fontSize: 10,
    color: "#333",
  },
});
