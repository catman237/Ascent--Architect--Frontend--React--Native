import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import ClimbsContainer from './components/ClimbsContainer';
import AddAClimb from './components/AddAClimb';

export default function App() {


  const backgroundPhoto = 'https://www.planetmountain.com/Rock/falesie/106/margalef.jpg'
  const climbsUrl = 'http://localhost:5000/climbs'

  const [climbs, setClimbs] = useState([])
  const [sentClimbs, setSentClimbs] = useState([])
  const [sessions, setSessions] = useState([])
  const [photo, setPhoto] = useState(backgroundPhoto)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [stale, setStale] = useState(false)

  const switchScreens = (setState, state) => {
    setState(!state)
  }

  const handleSubmit = (method, url, body) => {
    const options = {
        'method': method,
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    }
    fetch(url,options)
    .then(setStale(!stale))
}

  useEffect(() => {
    fetch(climbsUrl)
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
        </View>

        <View style={styles.flexRow} >
          <TouchableOpacity style={styles.buttonR}
            onPress={() => switchScreens(setToggle1, toggle1)}>
            <Text>My Projects</Text>
          </TouchableOpacity>
        </View>


      </View>

      <View style={{ flex: 1 }}>

        {toggle2
          ?
          null
          :
          <AddAClimb 
          setStale={setStale} />
        }


        {toggle1
          ?
          <ClimbsContainer
            climbs={climbs}
            style={styles.climbsContainer}
            handleSubmit={handleSubmit} />
          :
          null}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    flex: 1,
    marginTop: -100,
    width: '100%',
    
  },
  climbsContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 60,
    alignItems: 'center'
  },
  flexRowL: {
    alignItems: 'flex-end',
    flex: 1,
    marginTop: 10,
    marginBottom: 0,
  },
  buttonContainer: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
  marginBottom: 0
  },
  buttonR: {
    width: 100,
    textAlign: 'left',
    backgroundColor: 'orange',
    padding: 8,
    paddingLeft: 11.5,
    borderRadius: 30
  },
  buttonL: {
    width: 100,
    
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 30,
  }
});
