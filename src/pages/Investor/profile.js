import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View, Text, ScrollView, TextInput, TouchableHighlight, ActivityIndicator, SafeAreaView, Image} from 'react-native'
import {Card, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import {editInvestorProfile, getInvestor, setInvestor} from '../../store/actions'
//Photo
import * as ImagePicker from 'expo-image-picker'
import { storage } from '../../firebase/config'

export default function Profile({ navigation }) {
  const { dataInvestor } = useSelector(state => state.dataInvestor)
  const { tokenInvestor } = useSelector(state => state.tokenInvestor)
  const [editStatus, setEditStatus] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [account, setAccount] = useState("")
  const [job, setJob] = useState("")
  const [photo_profile, setPhoto] = useState("")

  const dispatch = useDispatch()


  const onHandleEdit = (e) => {
    e.preventDefault()
    setEditStatus(true)
  }

  console.log(name);
  console.log(job);
  const onSubmitEdit = (e) => {
    e.preventDefault()
    if (tokenInvestor) {

      if (dataInvestor) {

        const dataProfil = {
          name: name ? name : dataInvestor.name,
          phone: phone ? phone : dataInvestor.phone,
          address: address ? address : dataInvestor.address,
          job: job ? job : dataInvestor.job,
          photo_profile,
          wallet : {
            account_number : account ? account : dataInvestor.wallet.account_number
          }
        }
        dispatch(editInvestorProfile( { data : dataProfil, token :tokenInvestor.token }))
      }

    }
    
    alert('successfully edit' )
    setEditStatus(false)
  }

  useEffect(() => {

    if (tokenInvestor) {
      console.log(tokenInvestor);
      dispatch( getInvestor({ token: tokenInvestor.token}))
    }

  }, [dispatch, tokenInvestor])

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        setPhoto(result.uri)
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
      // dispatch(setInvestor({ photo_profile: url }))
      setPhoto(url)
      console.log("URL", url)
    }
  }

  if (dataInvestor.wallet) {
      
    console.log('ini data investor', dataInvestor);
    return (
      <View style={[investor_style.container_home]}>
        <ScrollView>
          <View style={[investor_style.container,investor_style.bar_,{flexDirection: "row", paddingBottom: 20}]}>
            <View style={{ justifyContent: "center", marginHorizontal: 10}}>
              <Card style={[investor_style.profile_round]}>
                <View>
                  <Image style={investor_style.image_round} source={{ uri: `${tokenInvestor ? tokenInvestor.photo_profile : ''}`}}/>
                </View>
              </Card>
              <TouchableHighlight
                style={[investor_style.btn_image_profile]}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={_pickImage}>
                <Text style={[{fontSize: 12, color: '#ffffff'}]}> Edit </Text>
              </TouchableHighlight>
            </View>
            <View style={[{justifyContent: "center", marginHorizontal: 20}]}>
              {
                editStatus ? <TextInput  style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", paddingVertical: 5}} onChangeText={(text) => setName(text)} value={name ? name : dataInvestor.name}/> :
                <Text>{dataInvestor.name}</Text>
              }
              <Text>Investor</Text>
            </View>
          </View>
          {/* info */}
          <View style={[investor_style.container, {marginTop: 20}]}>
            {/* email */}
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Email</Text>
              {
                <Text>{dataInvestor.email}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Phone</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setPhone(text)} value={phone ? phone : dataInvestor.phone}/> :
                <Text>{dataInvestor.phone}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Address</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setAddress(text)} value={address ? address : dataInvestor.address}/> :
                <Text>{dataInvestor.address}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>No Rekening</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setAccount(text)} value={account ? account : dataInvestor.wallet.account_number}/> :
                <Text>{dataInvestor.wallet.account_number ? dataInvestor.wallet.account_number : ""}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Pekerjaan</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={ (text) => setJob(text)} value={job ? job : dataInvestor.job}/> :
                <Text>{dataInvestor.job}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>KTP</Text>
              {
                <Text>{dataInvestor.document.KTP.no_KTP ? dataInvestor.document.KTP.no_KTP : ""}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>NPWP</Text>
              {
                <Text>{dataInvestor.document.NPWP.no_NPWP ? dataInvestor.document.NPWP.no_NPWP : ""}</Text>
              }
            </View>
            {/* footer */}
            <View style={{marginBottom: 20, }}>
              <Text style={[investor_style.text_green, {textAlign: "center", paddingVertical: 10}]}>Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu</Text>
              <View style={{alignItems:"center"}}>
                {
                  editStatus ? 
                <Button style={[investor_style.btn_green]} onPress={onSubmitEdit}>
                  <Text style={[{fontSize: 14, color: '#ffffff'}]}> Save </Text>
                </Button> :
                <Button style={[investor_style.btn_green]} onPress={onHandleEdit}>
                  <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
                </Button>
                }
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View>
          <Text>Loading ...</Text>
      </View>
    )
  }
}