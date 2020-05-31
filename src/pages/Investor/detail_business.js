import React from 'react'
import {View, Text, ImageBackground, ScrollView, Image, } from 'react-native'
import {Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow, color_ as color} from './investor_style'

export default function Edit(params) {
  return (
    <View style={[investor_style.bar_]}>
      <ImageBackground style={{width: "100%",height: 150}} source={require('./tst.jpg')}>
        <View style={[{height: 150, backgroundColor: "#000000", opacity: 0.75,justifyContent: "flex-end"}]}>
          <View style={[{flexDirection: "row", justifyContent: "space-between", padding: 10}]}>
            <Text style={[investor_style.text_white]}>Bengkel Mobil A&S</Text>
            <Text style={[investor_style.text_white]}>4 Unit Left</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={[]}>
        <View style={[{marginHorizontal: 20, top: 20}, investor_style.m_bar_btm_]}>
          <View style={[investor_style.card_detail]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
              <View>
                <Text style={[investor_style.text_grey]}>Minimal Invest</Text>
                <Text style={[investor_style.text_bold]}>Rp 1,000,000/unit</Text>
              </View>
              <View style={[{}]}>
                <View style={[{alignItems:"flex-end"}]}>
                  <Text style={[investor_style.text_grey]}>Persentase</Text>
                  <Text style={[investor_style.text_green]}>15% / year</Text>
                </View>
                <View style={[{alignItems:"flex-end"}]}>
                  <Text style={[investor_style.text_grey]}>Persentase</Text>
                  <Text style={[investor_style.text_green]}>Rp. 337,500</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[investor_style.card_detail]}>
            <View style={[{marginVertical: 10},investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Status</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>Sedang Berjalan</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey}]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Hello</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Location</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>Jl. Plitur 1 No.2, RT.2, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Image
                style={[{width: "100%"}]}
                source={require('../../../assets/map_.jpg')}
              />
            </View>
            <View style={{alignItems:"center"}}>
              <Button style={[investor_style.btn_green]} onPress={() => alert('hi')}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Modalain </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}