import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'

const Header = (props) => {
    const logoutUrl = 'http://localhost:9000/logout'

    const logout = () => {
        AsyncStorage.removeItem('token')
        props.setUser()
        props.navigation.popToTop()
    }

    return (
        <View style={styles.HeaderContainer}>
            
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        style={styles.text}
                        onPress={() => props.navigation.push('Add a project')}
                    > Add a project </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        style={styles.text}
                        onPress={() => props.navigation.push('Sent Projects')}
                    > Sent projects </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        style={styles.text}
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
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20,
        marginLeft: 5,
        backgroundColor: '#B5CA8D',  //olivine      
    },
    text: {
        fontWeight: '600',
        fontSize: 16
    }
})
