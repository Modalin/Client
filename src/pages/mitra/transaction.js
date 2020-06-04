import React from 'react'
// import { } from 'react'
import {Image, View, Text, ScrollView} from 'react-native'
import {Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'

export default function Transaction({navigation}) {

  return (
    <View style={[style.bar_,{flex: 1, backgroundColor: "#ffffff"}]}>
      <ScrollView style={[{padding: 20}]}>
        {/* Flat List Here */}
        <Card alert={'on progress'} >
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
                      <Text style={[style.text_grey]}>Dana Dibutuhkan</Text>
                      <NumberFormat value={10000000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[]}>{value}</Text>} />
                    </View>
                    <View>
                      <Text style={[style.text_grey]}>Persentase</Text>
                      <Text style={[style.text_green,{alignSelf: "flex-end"}]}>14%</Text>
                    </View>
                  </View>
                  <View style={[{borderBottomWidth: 1, borderBottomColor: color.grey, marginVertical: 10}]}></View>
                  <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
                    <View>
                      <Text style={[style.text_grey]}>Status</Text>
                      <Text>Menunggu Konfirmasi</Text>
                    </View>
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