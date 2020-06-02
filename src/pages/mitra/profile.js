import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Image, View, Text, TouchableHighlight, ScrollView} from 'react-native'
import {Button, Card} from 'native-base'
import {style, color_ as color} from './mitra_style'
import {} from '../../store/actions'

export default function mitraPage({route, navigation}) {
  const [name, setName] = useState(null)
  const [phone, setPhone] = useState(null)
  const [Address, setAddress] = useState(null)

  return (
    <View style={[style.container_home, {}]}>
       <View style={[style.shadow,style.container, {width: "100%", height: "30%", flexDirection: "row", paddingHorizontal: 20, justifyContent: "space-between"}]}>
        <View style={[{flexDirection: "row",  alignItems: "center"}]}>
          <View>
            <Card style={[style.profile_round]}>
              <Image  style={[style.image_round]} source={require('../Investor/tst.jpg')}></Image>
            </Card>
            <TouchableHighlight
                style={[{backgroundColor: color.green, borderRadius: 10, padding: 5,}]}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                >
                <Text style={[{fontSize: 12, color: '#ffffff', textAlign:"center"}]}> Edit </Text>
              </TouchableHighlight>
          </View>
          <View style={[{marginHorizontal: 20}]}>
            <Text>Jhon Doe</Text>
            <Text>Mitra</Text>
          </View>
        </View>
      </View>
      {/* info */}
      <ScrollView>

        <View style={[style.container, {marginTop: 20, paddingHorizontal: 20}]}>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>Email</Text>
            {
              <Text>hello@mail.com</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>Phone</Text>
            {
              <Text>+6293849839483498</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>Address</Text>
            {
              <Text>Jl. Plitur 1 No.2, RT.2, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>No Rekening</Text>
            {
              <Text>883213774</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>KTP</Text>
            {
              <Text>331209038083</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>NPWP</Text>
            {
              <Text>232323245</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>KTA</Text>
            {
              <Text>3432324234</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>SIUP</Text>
            {
              <Text>3434323422</Text>
            }
          </View>
          <View style={[{alignItems: "center"}]}>
            <Text style={[style.text_green,{textAlign: "center"}]}>
              Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu
            </Text>
            <Button style={[style.btn_green,{marginVertical: 10}]}>
              <Text style={[style.text_white]}>Edit</Text>
            </Button>
            <Button style={[style.btn_red,{marginVertical: 10}]}>
              <Text style={[style.text_white]}>Sign Out</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}