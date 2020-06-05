import React,{useState} from 'react'
import {View, Text, ScrollView, TouchableHighlight, StyleSheet, TextInput} from 'react-native'
import {Button, Card, CardItem, Body, Textarea, DatePicker, Image} from 'native-base'
import {style, shadow_ as box_shadow, color_ as color, shadow_} from './mitra_style'
import * as ImagePicker from 'expo-image-picker'
import Gstyle from '../../style/global_style'


export default function Repot({ navigation, route }) {
  const [deskripsi, setDeskripsi] = useState(null)
  const [date, setDate] = useState(null)
  const [income, setIncome] = useState(null)
  const [photo_local, setPhotoLocal] = useState('')

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      console.log("Result", result)
      console.log("Photo Local", photo_local)
      if (!result.cancelled) {
        setPhotoLocal(result.uri)
      }
    } catch (E) {
      console.log(E)
    }

  }

  const _takeImage = async () => {
    try {
      const cameraPermission = await ImagePicker.getCameraPermissionsAsync()
      console.log("Request Camera", cameraPermission)
      // if (!cameraPermission.granted) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
        console.log("Result", result)
        console.log("Photo Local", photo_local)
        if (!result.cancelled) {
          setPhotoLocal(result.uri)
        }
      // }
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

    const ref = storage.ref('/mitra/business').child(imageName)
    const snapshot = await ref.put(blob)
    // We're done with the blob, close and release it
    blob.close()

    const url =  await snapshot.ref.getDownloadURL()
    // dispatch(setInvestor({ photo_profile: url }))
    setImage_360(url)
    console.log("URL", url)
    return url
  }

  return(
    <View style={[style.container_home,style.bar_,{backgroundColor: '#ffffff', padding: 20}]}>
      <ScrollView>
        <Card style={[{}]}>
          <CardItem>
            <Body>
              <View style={[{alignSelf: "center"}]}>
                <Text style={[style.text_bold]}>Buat Laporan</Text>
              </View>
              <View style={[{marginVertical: 40, width: "100%"}]}>
                <View style={[{borderBottomWidth: 1, width: "100%", borderBottomColor: color.grey, marginVertical: 10}]}>
                  <Text style={[{}]}>Deskripsi</Text>
                  <Textarea
                  placeholder="Deskripsi"
                  placeholderTextColor={color.grey}
                  Left
                  style={[{}]}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => setDeskripsi(text)}
                  value={deskripsi}
                  />
                </View>
                <View style={[{borderBottomWidth: 1, width: "100%", borderBottomColor: color.grey, marginVertical: 10}]}>
                  <Text style={[{}]}>Tanggal</Text>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"calendar"}
                    placeHolderText="Select date"
                    textStyle={{ color: color.grey }}
                    placeHolderTextStyle={{ color: color.grey }}
                    onDateChange={setDate}
                    disabled={false}
                    />
                </View>
                <View style={[{borderBottomWidth: 1, width: "100%", borderBottomColor: color.grey, marginVertical: 10}]}>
                  <Text style={[{}]}>Keuntungan Bulan Ini</Text>
                  <TextInput
                    style={[{paddingHorizontal: 10, color: color.grey}]}
                    onChange={(text=> setIncome(text))}
                    keyboardType="numeric"
                    />
                </View>
                <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Foto Perkembangan Usaha</Text>
                    <View style={{alignItems: 'center'}}>
                      {photo_local ?
                      <Image style={{width:200, height: 200}} source={{ uri: `${photo_local}`}}/>
                    : <Text></Text>}
                    </View>
                    <View style={[{alignItems: "center"}]}>
                    <Button onPress={_pickImage} style={[style.btn_green,{borderRadius: 20}]}>
                      <Text style={[style.text_white]}>Upload Bukti</Text>
                    </Button>
                </View>
              </View>

              </View>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  )
}