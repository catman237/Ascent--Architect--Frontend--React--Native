import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import ClimbsContainer from './components/ClimbsContainer';
import AddAClimb from './components/AddAClimb';

export default function App() {


  const backgroundPhoto = 'https://www.planetmountain.com/Rock/falesie/106/margalef.jpg'
  const baseURL = 'http://localhost:5000/climbs'

  const [climbs, setClimbs] = useState([])
  const [sentClimbs, setSentClimbs] = useState([])
  const [photo, setPhoto] = useState(backgroundPhoto)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [stale, setStale] = useState(false)

  const switchScreens = (setState, state) => {
    setState(!state)
  }

  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(climbs => setClimbs(climbs))
  }, [stale])

  return (
    <SafeAreaView style={styles.container}>

      <Image source={{ uri: photo }} style={styles.photo}></Image>

      <View style={styles.buttonContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.buttonL}
            onPress={() => switchScreens(setToggle2, toggle2)}>
            <Text>New Project</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer} >
            <TouchableOpacity style={styles.buttonR}
              onPress={() => switchScreens(setToggle1, toggle1)}>
              <Text>My Projects</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <ScrollView style={styles.scrollView}>

        {toggle2
          ?
          null
          :
          <AddAClimb setStale={setStale} />
        }

      </ScrollView>

      <ScrollView>

        {toggle1
          ?
          <ClimbsContainer
            climbs={climbs}
            style={styles.climbsContainer} />
          :
          null}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    flex: 1,
    marginTop: -20,
    width: '100%',
  },
  climbsContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center'
  },
  buttonL: {
    width: 100,
    textAlign: 'left',
    marginLeft: 25,
    backgroundColor: 'orange',
    padding: 8,
    paddingLeft: 11.5,
    borderRadius: 30
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
    marginTop: 10

  },
  buttonR: {
    width: 100,
    textAlign: 'right',
    marginRight: 25,
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 30,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
});
