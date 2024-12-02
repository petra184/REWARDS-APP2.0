import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import SportUpdates  from '../web_pages/news';

export default function Profile() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleViewGame = () => {
    // Handle view game action
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={false} backgroundColor="#cdf2ce" />
            
      <ScrollView style={styles.updatesScrollView}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' }}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userEmail}>student_email@manhattan.edu</Text>

          <Link href="./edit_profile" asChild>
            <Pressable style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Statistics Section */}
      <Text style={styles.sectionTitle}>Statistics</Text>
      <View style={styles.statsContainer}>
        <Link href="./games_attended" asChild>
          <Pressable style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Games{'\n'}Attended</Text>
          </Pressable>
        </Link>

        <Link href="./current_points" asChild>
          <Pressable style={styles.statBox}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Current{'\n'}Points</Text>
          </Pressable>
        </Link>

        <Link href="./rewards_redeemed" asChild>
          <Pressable style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Rewards{'\n'}Redeemed</Text>
          </Pressable>
        </Link>
      </View>

      {/* Updates Section */}
      <Text style={styles.sectionTitle}>(Favorite Sport) Updates</Text>
        <View style={styles.updateCard}>
          <SportUpdates />
        </View>
          
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: '#cdf2ce',
    paddingVertical: 8,
    borderRadius: 20,
    width: 100,
    alignItems:'left',
  },
  editButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  statBox: {
    backgroundColor: '#cdf2ce',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '30%',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  updatesScrollView: {
    flex: 1,
  },
  updateCard: {
    margin: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gameImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  viewButton: {
    backgroundColor: '#006400',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
