import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://gojaspers.com/images/2024/9/17/rosterschedule.JPG?width=1600' }}
                style={styles.teamImage}
            />

            <ScrollView style={styles.rosterContainer}>
                {[ 
                    { name: 'John Anderson', position: 'Guard', jersey: '#7', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
                    { name: 'Emily Carter', position: 'Forward', jersey: '#23', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
                    { name: 'Michael Smith', position: 'Center', jersey: '#11', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
                    { name: 'Sarah Johnson', position: 'Guard', jersey: '#45', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
                ].map((player, index) => (
                    <View key={index} style={styles.playerContainer}>
                        <Image source={{ uri: player.image }} style={styles.playerImage} />
                        <View style={styles.playerDetails}>
                            <Text style={styles.playerName}>{player.name}</Text>
                            <Text style={styles.playerInfo}>Position: {player.position}</Text>
                            <Text style={styles.playerInfo}>Jersey: {player.jersey}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006400',
        textAlign: 'center',
        marginVertical: 10,
    },
    teamImage: {
        width: '90%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    playerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        width: '95%',
        marginLeft: 10,
    },
    playerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    playerDetails: {
        flex: 1,
    },
    playerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    playerInfo: {
        fontSize: 14,
        color: 'gray',
    },
});
