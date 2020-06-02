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
      <Tab.Screen name="Beranda" component={home}/>
      <Tab.Screen name="Transaksi" component={transaction}/>
      <Tab.Screen name="Profile" component={profile} options={{tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-people" color={"#AEAEAE"} size={25} />
      )}}/>
    </Tab.Navigator>
  )
}