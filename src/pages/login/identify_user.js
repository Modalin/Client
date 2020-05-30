import React from 'react'
import {View, Text} from 'react-native'
import {Button} from 'native-base'
import Gstyle from '../../style/global_style'

export default function identify_user({navigation}) {

  return(
    <View style={Gstyle.container_full_white}>
      <Text style={Gstyle.title_bold}>Siapakah Anda ?</Text>
      <Button style={Gstyle.btn_style} onPress={() => navigation.navigate('login')}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Investor </Text>
      </Button>
      <Button style={Gstyle.btn_style}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Mitra </Text>
      </Button>
    </View>
  )
}