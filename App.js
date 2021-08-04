import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, AsyncStorage } from 'react-native';
import ClimbsContainer from './components/ClimbsContainer';
import AddAClimb from './components/AddAClimb';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import SentProjects from './components/SentProjects';


export default function App() {

  const backgroundPhoto = 'https://www.planetmountain.com/Rock/falesie/106/margalef.jpg'
  const profileUrl = 'http://localhost:9000/profile'

  const [climbs, setClimbs] = useState([])
  const [user, setUser] = useState()
  const [sentClimbs, setSentClimbs] = useState([])
  const [sessions, setSessions] = useState([])
  const [photo, setPhoto] = useState(backgroundPhoto)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [stale, setStale] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (method, body, url) => {
    const options = {
      'method': method,
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(url, options)
      .then(res => res.json())
  }

  const handleSubmit = async (method, url, body) => {
    const token = await AsyncStorage.getItem('token');
    const options = {
      'method': method,
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body)
    }

    return fetch(url, options)
      .then(resp => resp.json())
  }

  const stack = createStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>

        <stack.Screen name='Welcome'>
          {(stackProps) => <Home
            climbs={climbs}
            {...stackProps}
          />}
        </stack.Screen>

        <stack.Screen name='Sent Projects'>
          {(stackProps) => <SentProjects
            climbs={climbs}
            sentClimbs={sentClimbs}
            setSentClimbs={setSentClimbs}
            {...stackProps}
          />}
        </stack.Screen>

        <stack.Screen name='Sign Up'>
          {({ navigation }) => <SignUpForm
                user={user}
                setUser={setUser}
                handleLogin={handleLogin}
                handleSubmit={handleSubmit}
                setClimbs={setClimbs}
                loggedIn={loggedIn}
                navigation={navigation}
          />}
        </stack.Screen>


        <stack.Screen name='Projects'>
          {({ navigation }) => <ClimbsContainer
            climbs={climbs}
            setUser={setUser}
            user={user}
            setClimbs={setClimbs}
            sentClimbs={sentClimbs}
            setSentClimbs={setSentClimbs}
            handleSubmit={handleSubmit}
            loggedIn={loggedIn}
            navigation={navigation}
          />}
        </stack.Screen>

        <stack.Screen name='Login'>
          {({ navigation }) => <LoginForm
            user={user}
            setUser={setUser}
            handleLogin={handleLogin}
            navigation={navigation}
            setClimbs={setClimbs}
            climbs={climbs}
          />}
        </stack.Screen>

        <stack.Screen name='Add a project'>
          {({ navigation }) => <AddAClimb
            handleSubmit={handleSubmit} 
            navigation={navigation}
            climbs={climbs}
            setClimbs={setClimbs}
            />}
        </stack.Screen>
        
      </stack.Navigator>
    </NavigationContainer>
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