import React from 'react'
import {Image, View, Text, ScrollView} from 'react-native'
import {Button} from 'native-base'
import bgImage from '../../../assets/3599938.svg'
import Gstyle from '../../style/global_style.js'
import SvgUri from "expo-svg-uri"

export default function landing_user({navigation}) {

  return (
    <ScrollView>
    <View style={Gstyle.containerFull}>
      <Text style={Gstyle.logo_text_title}>ModalIn</Text>
      <SvgUri
        width="350"
        height="350"
        source={require('../../../assets/3599938.svg')}
      />
      {/* <Image source={bgImage} style={Gstyle.img_banner}/> */}
      <Button style={Gstyle.btn_style} onPress={() => navigation.navigate('identify user register',{request: 'identify_user_register'})}>
        <Text style={Gstyle.btn_text}> Buat Akun Gratis</Text>
      </Button>
      <View style={{marginTop:10}}>
        <Text>Sudah memiliki akun ?<Text> </Text>
          <Text style={Gstyle.text_green} onPress={() => navigation.navigate('identify user',{request: 'login'})}>
          Klik disini untuk masuk
          </Text>
        </Text>
      </View>
    </View>
    </ScrollView>
  )
}