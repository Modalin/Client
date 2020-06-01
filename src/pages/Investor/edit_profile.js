import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import {View, Text, Image} from 'react-native'
import {Form, Item, Input, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'

export default function Edit(params) {
  const [source, setSource] = useState(null)
  console.log(source);
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
        setSource(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
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