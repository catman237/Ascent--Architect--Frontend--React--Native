import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Header = (props) => {
    const logoutUrl = 'http://localhost:9000/logout'

    const logout = () => {
        // const options = {
        //     'method': "GET",
        //     'headers': {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify()
        // }
        // fetch(logoutUrl, options)
        props.navigation.popToTop()
    }

    return (
        <View style={styles.HeaderContainer}>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        onPress={() => props.navigation.push('Add a project')}
                    > Add a project </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        onPress={() => props.navigation.push('Sent Projects')}
                    > Sent projects </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        onPress={() => logout()}
                    > Sign out </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer: {
        flex: .1,
        backgroundColor: '#222E50',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 30,
        borderWidth: .5,
        borderRadius: 8,
        marginTop: 20,
        marginLeft: 5,
        backgroundColor: '#B5CA8D',  //olivine      
    },
})
