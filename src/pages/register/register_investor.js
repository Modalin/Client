import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {View, Text, TextInput, ScrollView} from 'react-native'
import {Form, Button} from 'native-base'
import Gstyle from '../../style/global_style'
import { registInvestor } from '../../store/actions'
import { storage } from '../../firebase/config'
import * as ImagePicker from 'expo-image-picker'

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
    const [finalUrlKtp, setFinalUrlKtp] = useState('')
    const [finalUrlNpwp, setFinalUrlNpwp] = useState('')
    const [uploaded, setUploaded] = useState('')
    const [selectDocument, setSelectDocument] = useState('')
    const dispatch = useDispatch()

    async function uploadImage(uri, selectedtDocument) {
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

      const ref = storage.ref('/document').child(imageName)
      const snapshot = await ref.put(blob)
      // We're done with the blob, close and release it
      blob.close()

      const url =  await snapshot.ref.getDownloadURL()
      // dispatch(setInvestor({ photo_profile: url }))
      console.log("URL", url)
        if (selectedtDocument === "ktp") {
          setFinalUrlKtp(url)
        }
        if (selectedtDocument === "npwp"){
          setFinalUrlNpwp(url)
        }
    }

    const onRegistSubmit = async (e) => {

        e.preventDefault();
        await uploadImage(urlKtp,"ktp").then(() => {
          uploadImage(urlNpwp, "npwp")
        })  

        if (finalUrlKtp && finalUrlNpwp) {
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
                no_KTP: ktp,
                url: finalUrlKtp
              },
              NPWP: {
                no_NPWP: npwp,
                url: finalUrlNpwp
              }
            }
        }))
          navigation.navigate('login', { request: 'login', role: 'investor'})
        }

        setName('')
        setEmail('')
        setPassword('')
        setBankName('')
        setBankAccount('')
        setBankNumber('')
        setKtp('')
        setNpwp('')
    }

    const _pickImage = async (document) => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
        if (!result.cancelled) {
          setSelectDocument(document.data)
          if (document.data === "ktp") {
            setUrlKtp(result.uri)
          }
          if (document.data === "npwp") {
            setUrlNpwp(result.uri)
          }
          setUploaded(result.uri)
        }
      } catch (E) {
        console.log(E)
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
        value={bankName}
        placeholder= "Nama Bank"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setBankNumber}
        value={bankNumber}
        placeholder= "Nomer Rekening"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setBankAccount}
        value={bankAccount}
        placeholder= "Nama Akun Bank"
        />
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setKtp}
        value={ktp}
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
            value={urlKtp}
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
            onPress={() => _pickImage({ data : "ktp"})}
            >
              <Text style={{fontSize: 10,color: "#ffffff"}}>upload ktp</Text>
            </Button>
        </View>
        <TextInput
        style={Gstyle.login_input}
        onChangeText={setNpwp}
        value={npwp}
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
              value={urlNpwp}
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
            }}
            onPress={() =>_pickImage({ data : "npwp"})}>
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
