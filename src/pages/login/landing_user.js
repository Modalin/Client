import React from 'react'
import {Image, View, Text} from 'react-native'
import {Button} from 'native-base'
import bgImage from '../../../assets/3599938.png'
import Gstyle from '../../style/global_style.js'

export default function landing_user({navigation}) {

  return (
    <View style={Gstyle.containerFull}>
      <Text style={Gstyle.logo_text_title}>ModalIn</Text>
      <Image source={bgImage}/>
      <Button style={Gstyle.btn_style}>
        <Text style={Gstyle.btn_text}> Buat Akun Gratis</Text>
      </Button>
      <View style={{marginTop:10}}>
        <Text>Sudah memiliki akun ?<Text> </Text>
          <Text style={Gstyle.text_green} onPress={() => navigation.navigate('identify user')}>
           Klik disini untuk masuk
          </Text>
        </Text>
      </View>
    </View>
  )
}