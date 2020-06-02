import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import {View, Text, Image} from 'react-native'
import {Form, Item, Input, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { storage } from '../../firebase/config'
import { useDispatch } from 'react-redux'
import { setInvestor } from '../../store/actions'

export default function Edit(params) {
  // const { photo_profile } = useSelector(state => state.profile.photo_profile)
  const dispatch = useDispatch()
  const [source, setSource] = useState(null)

  //from librarry
  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        setSource(result.uri)
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
    // name, photo_profile, phone, address, account_number, job
    <View style={[investor_style.container,investor_style.bar_, {flex: 1,justifyContent: "center"}]}>
      <Text style={[{textAlign: "center", fontWeight: "bold", fontSize: 24, marginBottom: 20}]}>Edit Profile</Text>
      <View style={[{alignItems:"center", alignContent: "flex-end", marginVertical: 20}]}>
        {source && <Image source={{ uri: source }} style={{ width: "100%", height: 200 , marginVertical: 20}} />}
        <Button style={[investor_style.btn_green]} onPress={_pickImage}>
          <Text style={[{fontSize: 14, color: '#ffffff'}]}>Change Photo</Text>
        </Button>
      </View>
      <View style={{alignItems:"center", alignContent: "flex-end"}}>
        <Button style={[investor_style.btn_green]} onPress={() => alert('hi')}>
          <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
        </Button>
      </View>
    </View>
  )
}