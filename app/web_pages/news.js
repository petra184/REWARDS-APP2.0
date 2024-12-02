import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const SportUpdates = () => {
  const router = useRouter();

  const handleOpenWebPage = (websiteUrl) => {
    router.push({
      pathname: "../web_pages/landing",
      params: { websiteUrl },
    });
  };

  return (
    <View style={styles.newsSection}>
      {/* First News Card */}
      <TouchableOpacity
        style={styles.newsCard}
        onPress={() => handleOpenWebPage('https://gojaspers.com/news/2024/11/24/womens-basketball-jaspers-close-out-umbc-to-record-fifth-straight-win.aspx')}
      >
        <Image
          source={{
            uri: 'https://gojaspers.com/images/2024/11/24/HanaMuhlBattleoftheBronx.JPG?width=1128&height=635&mode=crop',
          }}
          style={styles.newsImage}
        />
        <View style={styles.newsContent}>
          <Text style={styles.newsText}>
            Jaspers close out UMBC to record fifth straight win!
          </Text>
        </View>
      </TouchableOpacity>

      {/* Second News Card */}
      <TouchableOpacity
        style={styles.newsCard}
        onPress={() => handleOpenWebPage('https://gojaspers.com/news/2024/11/23/womens-basketball-heads-to-baltimore-for-tilt-at-umbc.aspx')}
      >
        <Image
          source={{
            uri: 'https://gojaspers.com/images/2024/11/23/RL4J3598.JPG?width=1128&height=635&mode=crop',
          }}
          style={styles.newsImage}
        />
        <View style={styles.newsContent}>
          <Text style={styles.newsText}>
            Women's Basketball heads to Baltimore for tilt at UMBC.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Third News Card */}
      <TouchableOpacity
        style={styles.newsCard}
        onPress={() => handleOpenWebPage('https://gojaspers.com/news/2024/11/21/womens-basketball-announces-four-signees-in-class-of-2025.aspx')}
      >
        <Image
          source={{
            uri: 'https://gojaspers.com/images/2024/11/10/Plain_Logo_with_Background_fug0Y.jpg?width=1128&height=635&mode=crop',
          }}
          style={styles.newsImage}
        />
        <View style={styles.newsContent}>
          <Text style={styles.newsText}>
            Women's Basketball announces four signees in Class of 2025.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newsSection: {
    flex: 1,
    zIndex: 1,
  },
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
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
  },
});

export default SportUpdates;
