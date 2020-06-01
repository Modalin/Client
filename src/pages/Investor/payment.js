import React, {useState} from 'react'
import {View, Text} from 'react-native'
import {Card,  CardItem, Body, Button} from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'

export default function Payment({navigation}) {
  const [source, setSource] = useState(null)
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
  return(
    <View style={[investor_style.container, {minHeight: "100%", justifyContent: "center"}]}>
      <View style={{paddingVertical: 20}}>
        <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 18}}>Pesanan Berhasil Dibuat</Text>
        <View style={[investor_style.text_large,{marginTop: 20}]}>
          <Text>1.Selesaikan Transaksi Mu</Text>
          <Text>2.Upload Bukti Transfer</Text>
          <Text>3.Pastikan kamu mentransfer dengan rekening atas nama kamu sesuai kartu identitas</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={[investor_style.text_bold, investor_style.text_very_large]}>
            Detail
          </Text>
          <Card>
            <CardItem>
              <Body>
                <View style={[investor_style.card, {flexDirection:"column"}]}>
                  <View style={[{paddingBottom: 20}]}>
                    <Text style={[investor_style.text_large, investor_style.text_grey]}>Nama Usaha</Text>
                    <Text style={[investor_style.text_large]}>Bengkel Mobil A&S</Text>
                  </View>
                  <View style={[{paddingBottom: 20}]}>
                    <Text style={[investor_style.text_large, investor_style.text_grey]}>Nama Usaha</Text>
                    <Text style={[investor_style.text_large]}>Bengkel Mobil A&S</Text>
                  </View>
                  <View style={[{paddingBottom: 20}]}>
                    <Text style={[investor_style.text_large, investor_style.text_grey]}>Transfer ke</Text>
                    <Text style={[investor_style.text_large]}>BCD</Text>
                    <Text style={[investor_style.text_large]}>Modalin</Text>
                  </View>
                  <View style={[{paddingBottom: 20}]}>
                    <Text style={[investor_style.text_large, investor_style.text_grey]}>Jumlah Transfer </Text>
                    <Text style={[investor_style.text_large]}>Rp 1,000,000</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
          {/* card upload bukti */}
          <Card>
            <CardItem>
              <Body style={{alignItems: "center"}}>
                <Button style={investor_style.btn_green} onPress={_pickImage}>
                  <Text style={[investor_style.text_white]}>Upload</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
      <View style={{alignItems: "center"}}>
        <Button style={[investor_style.btn_green,]}>
          <Text style={[investor_style.text_white, ]}>Konfirmasi</Text>
        </Button>
      </View>
    </View>
  )
}