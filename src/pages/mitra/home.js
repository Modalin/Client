import React from 'react'
import {Image, View, Text, ScrollView} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'

export default function mitraPage({navigation}) {

  return (
    <View style={[{flex: 1, backgroundColor: "#ffffff"}]}>
      <View style={[style.shadow,style.container, {width: "100%", height: "30%", justifyContent: "center"}]}>
        <Card style={[style.profile_round]}>
          <Image  style={[style.image_round]} source={require('../Investor/tst.jpg')}></Image>
        </Card>
        <Button style={[style.btn_green,{maxWidth: "30%", marginVertical: 10}]}>
          <Text style={[style.text_white]}>Tambah Usaha</Text>
        </Button>
      </View>
      <ScrollView style={[{padding: 20}]}>
        {/* Flat List Here */}
        <Card onTouchEnd={() => navigation.navigate('detail business mitra')}>
          <CardItem>
            <Body>
              <View style={[style.card,{justifyContent: "space-between",width: "100%", alignContent: "center"}]}>
                <View style={[{}]}>
                  <Image style={style.image_round} source={{ uri: `https://media-cdn.tripadvisor.com/media/photo-s/11/67/bb/9b/rinjani-mountain-panorama.jpg`}}/>
                </View>
                <View style={[{width: "75%"}]}>
                  <Text style={[]}>Bengkel A&S</Text>
                  <View style={[{flexDirection: "row", justifyContent: "space-between", marginVertical: 5}]}>
                    <View style={[{}]}>
                      <Text style={[style.text_grey]}>Dana Terkumpul</Text>
                      <NumberFormat value={10000000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green]}>{value}</Text>} />
                    </View>
                    <View>
                      <Text style={[style.text_grey]}>Total Investor</Text>
                      <Text style={[{alignSelf: "flex-end"}]}>4</Text>
                    </View>
                  </View>
                  <View style={[{borderBottomWidth: 1, borderBottomColor: color.grey, marginVertical: 10}]}></View>
                  <View style={[[style.text_grey,{}]]}>
                    <Button style={[style.btn_green,{width:"auto" ,alignSelf: "flex-end", padding: 5}]}>
                      <Text style={[style.text_white,{textAlign: "center", fontSize: 12}]}>Ambil Dana</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  )
}