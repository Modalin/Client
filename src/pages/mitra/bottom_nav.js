import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './home'
import transaction from './transaction'
import profile from './profile'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function Tab_nav() {
  return (
    <Tab.Navigator tabBarOptions={{}}>
      <Tab.Screen name="Beranda" component={home} options={{tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" color={"#AEAEAE"} size={25} />
      )}}/>
      <Tab.Screen name="Transaksi" component={transaction} options={{tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-sync" color={"#AEAEAE"} size={25} />
      )}}/>
      <Tab.Screen name="Profile" component={profile} options={{tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-contact" color={"#AEAEAE"} size={25} />
      )}}/>
    </Tab.Navigator>
  )
}