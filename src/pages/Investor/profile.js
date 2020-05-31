import React from 'react'
import { useSelector } from 'react-redux'
import {View, Text, ScrollView} from 'react-native'
import {Card, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import Gstyle from '../../style/global_style'

export default function Profile(params) {
  const { tokenInvestor } = useSelector(state => state.tokenInvestor)
  
  return (
    <View style={[investor_style.container_home]}>
      <ScrollView>

        <View style={[investor_style.container,investor_style.bar_,{flexDirection: "row", paddingBottom: 20}]}>
          <Card style={[investor_style.profile_round]}>
            <View></View>
          </Card>
          <View style={[{justifyContent: "center", marginHorizontal: 20}]}>
            <Text>{tokenInvestor.name}</Text>
            <Text>Investor</Text>
          </View>
        </View>
        {/* info */}
        <View style={[investor_style.container, {marginTop: 20}]}>
          {/* email */}
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Email</Text>
            <Text>{tokenInvestor.email}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Phone</Text>
            <Text>{tokenInvestor.phone}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Address</Text>
            <Text>{tokenInvestor.address}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>No Rekening</Text>
            <Text>{tokenInvestor.wallet.account_number}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Pekerjaan</Text>
            <Text>{tokenInvestor.job}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>KTP</Text>
            <Text>{tokenInvestor.document.KTP.no_KTP}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>NPWP</Text>
            <Text>{tokenInvestor.document.NPWP.no_NPWP}</Text>
          </View>
          {/* footer */}
          <View style={{marginBottom: 20, }}>
            <Text style={[investor_style.text_green, {textAlign: "center", paddingVertical: 10}]}>Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu</Text>
            <View style={{alignItems:"center"}}>
              <Button style={[investor_style.btn_green]} onPress={() => alert('hi')}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}