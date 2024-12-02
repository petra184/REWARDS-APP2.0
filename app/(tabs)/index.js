import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Animated, ScrollView, Pressable, SectionList, AppState } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDropdown from '../utils/CustomDropdown';
import { useRouter, Link } from 'expo-router';
import SportUpdates  from '../web_pages/news';
import supabase from '../../supabase/supabaseClient';

const { width } = Dimensions.get('window');
const PointsSection = ({ currentPoints, maxPoints, progressAnimation }) => {
  const progressWidth = progressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Link href="../user_profile/current_points" asChild>
      <Pressable style={styles.section}>
        <View style={styles.pointsHeader}>
          <Text style={styles.pointsText}>Points: {currentPoints}</Text>
          <Ionicons name="trophy" size={28} color="#e4cd03" />
        </View>
        <View style={styles.progressBarBackground}>
          <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.progressLabelText}>0</Text>
          <Text style={styles.progressLabelText}>50</Text>
          <Text style={styles.progressLabelText}>100</Text>
          <Text style={styles.progressLabelText}>150</Text>
          <Text style={styles.progressLabelText}>200</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const TeamSelectionSection = ({ teams, selectedTeam, setSelectedTeam }) => {
  const router = useRouter();

  const handleGetPress = () => {
    if (selectedTeam) {
      router.push({
        pathname: "../team_details", 
        params: { teamName: selectedTeam },
      });
    } else {
      alert('Please select a team first!');
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Get Team Details!</Text>
      <View style={styles.selectContainer}>
        <CustomDropdown
          options={teams}
          selectedValue={selectedTeam}
          onValueChange={setSelectedTeam}
          placeholder="Select a team"
        />
      </View>

      <TouchableOpacity style={styles.getButton} onPress={handleGetPress}>
        <Text style={styles.getButtonText}>GET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Tab ({ session }) {
  const [setSession] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const maxPoints = 200;
  const currentPoints = 50;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const handleOpenWebPage = (websiteUrl) => {
    if (websiteUrl) {
      router.push({
        pathname: "/web_pages/landing",
        params: { websiteUrl: 'https://gojaspers.com/sports/womens-basketball/stats/2024-25/central-connecticut-state/boxscore/11141' },
      });} else {
      alert('Website URL is missing!');
    }
  }
  
  const teams = [
    { label: "Women's Basketball", value: "Women's Basketball" },
    { label: "Women's Cross Country", value: "Women's Cross Country" },
    { label: "Women's Lacrosse", value: "Women's Lacrosse" },
    { label: "Women's Soccer", value: "Women's Soccer" },
    { label: "Women's Softball", value: "Women's Softball" },
    { label: "Women's Swimming & Diving", value: "Women's Swimming & Diving" },
    { label: "Women's Track & Field", value: "Women's Track & Field" },
    { label: "Women's Volleyball", value: "Women's Volleyball" },
    { label: "Men's Baseball", value: "Men's Baseball" },
    { label: "Men's Basketball", value: "Men's Basketball" },
    { label: "Men's Cross Country", value: "Men's Cross Country" },
    { label: "Men's Golf", value: "Men's Golf" },
    { label: "Men's Lacrosse", value: "Men's Lacrosse" },
    { label: "Men's Soccer", value: "Men's Soccer" },
    { label: "Men's Swimming & Diving", value: "Men's Swimming & Diving" },
    { label: "Men's Track & Field", value: "Men's Track & Field" },
  ];

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: currentPoints / maxPoints,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [currentPoints, maxPoints, progressAnimation]);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSections}>
        <PointsSection currentPoints={currentPoints} maxPoints={maxPoints} progressAnimation={progressAnimation} />

        <View style={styles.webViewContainer}>
          <Text style={styles.sectionTitle}>Live Feed</Text>
          <TouchableOpacity onPress={handleOpenWebPage}>
          <Image source={require('../../IMAGES/game teams.jpg')} style={styles.webImage} />
          </TouchableOpacity>
        </View>

        <TeamSelectionSection teams={teams} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      </View>
      <View style={styles.newsSection}>
        <Text style={[styles.sectionTitle, styles.newsTitle]}>News About Favorite Sport</Text>
        <View style={styles.newsScrollView}>
           <SportUpdates />
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topSections: {
    padding: 16,
    zIndex: 2,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  webViewContainer: {
    height: 100,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  webView: {
    flex: 1,
  },
  webImage: {
    width: '100%',
    height: '100%',
    resizeMode: "contain" ,
    marginTop: -10,
  },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#035e32',
    borderRadius: 6,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  progressLabelText: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  selectContainer: {
    marginBottom: 16,
    zIndex: 1000,
  },
  getButton: {
    backgroundColor: '#035e32',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  getButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newsSection: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    zIndex: 1,
  },
  newsTitle: {
    marginBottom: 8,
  },
  newsScrollView: {
    flex: 1,
  },
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  newsContent: {
    padding: 16,
  },
  newsText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  visitButton: {
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  visitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
