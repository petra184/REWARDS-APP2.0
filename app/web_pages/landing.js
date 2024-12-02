import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back button
import { Pressable } from 'react-native';

export default function webs() {
  const navigation = useNavigation();
  const { websiteUrl } = useLocalSearchParams();

  // Setting up the header and the back button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#cdf2ce',
      },
      headerTitle: '',
      headerTintColor: 'black',
      headerBackTitleVisible: false,
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={false} backgroundColor="black"/>
      {websiteUrl ? (
        <WebView source={{ uri: websiteUrl }} style={styles.webView} />
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Website URL not found.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webView: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  backButton: {
    marginLeft: 10,  // Adjusts the back button's left margin
  },
});
