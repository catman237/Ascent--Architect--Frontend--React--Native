import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert, AsyncStorage } from 'react-native'

const ClimbCard = (props) => {
    const climbUrl = `http://localhost:9000/climbs/${props.climb.id}`
    const handleSubmit = props.handleSubmit
    const initSession = props.climb.sessions
    const send = props.climb.sent


    const [sessions, setSessions] = useState(initSession)
    const [sent, setSent] = useState(send)

    const addSession = () => {
        const newSessions = sessions + 1
        setSessions(newSessions)
        const reqBody = { sessions: newSessions }
        handleSubmit('PATCH', climbUrl, reqBody)
    }

    const removeClimb = () => {
        handleSubmit('DELETE', climbUrl)
            .then(resp => {
                const remainingClimbs = props.climbs.filter(climb => climb.id !== resp.id)
                props.setClimbs(remainingClimbs)
            })
        Alert.alert(`Deleted ${props.climb.name}`)
    }

    const sendClimb = () => {
        setSent(!send)
        const reqBody = { sent: !send }
        handleSubmit('PATCH', climbUrl, reqBody)
            .then(updatedClimb => {
                const existingClimbs = props.climbs.filter(climb => climb.id !== updatedClimb.id)
                props.setClimbs([...existingClimbs, updatedClimb])
            })
        Alert.alert(`Congrats you sent ${props.climb.name} in ${sessions} sessions`)
    }

    return (
        <View style={styles.climbCard}>
            <Text style={styles.cardContentTitle}>{props.climb.name}</Text>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Grade:</Text>
                <Text style={styles.userText}>{props.climb.grade}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Description:</Text>
                <Text style={styles.userText}>{props.climb.description}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Sessions:</Text>
                <Text style={styles.userText}>{sessions}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Terrain:</Text>
                <Text style={styles.userText}>{props.climb.terrain}</Text>
            </View>

            <View style={styles.cardContentContainer}>
                <Text style={styles.cardContent}>Height:</Text>
                <Text style={styles.userText}>{props.climb.height}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonP}
                    onPress={() => addSession()}>
                    <Text style={styles.buttonText}>Projected</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonS}
                    onPress={() => sendClimb()}>
                    <Text style={styles.buttonText}>Sent</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonR}
                    onPress={() => removeClimb()}
                >
                    <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default ClimbCard

const styles = StyleSheet.create({
    climbCard: {
        flex: 1,
        borderWidth: 2.5,
        margin: 5,
        paddingLeft: 5,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    cardContentContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardContentTitle: {
        padding: 5,
        fontWeight: '700',
        fontSize: 28,
        textDecorationLine: 'underline'
    },
    cardContent: {
        padding: 3,
        paddingLeft: 6,
        fontWeight: 'bold',
        color: '#3F3F3F'
    },
    userText: {

    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    buttonP: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        height: 25,
        width: 100,
        margin: 3,
        backgroundColor: '#CDE8F4'
    },
    buttonS: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        height: 25,
        width: 100,
        margin: 3,
        backgroundColor: '#B5CA8D'
    },
    buttonR: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        height: 25,
        width: 100,
        margin: 3,
        backgroundColor: '#F9F7F3'
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 13
    }
})

