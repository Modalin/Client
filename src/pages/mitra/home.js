import React from 'react'
import {Image, View, Text} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style} from './mitra_style'

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
      <View style={[{marginVertical: 10, marginHorizontal: 20}]}>
        <Card style={[{borderRadius: 10, padding: 10, flexDirection:"row"}]}>
          <View>
            <Image style={style.image_round} source={{ uri: `https://media-cdn.tripadvisor.com/media/photo-s/11/67/bb/9b/rinjani-mountain-panorama.jpg`}}/>
          </View>
          <View>
            <Text style={[]}>Bengkel A&S</Text>
          </View>
        </Card>
      </View>
    </View>
  )
}