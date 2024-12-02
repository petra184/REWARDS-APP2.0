import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SelectList } from 'react-native-dropdown-select-list'; 
import * as ImagePicker from 'expo-image-picker';

export default function SignUp({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
    favoriteSport: '',
  });

  const [profileImage, setProfileImage] = useState(null); // Initially null for blank profile image

  const sports = [
    { key: 1, value: "Women's Basketball" },
    { key: 2, value: "Women's Cross Country" },
    { key: 3, value: "Women's Lacrosse" },
    { key: 4, value: "Women's Soccer" },
    { key: 5, value: "Women's Softball" },
    { key: 6, value: "Women's Swimming & Diving" },
    { key: 7, value: "Women's Track & Field" },
    { key: 8, value: "Women's Volleyball" },
    { key: 9, value: "Men's Baseball" },
    { key: 10, value: "Men's Basketball" },
    { key: 11, value: "Men's Cross Country" },
    { key: 12, value: "Men's Golf" },
    { key: 13, value: "Men's Lacrosse" },
    { key: 14, value: "Men's Soccer" },
    { key: 15, value: "Men's Swimming & Diving" },
    { key: 16, value: "Men's Track & Field" }
  ];

  // Image Picker function
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      {/* Profile Image Section */}
      <View style={styles.profileImageContainer}>
        <Image source={profileImage ? { uri: profileImage } : require('../IMAGES/empty-profile.png')} style={styles.profileImage} />
      </View>
      <Pressable onPress={pickImage} style={styles.editImageButton}>
        <Ionicons name="pencil" size={20} color="#006400" />
      </Pressable>

      <StatusBar style="dark" translucent={false} backgroundColor="black" />

      <View style={styles.inputContainer}>
        <View style={styles.nameContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
            placeholderTextColor="gray"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
            placeholderTextColor="gray"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(value) => handleInputChange('username', value)}
          autoCapitalize="none"
          placeholderTextColor="gray"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry={!showPassword} // Toggles visibility
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

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            secureTextEntry={!showConfirmPassword} // Toggles visibility
            placeholderTextColor="gray"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>


        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="gray"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phone_number}
          onChangeText={(value) => handleInputChange('phone_number', value)}
          keyboardType="phone-pad"
          placeholderTextColor="gray"
        />

        {/* Favorite Sport Dropdown */}
        <View style={styles.inputGroup}>
          <SelectList
            setSelected={(val) => setFormData({...formData, favoriteSport: val})}
            data={sports}
            save="value"
            defaultOption={{ key: '0', value: "Select your favorite sport" }}
            boxStyles={styles.dropdown}
            inputStyles={[styles.dropdownText, { color: 'grey' }]}
            dropdownStyles={styles.dropdownList}
          />
        </View>
      </View>

      <View style={styles.centerButtonContainer}>
        <Link href="./(tabs)" asChild>
          <Pressable style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.socialSignUpContainer}>
        <Text style={styles.socialSignUpText}>OR SIGN UP WITH</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton} onPress={() => {/* Handle Google sign up */}} >
            <Ionicons name="logo-google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => {/* Handle Apple sign up */}} >
            <Ionicons name="logo-apple" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <Link href={{
            pathname: './get_in',
            params: { buttonName: 'Log In' },
          }} asChild>
          <Pressable style={styles.loginLink}>
            <Text style={styles.loginLink}>Log in</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImageContainer: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginTop: 10, 
    overflow: 'hidden',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  editImageButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
    right: '40%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    zIndex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e9',
    top:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,  // Adjusted margin to keep space around the title
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
    color: 'black',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  signUpButton: {
    backgroundColor: '#035e32',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    width: 200,
  },
  centerButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialSignUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  socialSignUpText: {
    color: '#666',
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row', // Add this to align the text and link in a row
    justifyContent: 'center', // Ensure both elements are centered horizontally
  },
  loginText: {
    color: '#035e32',
    fontSize: 14,
  },
  loginLink: {
    color: '#006400',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
  dropdownList: {
    borderRadius: 10,
    marginTop: 10,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50, // Space for the eye icon
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
