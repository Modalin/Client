import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import {} from 'native-base'
import {style, color_ as color} from './mitra_style'

export default function Detail(params) {
  return(
    <View style={[style.container_home, style.bar_,{}]}>
      <ImageBackground style={{width: "100%",height: 150}} source={{ uri : `https://media-cdn.tripadvisor.com/media/photo-s/11/67/bb/9b/rinjani-mountain-panorama.jpg`}}>
          <View style={[{height: 150, backgroundColor: "#000000", opacity: 0.75,justifyContent: "flex-end"}]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between", padding: 10}]}>
              <Text style={[style.text_white]}>Ayam Geprek</Text>
              <Text style={[style.text_white]}>3 Unit Left</Text>
            </View>
          </View>
      </ImageBackground>
    </View>
  )
}