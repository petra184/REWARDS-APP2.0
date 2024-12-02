import { Text, View, StyleSheet, Image, Pressable, Linking } from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import instagramIcon from "../../IMAGES/instalogo.jpg"; // Adjust the path as needed
import facebookIcon from "../../IMAGES/facebooklogo.png"; // Adjust the path as needed
import xIcon from "../../IMAGES/xlogo.png"; // Adjust the path as needed
import websiteIcon from "../../IMAGES/websitelogo.png"; // Adjust the path as needed

export default function Media() {
  const socialLinks = [
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Follow us for the latest photos and stories.',
      icon: instagramIcon,
      url: "https://instagram.com",
    },
    {
      id: 'facebook',
      title: 'Facebook',
      description: 'Join our community for updates and events.',
      icon: facebookIcon,
      url: "https://facebook.com",
    },
    {
      id: 'twitter',
      title: 'X',
      description: 'Stay tuned for live tweets during games.',
      icon: xIcon,
      url: "https://twitter.com",
    },
    {
      id: 'website',
      title: 'Official Website',
      description: 'Visit our website for more information.',
      icon: websiteIcon,
      url: "https://example.com",
    },
  ];

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://gojaspers.com/images/2024/9/17/rosterschedule.JPG?width=1600" }}
        style={styles.playerImage}
      />
      
      <View style={styles.linksContainer}>
        {socialLinks.map((link) => (
          <Pressable
            key={link.id}
            style={styles.linkCard}
            onPress={() => Linking.openURL(link.url)}
          >
            <View style={styles.linkContent}>
              <Image
                source={link.icon}
                style={styles.icon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{link.title}</Text>
                <Text style={styles.description}>{link.description}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 70,
  },
  playerImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  linksContainer: {
    padding: 16,
  },
  linkCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 31,
    height: 31,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
