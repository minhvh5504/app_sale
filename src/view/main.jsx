import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './Login/LoginScreen'
import RegisterScreen from './Register/RegisterScreen'
import Homescreen from './Home/HomeScreen'
import ProductScreen from './Product/ProductScreen'
import ProfileScreen from './Profile/ProfileScreen'
import SettingScreen from './Setting/SettingScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Tab.Screen
        name='Home'
        component={Homescreen}
        options={{
          tabBarIcon: () => <Icon name='home' size={35} color='#A1C4FD' />,
        }}
      />
      <Tab.Screen
        name='Product'
        component={ProductScreen}
        options={{
          tabBarIcon: () => <Icon name='shopping-cart' size={35} color='#A1C4FD' />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name='supervised-user-circle' size={35} color='#A1C4FD' />,
        }}
      />
      <Tab.Screen
        name='Setting'
        component={SettingScreen}
        options={{
          tabBarIcon: () => <Icon name='settings' size={35} color='#A1C4FD' />,
        }}
      />
    </Tab.Navigator>
  )
}
function RootStack() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Tab.Screen name='HomeTabs' component={MyTabs} />
    </Stack.Navigator>
  )
}
export default Main = () => {
  return (
    <NavigationContainer>
      <RootStack></RootStack>
    </NavigationContainer>
  )
}
