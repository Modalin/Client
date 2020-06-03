import React from 'react'
import { Text, View} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Headers({navigation}) {

  return (
    // <LinearGradient
    //   colors={['#00A855','#6FD6A2', '#92DFB7', 'transparent']}
    //   style={{
    //     position: 'relative',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     height: 300,
    //   }}
    // >
    // </LinearGradient>
    <LinearGradient
      colors={['#004445', '#216353', '#2c7873']}
      style={{ padding: 15, alignItems: 'center', borderBottomRadius: 150, height:450, width: 400, top: -280, left: -20, borderBottomRightRadius: 100}}>
      <Text
        style={{
          backgroundColor: 'transparent',
          fontSize: 15,
          color: '#fff',
        }}>
        Sign in with Facebook
      </Text>
    </LinearGradient>

  )
}