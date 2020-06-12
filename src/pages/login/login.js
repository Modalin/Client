import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import {Form, Button} from 'native-base';
import Gstyle from '../../style/global_style';
import { useDispatch, useSelector } from 'react-redux';
import { loginInvestor, loginMitra, getInvestorWallet } from '../../store/actions';
import Spinner from 'react-native-loading-spinner-overlay';
// import SyncStorage from 'sync-storage';

export default function login({route, navigation}) {
  const { tokenMitra } = useSelector((state) => state.tokenMitra)
  const { tokenInvestor } = useSelector((state) => state.tokenInvestor)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spinner, setSpinner] = useState(false);
  const {request} = route.params;
  const {role} = route.params;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const { errorLoginInvestor } = useSelector((state) => state.errorLoginInvestor)
  const { errorLoginMitra } = useSelector((state) => state.errorLoginMitra)


  const onLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert(`Mohon isi email dan password ${role}`)
    } else if (!email) {
      alert(`Mohon isi email ${role}`)
    } else if (!password){
      alert(`Mohon isi password ${role}`)
    } else {
      if (role.toLowerCase() === 'investor') {
        await dispatch(loginInvestor({ email, password }))
      } else if (role.toLowerCase() === 'mitra') {
        await dispatch(loginMitra({ email, password }))
      }
    }


    // if (role === 'mitra') {
    //   if(errorLoginMitra){
    //     alert(`Password/email mitra salah`)
    //   } else if (tokenMitra) {
    //     alert('success login')
    //     await navigation.navigate('mitra', { request: 'tab-bottom-mitra'})
    //   }
    // }
    if (errorLoginInvestor) {
      alert('Password/email investor salah')
    } else if (errorLoginMitra) {
      alert('Password/email mitra salah')
    }
      if (tokenInvestor) {
        navigation.navigate('investor', { request: 'tab-bottom-investor', data : tokenInvestor})
        setEmail('');
        setPassword('')
    }
  }


  return (
    <View style={Gstyle.container_full_white}>
      <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      <Text style={[Gstyle.title_bold, { textAlign: "center"}]}>Masuk {role} Modalin</Text>
      <Form style={Gstyle.form_style}>
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
      </Form>
      <TouchableHighlight style={Gstyle.btn_style} onPress={onLoginSubmit}>
        <Text style={[Gstyle.btn_text, {fontSize: 20, textAlign: "center"}]}> Masuk </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  }
});