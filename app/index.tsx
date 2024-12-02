import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, AppState } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";

export default function Index() {
  return (
    <ImageBackground
      source={require('../IMAGES/main bck.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        <StatusBar style="dark" translucent={false} backgroundColor="dark" />
        <Text style={styles.welcomeText}>Welcome</Text>

        <Text style={styles.descriptionText}>
          Track your favorite team's games and earn rewards
        </Text>

        {/* Log In Button */}
        <Link
          href={{
            pathname: './get_in',
            params: { buttonName: 'Log In' },
          }}
          asChild
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </Link>

        {/* Sign Up Button */}
        <Link
          href={{
            pathname: './signup_screen',
            params: { buttonName: 'Sign Up' },
          }}
          asChild
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 260,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#035e32',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#035e32',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 15,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

