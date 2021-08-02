import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ClimbCard from './ClimbCard'

const SentProjects = (props) => {

  console.log(props)

  const showSentClimbs = () => {
    return props.climbs.filter(climb => climb.sent === true).map(climb => {
      return <ClimbCard
        climb={climb}
        key={climb.id}
      />
    })
  }



  return (
    <ScrollView style={styles.container}>
      {showSentClimbs()}
    </ScrollView>
  )
}

export default SentProjects

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222E50'
  }
})
