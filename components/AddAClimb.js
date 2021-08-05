import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
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
            .then(newClimb => props.setClimbs([...props.climbs, newClimb]))
        formReset()
    }

    return (
        <View style={styles.page} >

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Climb Form</Text>
            </View>

            <View stlye={styles.formContainer}>

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
                <TouchableOpacity
                        title='Sign Up'
                        onPress={addClimb}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}> Add a project </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )
}

export default AddAClimb


const styles = StyleSheet.create({

    page: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222E50'
    },
    titleContainer: {
        marginTop: 50,
        marginBottom: 50
    },
    title: {
        color: '#FFEECF',
        fontSize: 50,
        fontWeight: 'bold',
    },
    formContainer: {
        padding: 100
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#B5CA8D',
        backgroundColor: '#F2F2F2',
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 15,
        padding: 10,
        margin: 5
    },
    buttonContainer: {
        backgroundColor: '#ADC698',
        borderWidth: 2,
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600"
    }
})