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
  View,
} from "react-native";
import { Overlay } from "./Overlay";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // ... (previous code remains the same)

  // If permission is granted, show the CameraView
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Scanning QR Code", headerShown: true }} />

      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <View style={styles.cameraContainer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  navigation: {
    backgroundColor: 'white', // Add a background color to make it visible
    marginBottom: -34 // Add padding to keep the bottom navigation visible
  },
});