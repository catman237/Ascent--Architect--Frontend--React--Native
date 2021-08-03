import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { set } from 'react-native-reanimated'

const AddAClimb = (props) => {

    const [name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [description, setDescription] = useState('')
    const [sent, setSent] = useState(false)
    const [sessions, setSessions] = useState('')
    const [height, setHeight] = useState('')
    const [isBoulder, setIsBoulder] = useState(false)
    const [terrain, setTerrain] = useState('')


    const climbsURL = 'http://localhost:9000/climbs'
    const reqBody = { name, grade, description, sessions, sent, height, isBoulder, terrain }


    const formReset = () => {
        setName('')
        setGrade('')
        setDescription('')
        setSessions('')
        setTerrain('')
        setHeight('')
        props.navigation.goBack()
    }

    const addClimb = () => {
        props.handleSubmit('POST', climbsURL, reqBody)
        .then(newClimb => props.setClimbs([ ...props.climbs, newClimb ]))
        formReset()
    }

    return (
        <View style={styles.formContainer} >

            <Text style={styles.header}>Climb Form</Text>

            <TextInput
                style={styles.inputContainer}
                placeholder="Route name"
                value={name}
                onChangeText={text => setName(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Grade"
                value={grade}
                onChangeText={text => setGrade(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Sessions"
                value={sessions}
                keyboardType={'numbers-and-punctuation'}
                onChangeText={text => setSessions(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Terrain"
                value={terrain}
                onChangeText={text => setTerrain(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Height"
                value={height}
                onChangeText={text => setHeight(text)}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title='Add This Climb'
                    style={styles.button}
                    onPress={addClimb} />
            </View>

        </View>

    )
}

export default AddAClimb


const styles = StyleSheet.create({

    inputContainer: {
        borderWidth: 1,
        borderColor: '#B5CA8D',
        backgroundColor: '#F2F2F2',
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 10,
        padding: 10,
        margin: 5
    },
    formContainer: {
        height: 300,
        alignItems: 'center',
        paddingTop: 100,
        flex: 1,
        backgroundColor: '#222E50'
    },
    buttonContainer: {
        backgroundColor: '#ADC698',
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 10,

    },
    header: {
        color: '#FFEECF',
        fontSize: 50,
        fontWeight: 'bold',
    }
})