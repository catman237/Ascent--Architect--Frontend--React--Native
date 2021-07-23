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
     <ScrollView>
             {showClimbs()}
     </ScrollView>
    )
}

export default ClimbsContainer

