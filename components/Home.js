import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { acc } from 'react-native-reanimated'
import { back } from 'react-native/Libraries/Animated/src/Easing'


const Home = (props) => {
    const handlePress = (component) => {
        props.navigation.navigate(component)
    }

    const backgroundImage = 'https://blog.tenaya.net/wp-content/uploads/2020/07/Chris-Sharma-Trick-or-Tree-Mont-Rebei-1-WEB-1.jpg'

    return (
        <View style={styles.homePage}>

            <View style={styles.titleContainerTop}>
                <Text style={styles.title}>Ascent</Text>
            </View>

            <View style={styles.titleContainerBottom}>
                <Text style={styles.title}>Architect</Text>
            </View>
            <View>
                <Image style={styles.homeImage} source={{ uri: backgroundImage }}/>
            </View>

            <View style={styles.totalButtonContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        title='Sign In'
                        onPress={() => handlePress('Login')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        title='Sign Up'
                        onPress={() => handlePress('Sign Up')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#222E50' //mainBlue
    },
    titleContainerTop: {
        marginTop: 25
    },
    titleContainerBottom: {
        marginBottom: 10
    },
    title: {
        color: '#FFEECF',
        fontSize: 50,
        fontWeight: 'bold',
        flexDirection: 'column',
    },
    homeImage: {
        height:450,
        width: 350,
        borderRadius: 8
    },
    totalButtonContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 30,
        borderWidth: .5,
        borderRadius: 8,
        margin: 50,
        backgroundColor: '#B5CA8D',  //olivine  

    },
    buttonText: {
        fontSize: 16,
    }
})
