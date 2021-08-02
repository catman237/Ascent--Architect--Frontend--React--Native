import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Header = (props) => {
    
    return (
        <View style={styles.HeaderContainer}>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text
                        onPress={() => props.navigation.push('Add a project')}
                    > Add a project </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
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
})
