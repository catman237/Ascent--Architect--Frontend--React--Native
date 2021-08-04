import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Home = (props) => {
    const handlePress = (component) => {
        props.navigation.navigate(component)
    }

    return (
     <View style={styles.homePage}>
         <Text style={styles.title}>Ascent Architect</Text>
         {/* <View>
             <TouchableOpacity 
             title='Sign In'
             onPress={() => handlePress('Projects')}
             style={styles.button}
             >
                 <Text style={styles.buttonText}> My Projects </Text>
             </TouchableOpacity>
         </View> */}
         <View>
             <TouchableOpacity 
             title='Sign In'
             onPress={() => handlePress('Login')}
             style={styles.button}
             >
                 <Text style={styles.buttonText}> Login </Text>
             </TouchableOpacity>
         </View>
         <View>
             <TouchableOpacity 
             title='Sign Up'
             onPress={() => handlePress('Sign Up')}
             style={styles.button}
             >
                 <Text style={styles.buttonText}> Sign Up </Text>
             </TouchableOpacity>
         </View>

     </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222E50' //mainBlue
    },
    title: {
        color: '#FFEECF',
        fontSize: 50,
        fontWeight: 'bold',
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
