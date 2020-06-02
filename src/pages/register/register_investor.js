import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {View, Text, TextInput, ScrollView} from 'react-native'
import {Form, Button} from 'native-base'
import Gstyle from '../../style/global_style'
import { registInvestor } from '../../store/actions'
import { storage } from '../../firebase/config'

export default function registerInvestor({route, navigation}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bankName, setBankName] = useState('')
    const [bankNumber, setBankNumber] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    const [ktp, setKtp] = useState('')
    const [urlKtp, setUrlKtp] = useState('')
    const [npwp, setNpwp] = useState('')
    const [urlNpwp, setUrlNpwp] = useState('')

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

    const _pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
        if (!result.cancelled) {
          setUrlKtp(result.uri)
          uploadImage(result.uri)
        }
      } catch (E) {
        console.log(E)
      }
  
      async function uploadImage(uri) {
        // Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
        console.disableYellowBox = true
        //Get image name
        let imageName = uri.split('/')
        imageName = imageName[imageName.length - 1]
  
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest()
          xhr.onload = function() {
            resolve(xhr.response)
          }
          xhr.onerror = function(e) {
            console.log(e)
            reject(new TypeError('Network request failed'))
          }
          xhr.responseType = 'blob'
          xhr.open('GET', uri, true)
          xhr.send(null)
        })
  
        const ref = storage.ref('/investor').child(imageName)
        const snapshot = await ref.put(blob)
        // We're done with the blob, close and release it
        blob.close()
  
        const url =  await snapshot.ref.getDownloadURL()
        dispatch(setInvestor({ photo_profile: url }))
        console.log("URL", url)
      }
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
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "90%"}}>
            <TextInput
              style={{
              width: "67.5%",
              borderColor: "#AEAEAE",
              borderWidth: 1,
              borderRadius: 10,
              marginRight: 5,
              padding: 10,
              marginTop: 20
            }}
            onChangeText={setKtp}
            value={email}
            placeholder= "Upload Ktp"
            />
            <Button style={{
              width: "30%",
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
              backgroundColor: "#00B965",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={ () => _pickImage}>
              <Text style={{fontSize: 10,color: "#ffffff"}}>upload ktp</Text>
            </Button>
        </View>
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setNpwp}
        value={email}
        placeholder= "Nomer NPWP"
        />
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "90%"}}>
          <TextInput
                style={{
                width: "67.5%",
                borderColor: "#AEAEAE",
                borderWidth: 1,
                borderRadius: 10,
                marginRight: 5,
                padding: 10,
                marginTop: 20
              }}
              onChangeText={setKtp}
              value={email}
              placeholder= "Upload NPWP"
              />
            <Button style={{
              width: "30%",
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
              backgroundColor: "#00B965",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Text style={{fontSize: 10,color: "#ffffff"}}>upload npwp</Text>
            </Button>
        </View>
      </Form>
      <Button style={Gstyle.btn_style} onPress={onRegistSubmit}>
        <Text style={[Gstyle.btn_text, {fontSize: 18}]}> Daftar </Text>
      </Button>
    </View>
    </ScrollView>
  )
}
