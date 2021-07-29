import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { AsyncStorage } from 'react-native';

const LoginForm = (props) => {
    const climbsUrl = 'http://localhost:9000/climbs'
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loginUrl = 'http://localhost:9000/login'

    const handleSubmit = (e) => {
        props.setUser({
            username,
            password
        })

        const reqBody = { user: { username, password } }

        props.handleLogin('POST', reqBody, loginUrl)
            .then(data => {
                console.log('token', data)
                if (data.message) {
                    setError(data.message)
                } else {
                    AsyncStorage.setItem('token', data.token)
                }

            })
    }


    return (

        <View style={styles.form}>

            <Text style={styles.formText}>Please Sign In</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <TextInput
                style={styles.formInput}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />

            <Button title='Login' onPress={() => handleSubmit()} />

            <Button title='Token getter' onPress={() => {
                AsyncStorage.getItem('token')
                    .then(token => console.log('token', token))
            }} />

            <Button title='Get user' onPress={() => {
                AsyncStorage.getItem('token')
                .then(token => {
                    fetch(climbsUrl,{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(res => res.json())
                    .then(users => console.log('users', users))
                })
            }} />


        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    form: {
        flex: .7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formInput: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 10,
        padding: 10,
    }
})
