import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SentClimbCard = (props) => {
    return (
     <View style={styles.climbCard}>
      <Text style={styles.cardContentTitle}>{props.climb.name}</Text>
            <Text style={styles.cardContent}>Grade: {props.climb.grade}</Text>
            <Text style={styles.cardContent}>Description: {props.climb.description}</Text>
            <Text style={styles.cardContent}>Sessions: {props.climb.sessions}</Text>
            <Text style={styles.cardContent}>Terrain: {props.climb.terrain}</Text>
            <Text style={styles.cardContent}>Height: {props.climb.height}</Text>
     </View>
    )
}

export default SentClimbCard

const styles = StyleSheet.create({
    climbCard: {
        flex: 1,
        borderWidth: 2.5,
        margin: 5,
        paddingLeft: 5,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        height: 250

    },
    cardContentTitle: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 25
    },
    cardContent: {
        padding: 3,
        paddingLeft: 6
    },
})
