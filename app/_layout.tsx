import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const router = useRouter();

  return (
    <>
    <StatusBar style="dark" translucent={false} backgroundColor="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login_screen" options={{ headerShown: false }} />
        <Stack.Screen name="signup_screen" options={{ headerShown: false }} />
        <Stack.Screen name="team_details" options={{ headerShown: false }} />
        <Stack.Screen name="get_in" options={{ headerShown: false }} />
        {/* Main Profile Screen with Custom Header */}
        
        <Stack.Screen
          name="user_profile/main"
          options={{
            headerShown: true,
            title: 'My Profile',
            headerStyle: {
              backgroundColor: '#cdf2ce',
            },
            headerTintColor: '#000',       
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#333',
            },
            headerLeft: () => (
              <Pressable onPress={() => router.back()} style={{ paddingHorizontal: 10 }}>
                <Ionicons name="chevron-back" size={24} color="#333" />
              </Pressable>
            ),
            headerTitleAlign: 'center',
          }}
        />

        {/* Edit Profile Screen */}
        <Stack.Screen name="user_profile/edit_profile" options={{ headerShown: false }} />
        
      </Stack>
    </>
  );
}
