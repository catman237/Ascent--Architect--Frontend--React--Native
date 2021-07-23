import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ClimbCard from './ClimbCard'

    const ClimbsContainer = (props) => {
      const showClimbs = () => {
          return props.climbs.map(climb => {
              return <ClimbCard climb={climb} key={climb.id}/>
          })
      }

    return (
     <ScrollView style={StyleSheet.scrollView}>
             {showClimbs()}
     </ScrollView>
    )
}

export default ClimbsContainer

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }
})
