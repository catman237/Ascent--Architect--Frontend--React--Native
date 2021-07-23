import React, {useState} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ClimbCard = (props) => {

    const sessions = props.climb.sessions

    const [session, setSession] = useState(sessions)

    const addSession = () => {
        const newSession = props.climb.sessions += 1
        setSession(newSession)
        console.warn(session)
    }
    
    return (
        <View style={styles.climbCard}>
            <Text>{props.climb.name}</Text>
            <Text>{props.climb.grade}</Text>
            <Text>{props.climb.description}</Text>
            <Text>Sessions: {session}</Text>
            <View>
                <Button title='Working Day' style={styles.button}
                 onPress={() => addSession()} />
                <Button title='Sent' style={styles.button} />
            </View>
        </View>
    )
}

export default ClimbCard

const styles = StyleSheet.create({
    climbCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        height: 5
    }
})

