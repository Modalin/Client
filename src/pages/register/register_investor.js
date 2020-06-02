import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {View, Text, TextInput, ScrollView} from 'react-native';
import {Form, Button} from 'native-base';
import Gstyle from '../../style/global_style';
import { registInvestor } from '../../store/actions'

export default function registerInvestor({route, navigation}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bankName, setBankName] = useState('')
    const [bankNumber, setBankNumber] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    const [ktp, setKtp] = useState('')
    const [npwp, setNpwp] = useState('')

    const dispatch = useDispatch()

    const onRegistSubmit = (e) => {
        e.preventDefault();
        dispatch(registInvestor({ 
            name: name, 
            email : email, 
            password: password,
            wallet: {
              account_name: bankAccount,
              bank_name: bankName,
              account_number: bankNumber
            },
            document: {
              KTP: {
                no_KTP: ktp
              },
              NPWP: {
                no_NPWP: npwp
              }
            }
        }))
        navigation.navigate('login', { request: 'login', role: 'investor'})
        setName('')
        setEmail('')
        setPassword('')
        setBankName('')
        setBankAccount('')
        setBankNumber('')
        setKtp('')
        setNpwp('')
    }
  
  return (
    <ScrollView>
    <View style={[Gstyle.container_full_white], { 
      paddingVertical: 20, 
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#ffffff"}}>
      <Text style={Gstyle.title_bold}>Daftar Investor Modalin</Text>
      <Form style={Gstyle.form_style}>
      <TextInput
        style={Gstyle.login_input}
        onChangeText={setName}
        value={name}
        placeholder= "Nama Investor"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setEmail}
        value={email}
        placeholder= "Email"
        />
        <TextInput
        style={Gstyle.login_input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder= "Password"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setBankName}
        value={email}
        placeholder= "Nama Bank"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setBankNumber}
        value={email}
        placeholder= "Nomer Rekening"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setBankAccount}
        value={email}
        placeholder= "Nama Akun Bank"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setKtp}
        value={email}
        placeholder= "Nomer KTP"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setNpwp}
        value={email}
        placeholder= "Nomer NPWP"
        />
      </Form>
      <Button style={Gstyle.btn_style} onPress={onRegistSubmit}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Daftar </Text>
      </Button>
    </View>
    </ScrollView>
  )
}
