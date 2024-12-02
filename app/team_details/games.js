import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

import SportUpdates  from '../web_pages/news';
export default function TeamHighlights() {
  return (
    <View style={styles.container}>
      <Text style={styles.highlightsTitle}>Latest Highlights</Text>

      <ScrollView style={styles.highlightsContainer}>
        <SportUpdates />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 70,
  },
  highlightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 15,
  },
  highlightsContainer: {
    paddingHorizontal: 20,
  },
  highlightCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  highlightImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  highlightText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlightInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  highlightScore: {
    fontSize: 14,
    color: 'gray',
  },
});
