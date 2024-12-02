import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import { Link } from 'expo-router';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="auto"/>
      
      <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#035e32',
        headerStyle: { backgroundColor: '#035e32' },
        headerTintColor: "white",
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'Welcome user',
            headerTitleStyle: {
              textAlign: 'left'
            },
            headerRight: () => (
              <Link href="../user_profile/main" style={styles.profileContainer}>
                <Image
                  source={{ uri: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' }}
                  style={styles.profileImage}
                />
              </Link>
            ),
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: 'Scan',
            headerTitle: 'Scan the QR Code',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="qrcode" color={color} />,
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
          }}
        />
        <Tabs.Screen
          name="rewards"
          options={{
            title: 'Rewards',
            headerTitle: 'Offers and Rewards',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    bottom: '2%',
    width: '93%',
    left: '4%',
    alignSelf:'center',
    right: '4%',
    borderRadius: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    height: 60, // Increased height to accommodate icons and label,
  },
  tabBarItemStyle: {
    height: '100%', // Add some padding at the top for the icon
  },
  tabBarLabelStyle: {
    fontSize: 12,
    position: 'absolute',
    top: 35, // Position the label at the bottom
  },
  profileContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});