import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SentClimbCard = (props) => {
    return (
        <View style={styles.climbCard}>


            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContentTitle}>{props.climb.name}</Text>
                <Text style={styles.check}>✔</Text>
            </View>


            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Grade:</Text>
                <Text style={styles.userText}>{props.climb.grade}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Description:</Text>
                <View styles={styles.descriptionText}>
                    <Text style={styles.userText}> {props.climb.description}</Text>
                </View>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Sessions:</Text>
                <Text style={styles.userText}>{props.climb.sessions}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Terrain:</Text>
                <Text style={styles.userText}>{props.climb.terrain}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Height: </Text>
                <Text style={styles.userText}>{props.climb.height}</Text>
            </View>

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
        height: 180
    },
    cardContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContentTitle: {
        padding: 5,
        fontWeight: '700',
        fontSize: 28,
        textDecorationLine: 'underline'
    },
    descriptionText: {
        flexWrap: 'wrap'
    },
    cardContent: {
        padding: 3,
        paddingLeft: 6,
        fontWeight: 'bold',
        color: '#3F3F3F'
    },
    check: {
        paddingLeft: 5
    }
})
