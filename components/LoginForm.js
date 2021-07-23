import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
    
const LoginForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
     props.setUser({
         username,
         password
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

            <Button title='Submit' onPress={() => handleSubmit()}/>
            
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    form: {
        flex: .5
    },
    formInput: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 40/2,
        marginTop: 10,
        padding: 10,
    },
})
