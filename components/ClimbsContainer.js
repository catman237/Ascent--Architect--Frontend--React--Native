import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ClimbCard from './ClimbCard'
import  Header  from './Header';

const ClimbsContainer = (props) => {
    console.log("props from climbcontainer", props.climbs)
    const showClimbs = () => {
        return props.climbs.filter(climb => climb.sent === false).map(climb => {
            return <ClimbCard 
                climb={climb}
                setUser={props.setUser}
                user={props.user}
                key={climb.id}
                handleSubmit={props.handleSubmit}
            />
        })
        // return props.climbs.map(climb => {
        //     return <ClimbCard
        //         climb={climb}
        //         key={climb.id}
        //         handleSubmit={props.handleSubmit}
        //         loggedIn={props.loggedIn}
        //         setLoggedIn={props.setLoggedIn} />
        // })
    }

    return (
        <> 
        <Header
         navigation={props.navigation} 
        handleSubmit={props.handleSubmit} 
        setUser={props.setUser}
        />
        <ScrollView style={styles.container}>
            {showClimbs()}
        </ScrollView>
        </>
    )
}

export default ClimbsContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222E50'
    }
})