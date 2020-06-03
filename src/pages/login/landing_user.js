import React from 'react'
import Headers from '../../components/headers';
import {Image, View, Text, ScrollView, TouchableHighlight} from 'react-native'
import {Button} from 'native-base'
import bgImage from '../../../assets/3599938.svg'
import Gstyle from '../../style/global_style.js'
import SvgUri from "expo-svg-uri"
export default function landing_user({navigation}) {

  return (
    <ScrollView style={[{flex: 1, backgroundColor: "#ffffff"}]}>
    <View style={Gstyle.containerFull}>
      <Text style={Gstyle.logo_text_title}>ModaLin</Text>
      <SvgUri
        width="350"
        height="350"
        source={require('../../../assets/3599938.svg')}
      />
      <TouchableHighlight style={Gstyle.btn_style} onPress={() => navigation.navigate('identify user register',{request: 'identify_user_register'})}>
        <Text style={[Gstyle.btn_text, { fontSize: 20, textAlign: "center"}]}> Buat Akun Gratis</Text>
      </TouchableHighlight>
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