
import React from 'react'
import {View, Text, ImageBackground, TouchableHighlight} from 'react-native'
import {Button} from 'native-base'
import Gstyle from '../../style/global_style'

export default function identify_user({route, navigation}) {
  const {request} = route.params
  if(request === "login"){
    return(
        <View style={Gstyle.container_full_white}>
          <Text style={[Gstyle.title_bold, {fontSize: 35}]}>Siapakah Anda ?</Text>
          <TouchableHighlight style={Gstyle.btn_style} onPress={() => navigation.navigate('login',{request: request, role: "Investor"})}>
            <Text style={[Gstyle.btn_text, {fontSize: 20, textAlign: "center"}]}> Investor </Text>
          </TouchableHighlight>
          <TouchableHighlight style={[Gstyle.btn_style_border_green]} onPress={() => navigation.navigate('login',{request: request, role: "Mitra"})}>
            <Text style={[Gstyle.text_green, {fontSize: 20, textAlign: "center"}]}> Mitra </Text>
          </TouchableHighlight>
         </View>
    )
  }else{
    return(
      <View>
        <Text>Buat Akun Dalam masa pengerjaan</Text>
      </View>
    )
  }
}