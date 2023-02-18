/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import * as React from 'react'
import * as React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login/Login';
import CreateProfile from './CreateProfile/CreateProfile';
import PublicProfile from './PublicProfile/PublicProfile';
import JobCategory from './JobCategory/JobCategory';
import JobList from './JobList/JobList';
import Watchlist from './Watchlist/Watchlist';
import Home from './Home/Home';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} options={{ headerShown: false }} />
        <Stack.Screen name="PublicProfile" component={PublicProfile} options={{ headerShown: false }} />
        <Stack.Screen name="JobCategory" component={JobCategory} options={{ headerShown: false }} />
        <Stack.Screen name="JobList" component={JobList} options={{ headerShown: false }} />
        <Stack.Screen name="Watchlist" component={Watchlist} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 40
  },

  buttonView: {
    height: '50%',
    justifyContent: 'center',
    width: '15%',
    position: 'absolute',
    bottom: 0,
    right: 20,
    flex: 1,
    flexDirection: 'column',
  },

  shadowView: {

    width: '52%',
    height: '15%',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 3.0
  },

  iconView: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  },

  profileView: {
    justifyContent: 'center',
    height: '19%',
    width: '30%',
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'column',
  }

});

export default App;
