import React from 'react'
// import { } from 'react'
import {Image, View, Text, ScrollView} from 'react-native'
import {Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'

export default function Transaction({navigation, route}) {
  const { data } = route.params;
  console.log(data);

  return (
    <View style={[style.bar_,{flex: 1, backgroundColor: "#ffffff"}]}>
      <ScrollView style={[{padding: 20}]}>
        {/* Flat List Here */}
        <Card alert={'on progress'} >
          <CardItem>
            <Body>
              <View style={[style.card,{justifyContent: "space-between",width: "100%", alignContent: "center"}]}>
                <View style={[{width: "100%"}]}>
                  <Text style={[{ fontWeight: 'bold', fontSize: 20}]}>{data.business_name}</Text>
                  <View style={[{flexDirection: "row", justifyContent: "space-between", marginVertical: 5}]}>
                    <View style={[{}]}>
                      <Text style={[style.text_grey]}>Dana Dibutuhkan</Text>
                      <NumberFormat value={data.business_value} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[]}>{value}</Text>} />
                    </View>
                    <View>
                      <Text style={[style.text_grey]}>Persentase</Text>
                      <Text style={[style.text_green,{alignSelf: "flex-end"}]}>{data.persentase}%</Text>
                    </View>
                  </View>
                  <View style={[{borderBottomWidth: 1, borderBottomColor: color.grey, marginVertical: 10}]}></View>
                  <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
                    <View>
                      <Text style={[style.text_grey]}>Status</Text>
                      <Text style={{ color: '#f0a500'}}>Menunggu Konfirmasi</Text>
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