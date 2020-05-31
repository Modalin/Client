import React from 'react'
import {View, Text} from 'react-native'
import {Form, Item, Input, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'

export default function Edit(params) {
  return (
    // name, photo_profile, phone, address, account_number, job
    <View style={[investor_style.container,investor_style.bar_, {flex: 1,justifyContent: "center"}]}>
      <Text style={[{textAlign: "center", fontWeight: "bold", fontSize: 24, marginBottom: 20}]}>Edit Profile</Text>
      <Form>
        <Item style={[investor_style.m_b_20]}>
          <Input placeholder="Nama Lengkap" />
        </Item>
        <Item style={[investor_style.m_b_20]}>
          <Input placeholder="Address" />
        </Item>
        <Item style={[investor_style.m_b_20]}>
          <Input placeholder="No Rekening" />
        </Item>
        <Item style={[investor_style.m_b_20]} last>
          <Input placeholder="No Telepon" />
        </Item>
      </Form>
      <View style={{alignItems:"center", alignContent: "flex-end"}}>
        <Button style={[investor_style.btn_green]} onPress={() => alert('hi')}>
          <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
        </Button>
      </View>
    </View>
  )
}