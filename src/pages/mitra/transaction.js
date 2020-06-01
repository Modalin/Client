import React from 'react'
import {Image, View, Text} from 'react-native'
import {Button} from 'native-base'
import Gstyle from '../../style/global_style'

export default function mitraPage({navigation}) {

  return (
    <View style={Gstyle.containerFull}>
      <Text style={Gstyle.logo_text_title}>Mitra Page</Text>
    </View>
  )
}