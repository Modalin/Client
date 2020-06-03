import React from 'react'
import { useSelector } from 'react-redux'
import {Image, View, Text, TouchableHighlight, ScrollView, Alert, AsyncStorage} from 'react-native'
import {Button, Card} from 'native-base'
import {style, color_ as color} from './mitra_style'
import Splash from '../login/splahScreen'

export default function mitraPage({navigation}) {
  const { tokenMitra } = useSelector((state) => state.tokenMitra)
  const { data } = tokenMitra;

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('role')
    Alert.alert(
      "Modalin",
      "Anda yakin akan keluar?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('landing user', { request : 'landing_user' }) }
      ],
      { cancelable: false },
    )
  }

  if (!tokenMitra) {
    return (
      <Splash></Splash>
    )
  } else {

    console.log('tokenmitra masuk');
    console.log(tokenMitra);
    return (
      <View style={[style.container_home, {}]}> 
         <View style={[style.shadow,style.container, {width: "100%", height: "30%", flexDirection: "row", paddingHorizontal: 20, justifyContent: "space-between"}]}>
          <View style={[{flexDirection: "row",  alignItems: "center"}]}>
            <View>
              <Card style={[style.profile_round]}>
                <Image  style={[style.image_round]} source={{ uri: `${data.photo_profile}`}}></Image>
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
              <Text>{data.name}</Text>
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
                <Text>{data.email}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>Phone</Text>
              {
                <Text>{data.phone}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>Address</Text>
              {
                <Text>{data.address}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>No Rekening</Text>
              {
                <Text>883213774</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>Total Karyawan</Text>
              {
                <Text>{data.document.KTA.total_employee}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>KTP</Text>
              {
                <Text>{data.document.KTP.no_KTP}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>NPWP</Text>
              {
                <Text>232323245</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[style.text_grey]}>SIUP</Text>
              {
                <Text>{data.document.SIUP.no_SIUP}</Text>
              }
            </View>
            <View style={[{alignItems: "center"}]}>
              <Text style={[style.text_green,{textAlign: "center"}]}>
                Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu
              </Text>
              <Button style={[style.btn_green,{marginVertical: 10}]}>
                <Text style={[style.text_white]}>Edit</Text>
              </Button>
              <Button style={[style.btn_red,{marginVertical: 10}]} onPress={handleLogout}>
                <Text style={[style.text_white]}>Sign Out</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}