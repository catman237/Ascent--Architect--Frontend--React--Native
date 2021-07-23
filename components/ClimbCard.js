import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ClimbCard = (props) => {
    return (
        <View style={styles.climbCard}>
            <Text>{props.climb.name}</Text>
            <Text>{props.climb.grade}</Text>
            <Text>{props.climb.description}</Text>
            <View>
                <Button title='Working Day' style={styles.button} />
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

