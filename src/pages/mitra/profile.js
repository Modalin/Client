import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Image, View, Text, TouchableHighlight, ScrollView, TextInput} from 'react-native'
import {Button, Card} from 'native-base'
import {style, color_ as color} from './mitra_style'
import {} from '../../store/actions'
//Photo
import * as ImagePicker from 'expo-image-picker'
import { storage } from '../../firebase/config'

export default function mitraPage({route, navigation}) {
  // const { dataMitra } = useSelector(state => state.dataMitra)
  // const { tokenMitra } = useSelector(state => state.tokenMitra)
  const [newName, setNewName] = useState(null)
  const [newPhone, setNewPhone] = useState(null)
  const [newAddress, setNewAddress] = useState(null)
  const [newPhoto, setNewPhoto] = useState(null)
  const [newRekening, setNewRekening] = useState(null)
  const [editStatus, setEditStatus] = useState(false)

  useEffect(() => {

    if (tokenMitra) {
      console.log(tokenMitra);

    }

  }, [dispatch, tokenInvestor])

  const onHandleEdit = (e) => {
    e.preventDefault()
    setEditStatus(true)
  }

  const _pickImage = async () => {
    try {
      console.log('foto');

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        setNewPhoto(result.uri)
      }
    } catch (E) {
      console.log(E)
    }

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
    dispatch(setInvestor({ photo_profile: url }))
  }

  return (
    <View style={[style.container_home, {}]}>
       <View style={[style.shadow,style.container, {width: "100%", height: "30%", flexDirection: "row", paddingHorizontal: 20, justifyContent: "space-between"}]}>
        <View style={[{flexDirection: "row",  alignItems: "center"}]}>
          <View>
            <Card style={[style.profile_round]}>
              <Image  style={[style.image_round]} source={require('../Investor/tst.jpg')}></Image>
            </Card>
            {
              editStatus ?
              <TouchableHighlight
                onPress={_pickImage}
                style={[{backgroundColor: color.green, borderRadius: 10, padding: 5,}]}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                >
                <Text style={[{fontSize: 12, color: '#ffffff', textAlign:"center"}]}> Edit </Text>
              </TouchableHighlight>
              :
              <View></View>
            }
          </View>
          <View style={[{marginHorizontal: 20}]}>
            {
              editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setNewName(text)} value={newName ? newName : 'Test Name'}/> :
              <Text>Jhon Doe</Text>
            }
            <Text>Mitra</Text>
          </View>
        </View>
      </View>
      {/* info */}
      <ScrollView>

        <View style={[style.container, {marginTop: 20, paddingHorizontal: 20}]}>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>Email</Text>
            {
              <Text>hello@mail.com</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>Phone</Text>
            {
              editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => newPhone(text)} value={newPhone ? newPhone : 'Test Phone'}/> :
              <Text>+6293849839483498</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>Address</Text>
            {
              editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setNewAddress(text)} value={newAddress ? newAddress : 'Test Address'}/> :
              <Text>Jl. Plitur 1 No.2, RT.2, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>No Rekening</Text>
            {
              editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setNewRekening(text)} value={newRekening ? newRekening : 'Test Address'}/> :
              <Text>883213774</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>KTP</Text>
            {
              <Text>331209038083</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>NPWP</Text>
            {
              <Text>232323245</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>KTA</Text>
            {
              <Text>3432324234</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[style.text_grey]}>SIUP</Text>
            {
              <Text>3434323422</Text>
            }
          </View>
          <View style={[{alignItems: "center"}]}>
            <Text style={[style.text_green,{textAlign: "center"}]}>
              Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu
            </Text>
            {
              editStatus ?
              <Button style={[investor_style.btn_green]} onPress={onSubmitEdit}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Save </Text>
              </Button> :
              <Button style={[investor_style.btn_green]} onPress={onHandleEdit}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
              </Button>
            }
            <Button style={[style.btn_green,{marginVertical: 10}]} onPress={onHandleEdit}>
              <Text style={[style.text_white]}>Edit</Text>
            </Button>
            <Button style={[style.btn_red,{marginVertical: 10}]}>
              <Text style={[style.text_white]}>Sign Out</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}