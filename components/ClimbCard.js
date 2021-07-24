import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, Alert } from 'react-native'

const ClimbCard = (props) => {

    const climbUrl = `http://localhost:5000/climbs/${props.climb.id}`
    const handleSubmit = props.handleSubmit
    const sessions = props.climb.sessions
    const send = props.climb.sent
    
    const [session, setSession] = useState(sessions)
    const [sent, setSent] = useState(send)
    
    const addSession = () => {
        const newSession = props.climb.sessions += 1
        setSession(newSession)
        const reqBody = {sessions: session}
        handleSubmit('PATCH', climbUrl, reqBody)
    }

    const removeClimb = () => {
        handleSubmit('DELETE', climbsUrl)
        Alert.alert(`Deleted ${props.climb.name}`)
    }
    
    const sendClimb = () => {
        setSent(!sent)
        const reqBody = {sent: sent} 
        handleSubmit('PATCH', climbUrl, reqBody )
        Alert.alert(`Congrats you sent ${props.climb.name} in ${props.climb.sessions}`)
    }

    return (
        <View style={styles.climbCard}>
            <Text style={styles.cardContentTitle}>{props.climb.name}</Text>
            <Text style={styles.cardContent}>{props.climb.grade}</Text>
            <Text style={styles.cardContent}>{props.climb.description}</Text>
            <Text style={styles.cardContent}>Sessions: {session}</Text>
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

