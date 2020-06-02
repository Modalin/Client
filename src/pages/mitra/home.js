import React from 'react'
import {Image, View, Text} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'

export default function mitraPage({navigation}) {

  return (
    <View style={[{alignItems: "center", flex: 1, backgroundColor: "#ffffff"}]}>
      <View style={[style.shadow,style.container, {width: "100%", height: "30%", justifyContent: "center"}]}>
        <Card style={[style.profile_round]}>
          <Image  style={[style.image_round]} source={require('../Investor/tst.jpg')}></Image>
        </Card>
        <Button style={[style.btn_green,{maxWidth: "30%", marginVertical: 10}]}>
          <Text style={[style.text_white]}>Tambah Usaha</Text>
        </Button>
      </View>
      <View>
        <Card style={[{borderRadius: 10, padding: 10, flexDirection:"row"}]}>
          <View>
            <Image style={style.image_round} source={{ uri: `https://media-cdn.tripadvisor.com/media/photo-s/11/67/bb/9b/rinjani-mountain-panorama.jpg`}}/>
          </View>
          <View>
            <Text style={[]}>Bengkel A&S</Text>
            <View style={[{flexDirection: "row", width: "100%"}]}>
              <View style={[{alignSelf:"flex-start"}]}>
                <Text style={[style.text_grey]}>Dana Terkumpul</Text>
                <Text>Rp 10,000,000</Text>
              </View>
              <View style={[{alignSelf:"flex-end"}]}>
                <Text style={[style.text_grey]}>Total Investor</Text>
                <Text>4</Text>
              </View>
            </View>
            <View style={[{borderBottomWidth: 1, borderBottomColor: color.grey}]}></View>
            <View>
              <Button></Button>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}