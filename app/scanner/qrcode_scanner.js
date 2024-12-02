import { Camera, CameraView } from "expo-camera";
import { Stack } from "expo-router";
import {
  AppState,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { Overlay } from "./Overlay";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [hasPermission, setHasPermission] = useState(null);

  // Request camera permissions when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // AppState listener to reset the QR lock
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // If permission is not yet determined, show a loading indicator or message
  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.centeredContainer}>
        <Text>Requesting for camera permission...</Text>
      </SafeAreaView>
    );
  }

  // If permission is not granted, show an error message
  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.centeredContainer}>
        <Text>No access to camera. Please grant camera permission in settings.</Text>
        <Button
          title="Retry"
          onPress={async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
          }}
        />
      </SafeAreaView>
    );
  }

  // If permission is granted, show the CameraView
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen options={{ headerShown: false }} /> {/* Hide the header */}
      
      {Platform.OS === "android" ? <StatusBar hidden /> : null}

      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true; // Lock to prevent multiple scans
            setTimeout(async () => {
              await Linking.openURL(data);
              console.log("Linking opened: ", data);
              qrLock.current = false; // Reset lock after opening the URL
            }, 500);
          }
        }}
      />

      <Overlay />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
});
