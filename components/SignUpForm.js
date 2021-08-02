import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native';

const SignUpForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userUrl = 'http://localhost:9000/users'
    const climbsUrl = 'http://localhost:9000/climbs'

    const handleSubmit = (e) => {
   
        const reqBody = { user: { username, password } }

        props.handleLogin('POST', reqBody, userUrl)
            .then(data => {
                if (data.massege) {
                    setError(data.massege)
                } else {
                    console.log('started sign up')
                    AsyncStorage.setItem('token', data.token)
                    .then(() => props.setUser({
                        username,
                        password
                    }))
                }
            })
    }

    return (
        
        <View style={styles.form}>
          
            <Text style={styles.formText}>Sign Up</Text>
            
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
                    style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignUpForm


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
        borderWidth: .5,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#B5CA8D',  //olivine      
    },
    buttonText: {
        fontSize: 16,
    }
})