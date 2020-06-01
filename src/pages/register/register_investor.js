import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Form, Button} from 'native-base';
import Gstyle from '../../style/global_style';
import { registInvestor } from '../../store/actions'

export default function registerInvestor({route, navigation}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onRegistSubmit = (e) => {
        e.preventDefault();
        dispatch(registInvestor({ 
            name: name, 
            email : email, 
            password: password
        }))
        navigation.navigate('login', { request: 'login', role: 'investor'})
        setName('')
        setEmail('')
        setPassword('')
    }
  
  return (
    <View style={Gstyle.container_full_white}>
      <Text style={Gstyle.title_bold}>Daftar Investor Modalin</Text>
      <Form style={Gstyle.form_style}>
      <TextInput
        style={Gstyle.login_input}
        onChangeText={setName}
        value={name}
        placeholder= "Input Your Name"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setEmail}
        value={email}
        placeholder= "Input Your Email"
        />
        <TextInput
        style={Gstyle.login_input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder= "Input Your Password"
        />
      </Form>
      <Button style={Gstyle.btn_style} onPress={onRegistSubmit}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Register </Text>
      </Button>
    </View>
  )
}
