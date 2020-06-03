import React from 'react'
import {Image, View, Text} from 'react-native'

export default function openImage(props) {

  return (
    <View style={{backgroundColor: 'black'}}>
      <View>
        <Image 
          source={{uri: 'https://img.icons8.com/carbon-copy/100/000000/arrow-pointing-left.png'}}
          style={{marginTop: '20%'}}
        />
      </View>
    </View>
  )
}