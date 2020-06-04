import React, { useState, useEffect } from 'react'
import {Picker, View, Text, TextInput, ScrollView, Image, ActivityIndicator} from 'react-native'
import {Form, Button} from 'native-base'
import {style, shadow_ as box_shadow, color_ as color, shadow_} from './mitra_style'
import Gstyle from '../../style/global_style'
import { postMitraBusiness, setLoading } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
//Photo
import * as ImagePicker from 'expo-image-picker'
import { storage } from '../../firebase/config'

export default function mitraPage({navigation, route}) {
  const { tokenMitra } = useSelector((state) => state.tokenMitra)
  //Business
  const [business_name, setBusinessName] = useState('')
  const [business_type, setBusinessType] = useState('1')
  const [business_unit, setBusinessUnit] = useState('1')
  const [value_per_unit, setValuePerUnit] = useState('1')
  const [persentase, setPersentase] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState({address: '', lat: '', long: ''})
  const [business_value, setFund] = useState('')
  const [images_360, setImage_360] = useState('')
  const [profit_times, setProfit_times] = useState('')
  const [periode, setPeriode] = useState('')
  const { loading } = useSelector(state => state.loading)
  const dispatch = useDispatch();
  const [value, setValue] = useState(0)

  //Photo
  const [photo_local, setPhotoLocal] = useState('')

  //Maps
  useEffect(() => {
    console.log("Router params", route.params)
    if (route.params) {
      setLocation(route.params)
    }
  }, [route, setLocation])


  //Create Business
  async function createBusiness() {

    await dispatch(setLoading(true))
    const data = { business_name, business_type, business_unit, value_per_unit, persentase, description, location, business_value, images_360, profit_times, periode}

    await uploadImage(photo_local).then( async() => {
      console.log('masuk');
      data.images_360 = images_360
      console.log(data.images_360);
      await dispatch(postMitraBusiness(data, tokenMitra.token))
        navigation.reset({
          index: 0,
          routes: [{ name: 'mitra' }],
        });
        // navigation.push('mitra',{request: 'tab_bottom_mitra', refresh: 'refresh'})
    })
  }

  //Image Picker
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

  console.log("Loading", loading)
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <View style={[style.container_home, style.bar_, {backgroundColor: "white"}]}>
      <View style={[style.container_list, shadow, {marginHorizontal: 20, marginBottom: 50, backgroundColor: 'white'}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[{backgroundColor: 'white', flex: 3}]}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginVertical: 20}}>Pembuatan Usaha Baru</Text>
            </View>
            <Form style={{flex: 1, marginHorizontal: 20}}>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Nama Usaha</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setBusinessName}
                  value={business_name}
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Tipe Usaha</Text>
                <Picker
                  selectedValue={business_type}
                  style={{borderBottomWidth: 1, borderColor: color.grey}}
                  onValueChange={setBusinessType}
                >
                  <Picker.Item label="Pertanian" value="Pertanian" />
                  <Picker.Item label="Konveksi" value="Konveksi" />
                  <Picker.Item label="Jasa" value="Jasa" />
                  <Picker.Item label="Makanan" value="Makanan" />
                  <Picker.Item label="Peternakan" value="Peternakan" />
                </Picker>
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Foto Lokasi Usaha</Text>
                <View style={{alignItems: 'center'}}>
                  {photo_local ?
                    <Image style={{width:200, height: 200}} source={{ uri: `${photo_local}`}}/>
                  : <Text></Text>}
                </View>
                <View style={[{marginHorizontal: 0, alignItems: 'center', flexWrap: 'nowrap'}]}>
                  <Button style={[btn_style]} onPress={_takeImage}>
                    <Text style={[Gstyle.btn_text, {fontSize: 15}]}>Ambil Foto</Text>
                  </Button>
                  {/* <Button style={[btn_style]} onPress={_pickImage}>
                    <Text style={[Gstyle.btn_text, {fontSize: 15}]}>Pilih Foto</Text>
                  </Button> */}
                </View>
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Deskripsi Usaha</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setDescription}
                  value={description}
                />
              </View>
              <View>
                <View style={[style.padding_b_10]}>
                    <Text style={[style.text_grey, style.padding_b_10]}>Lokasi</Text>
                    <View style={{alignItems: 'center'}}>
                      <Text style={{height: 50}}>{location.address}</Text>
                    </View>
                    <View style={[{borderBottomWidth: 1, borderColor: color.grey}]}></View>
                    <View style={[{marginVertical: 0, marginHorizontal: 0, alignItems: 'center'}]}>
                      <Button style={[btn_style, {}]} onPress={() => navigation.navigate('maps',{ request: 'location' })}>
                        <Text style={[Gstyle.btn_text, {fontSize: 15}]}>Pilih Alamat</Text>
                      </Button>
                    </View>
                </View>
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Dana Dibutuhkan</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setFund}
                  value={business_value}
                  keyboardType='numeric'
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Jumlah Unit Saham</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setBusinessUnit}
                  onTouchEnd={() => setValuePerUnit(+business_value/+business_unit)}
                  value={business_unit ? business_unit : '1'}
                  keyboardType='numeric'
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Harga Saham per Unit</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setValuePerUnit}
                  editable={false}
                  value={String((+business_value)/(+business_unit))}
                  keyboardType='numeric'
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Persentase Pembagian/Tahun</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setProfit_times}
                  value={profit_times}
                  keyboardType='numeric'
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Berapa Kali Untung/Tahun</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setPersentase}
                  value={persentase}
                  keyboardType='numeric'
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={[style.text_grey, style.padding_b_10]}>Peroide Usaha/Tahun</Text>
                <TextInput
                  style={[{borderBottomWidth: 1, borderColor: color.grey}]}
                  onChangeText={setPeriode}
                  value={periode}
                  keyboardType='numeric'
                />
              </View>
            </Form>
            <View style={[{marginVertical: 20, marginHorizontal: 50, alignItems: 'center'}]} >
              <Button style={[Gstyle.btn_style]} onPress={createBusiness}>
                <Text style={[Gstyle.btn_text, {fontSize: 18}]}>Daftar Usaha</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

//Style
const btn_style = {
  width: "80%",
  padding: 20,
  marginTop: 10,
  borderRadius: 15,
  backgroundColor: "#00B965",
  justifyContent: "center"
}

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}