import React from 'react'
import {Image, View, Text} from 'react-native'
import {Button} from 'native-base'
import bgImage from '../../../assets/3599938.svg'
import Gstyle from '../../style/global_style.js'
import SvgUri from "expo-svg-uri"

export default function landing_user({navigation}) {

  return (
    <View style={Gstyle.containerFull}>
      <Text style={Gstyle.logo_text_title}>ModalIn</Text>
      {/* <SvgUri
        width="350"
        height="350"
        source={require('../../../assets/3599938.svg')}
      /> */}
      {/* <Image source={bgImage} style={Gstyle.img_banner}/> */}
      <View style={{marginTop:10}}>
        <Text>
          Membantu Mitra Mendapatkan Modal
        </Text>
      </View>
    </View>
  )
}