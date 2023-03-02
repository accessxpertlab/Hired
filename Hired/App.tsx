
import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login/Login';
import CreateProfile from './CreateProfile/CreateProfile';
import PublicProfile from './PublicProfile/PublicProfile';
import JobCategory from './JobCategory/JobCategory';
import JobList from './JobList/JobList';
import Watchlist from './Watchlist/Watchlist';
import Home from './Home/Home';
import ViewJobPost from './JobPost/ViewJobPost';
import ApplyJob from './ApplyJob/ApplyJob';
import ApplicationList from './ApplicationList/ApplicationList';
import PurchaseAdd from './PurchaseAdd/PurchaseAdd';
import JobPost from './JobPost/JobPost';
import SideMenu from './SideMenu/SideMenu';
import AccountType from './AccountType/AccountType';
import EmployerWatchlist from './Watchlist/EmployerWatchlist';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {

  return (

    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName='App' drawerContent={props => <SideMenu {...props} />} screenOptions={{ headerShown: false, drawerType: 'front', drawerStyle: { width: '65%', backgroundColor: 'transparent' }, swipeEnabled: false, drawerActiveTintColor: 'red' }} >

        <Stack.Screen name='App' component={App} options={{ headerShown: false }} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const App = () => {

  return (

    <Stack.Navigator initialRouteName='Home' >

      {/* <Stack.Screen name='Root' component={Root} options={{ headerShown: false }} /> */}

      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

      <Stack.Screen name="CreateProfile" component={CreateProfile} options={{ headerShown: false }} />

      <Stack.Screen name="PublicProfile" component={PublicProfile} options={{ headerShown: false }} />

      <Stack.Screen name="JobList" component={JobList} options={{ headerShown: false }} />

      <Stack.Screen name="Watchlist" component={Watchlist} options={{ headerShown: false }} />
      <Stack.Screen name="EmployerWatchlist" component={EmployerWatchlist} options={{ headerShown: false }} />

      <Stack.Screen name="ViewJobPost" component={ViewJobPost} options={{ headerShown: false }} />
      <Stack.Screen name="ApplyJob" component={ApplyJob} options={{ headerShown: false }} />
      <Stack.Screen name="ApplicationList" component={ApplicationList} options={{ headerShown: false }} />
      <Stack.Screen name='PurchaseAdd' component={PurchaseAdd} options={{ headerShown: false }} />
      <Stack.Screen name='JobPost' component={JobPost} options={{ headerShown: false }} />
      <Stack.Screen name='AccountType' component={AccountType} options={{ headerShown: false }} />
      <Stack.Screen name="JobCategory" component={JobCategory} options={{ headerShown: false }} />
      <Stack.Screen name="SideMenu" component={SideMenu} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

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

export default Root;
