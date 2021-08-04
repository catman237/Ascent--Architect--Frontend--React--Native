import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import SentClimbCard from './SentClimbCard'

const SentProjects = (props) => {
  const showSentClimbs = () => {
    return props.climbs.filter(climb => climb.sent === true).map(climb => {
      return <SentClimbCard
        climbs={props.climbs}
        climb={climb}
        key={climb.id}
        setSentclimbs={props.setSentClimbs}
        sentclimbs={props.sentClimbs}
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
