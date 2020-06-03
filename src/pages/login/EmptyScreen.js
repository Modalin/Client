import React from 'react'
import {Image, View, Text, ScrollView} from 'react-native'
import {Button} from 'native-base'
import bgImage from '../../../assets/3599938.svg'
import Gstyle from '../../style/global_style.js'
import SvgUri from "expo-svg-uri"

export default function landing_user({navigation}) {

  return (
    <ScrollView style={[{flex: 1, backgroundColor: "#ffffff"}]}>
      <View style={Gstyle.containerFull}>
        <SvgUri
          width="350"
          height="350"
          source={require('../../../assets/Logo.svg')}
        />
        <Text style={Gstyle.logo_text_title}>ModalIn</Text>
        {/* <Image source={bgImage} style={Gstyle.img_banner}/> */}
      </View>
    </ScrollView>
  )
}