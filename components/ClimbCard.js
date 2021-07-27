import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'

const ClimbCard = (props) => {

    const climbUrl = `http://localhost:9000/climbs/${props.climb.id}`
    const handleSubmit = props.handleSubmit
    const initSession = props.climb.sessions
    const send = props.climb.sent
    
    const [sessions, setSessions] = useState(initSession)
    const [sent, setSent] = useState(send)
    
    const addSession = () => {
        setSessions(initSession + 1)
        const reqBody = {sessions}
        handleSubmit('PATCH', climbUrl, reqBody)
    }

    const removeClimb = () => {
        handleSubmit('DELETE', climbUrl)
        Alert.alert(`Deleted ${props.climb.name}`)
    }
    
    const sendClimb = () => {
        setSent(!sent)
        const reqBody = {sent: sent} 
        handleSubmit('PATCH', climbUrl, reqBody )
        Alert.alert(`Congrats you sent ${props.climb.name} in ${props.climb.sessions} sessions`)
    }

    return (
        <View style={styles.climbCard}>
            <Text style={styles.cardContentTitle}>{props.climb.name}</Text>
            <Text style={styles.cardContent}>Grade: {props.climb.grade}</Text>
            <Text style={styles.cardContent}>Description: {props.climb.description}</Text>
            <Text style={styles.cardContent}>Sessions: {sessions}</Text>
            <Text style={styles.cardContent}>Terrain: {props.climb.terrain}</Text>
            <Text style={styles.cardContent}>Height: {props.climb.height}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => addSession()}>
                    <Text>Projected</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => sendClimb()}>
                    <Text>Sent</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => removeClimb()}
                >
                    <Text>Remove</Text>
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
        borderRadius: 20
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
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        height: 25,
        width: 100,
        margin: 3
    }
})

