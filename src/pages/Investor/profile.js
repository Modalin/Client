import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {Card, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import Gstyle from '../../style/global_style'

export default function Profile({navigation}) {
  return (
    <View style={[investor_style.container_home]}>
      <ScrollView>

        <View style={[investor_style.container,investor_style.bar_,{flexDirection: "row", paddingBottom: 20}]}>
          <Card style={[investor_style.profile_round]}>
            <View></View>
          </Card>
          <View style={[{justifyContent: "center", marginHorizontal: 20}]}>
            <Text>Jhon Doe</Text>
            <Text>Investor</Text>
          </View>
        </View>
        {/* info */}
        <View style={[investor_style.container, {marginTop: 20}]}>
          {/* email */}
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Email</Text>
            <Text>Jhon@mail.com</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Phone</Text>
            <Text>+62898298398293</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Address</Text>
            <Text>Jl. Plitur 1 No.2, RT.2, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>No Rekening</Text>
            <Text>092898298398293</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Pekerjaan</Text>
            <Text>Petani</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>KTP</Text>
            <Text>33102908984</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>NPWP</Text>
            <Text>33102923343508984</Text>
          </View>
          {/* footer */}
          <View style={{marginBottom: 20, }}>
            <Text style={[investor_style.text_green, {textAlign: "center", paddingVertical: 10}]}>Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu</Text>
            <View style={{alignItems:"center"}}>
              <Button style={[investor_style.btn_green]} onPress={() => navigation.navigate('edit profile',{})}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}