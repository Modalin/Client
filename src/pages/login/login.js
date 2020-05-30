import React from 'react'
import {View, Text, TextInput} from 'react-native'
import {Form, Button} from 'native-base'
import Gstyle from '../../style/global_style'

export default function login() {
  return (
    <View style={Gstyle.container_full_white}>
      <Text style={Gstyle.title_bold}>Masuk Investor Modalin</Text>
      <Form style={Gstyle.form_style}>
        <TextInput
        style={Gstyle.login_input}
        placeholder= "Email"
        />
        <TextInput
        style={Gstyle.login_input}
        placeholder= "Password"
        />
      </Form>
      <Button style={Gstyle.btn_style} onPress={() => alert('under cunstruct')}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Masuk </Text>
      </Button>
    </View>
  )
}