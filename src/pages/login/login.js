import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Form, Button} from 'native-base';
import Gstyle from '../../style/global_style';
import { useDispatch, useSelector } from 'react-redux';
import { loginInvestor, loginMitra, getInvestorWallet } from '../../store/actions';
import Spinner from 'react-native-loading-spinner-overlay';
// import SyncStorage from 'sync-storage';

export default function login({route, navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spinner, setSpinner] = useState(false);
  const {request} = route.params;
  const {role} = route.params;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const onLoginSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert(`Mohon isi email dan password ${role}`)
    } else if (!email) {
      alert(`Mohon isi email ${role}`)
    } else if (!password){
      alert(`Mohon isi password ${role}`)
    } else {

      if (role.toLowerCase() === 'investor') {
        dispatch(loginInvestor({ email, password }))
        navigation.navigate('investor', { request: 'tab-bottom-investor'})
      } else if (role.toLowerCase() === 'mitra') {
        dispatch(loginMitra({ email, password }))
        navigation.navigate('mitra dashboard',{ request: 'mitraPage' })
      }
    }

    setEmail('');
    setPassword('')
  }

  return (
    <View style={Gstyle.container_full_white}>
      <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      <Text style={Gstyle.title_bold}>Masuk {role} Modalin</Text>
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
      <Button style={Gstyle.btn_style} onPress={onLoginSubmit}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Masuk </Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  }
});