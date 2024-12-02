import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Pressable, AppState } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '../supabase/supabaseClient'; // Supabase client import

// AppState.addEventListener('change', (state) => {
//   if (state === 'active') {
//     supabase.auth.startAutoRefresh()
//   } else {
//     supabase.auth.stopAutoRefresh()
//   }
// })

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill out both email and password fields.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Error', error.message);
      setLoading(false)
    } else {
      Alert.alert('Success', 'You are now logged in!');
      navigation.navigate('(tabs)'); // Redirect to the main screen
    }

    setLoading(false);
  }

  return (
      <View style={styles.container}>
        <StatusBar style="dark" translucent={false} backgroundColor="black" />
        <Text style={styles.title}>Log In</Text>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor="gray"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholderTextColor="gray"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => { /* Handle forgot password */ }}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Center the login button */}
        <View style={styles.centerButtonContainer}>
          <Pressable
            style={[styles.button, loading && styles.disabledButton]}
            onPress={signInWithEmail}
            disabled={loading}
          >
            <Text style={styles.buttonText}>{loading ? 'Logging In...' : 'Log In'}</Text>
          </Pressable>
        </View>

        {/* Social Login Options */}
        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>OR LOG IN WITH</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton} onPress={() => { /* Handle Google login */ }}>
              <Ionicons name="logo-google" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => { /* Handle Apple login */ }}>
              <Ionicons name="logo-apple" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account?   </Text>
          <Link href={{
            pathname: './signup_screen',
            params: { buttonName: 'Sign Up' },
          }} asChild>
            <Pressable style={styles.loginLink}>
              <Text style={styles.loginLink}> Sign Up</Text>
            </Pressable>
          </Link>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginTop: -210,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 60,
  },
  inputContainer: {
    gap: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    color: 'black',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#035e32',
    textAlign: 'right',
    marginBottom: 20,
    marginTop: 20,
  },
  centerButtonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#035e32',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    width: 200,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  socialLoginText: {
    color: '#666',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  socialButton: {
    backgroundColor: '#e0e0e0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginText: {
    color: '#666',
    textAlign: 'right',
  },
  loginLink: {
    color: '#035e32',
    fontWeight: 'bold',
  },
});