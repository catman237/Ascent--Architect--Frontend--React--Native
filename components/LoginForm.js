import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native';

const LoginForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loginUrl = 'http://localhost:9000/login'

    const handleSubmit = (e) => {

        const reqBody = { user: { username, password } }

        props.handleLogin('POST', reqBody, loginUrl)
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    AsyncStorage.setItem('token', data.token)
                    console.log(data)
                    props.setClimbs(data.user.climbs)
                    // props.setUser({ username: data.user.username, password: data.user.password_digest })
                    props.navigation.push('Projects')
                }
            })
    }


    return (

        <View style={styles.form}>

            <Text style={styles.formText}>Welcome Back</Text>

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

            <View>
                <TouchableOpacity
                    title='Sign In'
                    onPress={() => {
                        handleSubmit()
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222E50'
    },
    formText: {
        color: '#FFEECF',
        fontSize: 50,
        fontWeight: 'bold',
    },
    formInput: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#F2F2F2'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 30,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#B5CA8D',  //olivine      
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600'
    }
})
