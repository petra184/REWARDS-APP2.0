import { useState, useEffect } from 'react'
import supabase from '../supabase/supabaseClient'
import Login from './login_screen'
import Signup from './signup_screen'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { useNavigation, useRouter, useLocalSearchParams, Stack } from "expo-router";
import Tab from './(tabs)/index'

export default function App() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const buttonName = params && typeof params === 'object' ? params.buttonName : undefined;
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const getBackgroundStyle = () => {
    if (buttonName === 'Log In') {
      return { background: require('../IMAGES/background_image.png') };
    } else if (buttonName === 'Sign Up') {
      return { background: styles.signUpBackground };
    }
    return { background: styles.container }; // Default background
  };

  const backgroundStyle = getBackgroundStyle();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      {buttonName === 'Log In' ? (
        <ImageBackground source={backgroundStyle.background} style={styles.container}>
          <View>
          <Text style={styles.title}>Log In</Text>
          {/* RADI ALI JE IZA POZADINE */}
            {session && session.user ? <Tab key={session.user.id} session={session} /> : <Login />}
          </View>
        </ImageBackground>
      ) : (
        <View style={backgroundStyle.background}>
          <View>
          <Text style={styles.title}>Sign Up</Text>
            {session && session.user ? <Tab key={session.user.id} session={session} /> : <Login />}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
  },
});