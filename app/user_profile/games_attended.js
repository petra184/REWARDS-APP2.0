import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router'; // Import Link if using expo-router
import { Ionicons } from '@expo/vector-icons';

export default function GamesAttendedScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Games Attended',
      headerStyle: {
        backgroundColor: '#cdf2ce',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#333',
      },
      headerLeft: () => (
        <Link href="../" asChild>
          <Pressable style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </Pressable>
        </Link>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No games attended yet!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  backButton: {
    paddingHorizontal: 10,
  },
});
