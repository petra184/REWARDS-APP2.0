import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Pencil, ArrowLeft, Camera } from 'lucide-react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { LinearGradient } from 'expo-linear-gradient';

export default function EditProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    birthday: '',
    favoriteSport: '',
    password: '',
    confirmPassword: '',
    email: '', 
  });
  const [profileImage, setProfileImage] = useState('https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D');

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

  const handleBack = () => {
    router.back();
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    console.log(formData);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LinearGradient
        colors={['#0a730a', '#cdf2ce', '#abf3da']}
        style={styles.headerBackground}
      >
        <Pressable onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color="#FFFFFF" />
        </Pressable>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <Pressable onPress={pickImage} style={styles.editImageButton}>
            <Camera size={20} color="green" />
          </Pressable>
        </View>
        <Text style={styles.greetingText}>Hi, {formData.firstName || "User"}</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor={'#999'}
                value={formData.firstName}
                onChangeText={(text) => setFormData({...formData, firstName: text})}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor={'#999'}
                value={formData.lastName}
                onChangeText={(text) => setFormData({...formData, lastName: text})}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="XXX-XXX-XXXX"
              placeholderTextColor={'#999'}
              value={formData.phoneNumber}
              onChangeText={(text) => setFormData({...formData, phoneNumber: text})}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new email"
              placeholderTextColor={'#999'}
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="New Username"
              placeholderTextColor={'#999'}
              value={formData.username}
              onChangeText={(text) => setFormData({...formData, username: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor={'#999'}
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              secureTextEntry
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={'#999'}
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
              secureTextEntry
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Favorite Sport</Text>
            <SelectList
              setSelected={(val) => setFormData({...formData, favoriteSport: val})}
              data={sports}
              save="value"
              defaultOption={{ key: '1', value: "Women's Basketball" }}
              boxStyles={styles.dropdown}
              inputStyles={styles.dropdownText}
              dropdownStyles={styles.dropdownList}
              dropdownTextStyles={styles.dropdownListText}
              search={false}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerBackground: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 60,
    padding: 8,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top:20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  greetingText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    top:20,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
    marginLeft: 20,
    color: '#333',
  },
  formContainer: {
    padding: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    fontSize: 16,
    color: 'grey',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: 'grey',
  },
  dropdownList: {
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  dropdownListText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 45,
  },
  cancelButtonText: {
    color: 'green',
    fontSize: 16,
    marginTop: 12
  },
  saveButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cdf2ce',
    borderRadius: 20,
    marginLeft: 10,
  },
  saveButtonText: {
    color: 'green',
    fontSize: 16,
    marginTop: 12
  },
});