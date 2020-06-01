import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './home'
import business from './business_list'
import transaction from './transaction'
import profile from './profile'

const Tab = createBottomTabNavigator()

export default function Tab_nav() {
  return (
    <Tab.Navigator tabBarOptions={{style: {marginTop: 5}}}>
      <Tab.Screen name="Beranda" component={home}/>
      <Tab.Screen name="Investasi" component={business}/>
      <Tab.Screen name="Transaksi" component={transaction}/>
      <Tab.Screen name="Profile" component={profile}/>
    </Tab.Navigator>
  )
}