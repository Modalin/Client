import React,{useState} from 'react'
import {View, Text, ImageBackground, ScrollView, Image, Modal, StyleSheet, TextInput} from 'react-native'
import {Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow, color_ as color} from './investor_style'

export default function Edit(params) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState(0);
  return (
    <View style={[investor_style.bar_, {flex: 1}]}>
      <ImageBackground resizeMode="contain" style={{width: "100%",height: 150}} source={{uri: 'https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.panorama-jtb.com%2Fthemes%2Fbasic-v3%2Fassets%2Fuploads%2Flanding_page%2Fxindonesia-1140x410.jpg.pagespeed.ic.znlonjF3Ao.jpg'}}>
        <View style={[{height: 150, backgroundColor: "#000000", opacity: 0.75,justifyContent: "flex-end"}]}>
          <View style={[{flexDirection: "row", justifyContent: "space-between", padding: 10}]}>
            <Text style={[investor_style.text_white]}>Bengkel Mobil A&S</Text>
            <Text style={[investor_style.text_white]}>4 Unit Left</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={[]}>
        <View style={[{marginHorizontal: 20, top: 20, marginBottom: 50}]}>
          <View style={[investor_style.card_detail]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
              <View>
                <Text style={[investor_style.text_grey]}>Minimal Invest</Text>
                <Text style={[investor_style.text_bold]}>Rp 1,000,000/unit</Text>
              </View>
              <View style={[{}]}>
                <View style={[{alignItems:"flex-end"}]}>
                  <Text style={[investor_style.text_grey]}>Persentase</Text>
                  <Text style={[investor_style.text_green]}>15% / year</Text>
                </View>
                <View style={[{alignItems:"flex-end"}]}>
                  <Text style={[investor_style.text_grey]}>Persentase</Text>
                  <Text style={[investor_style.text_green]}>Rp. 337,500</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[investor_style.card_detail]}>
            <View style={[{marginVertical: 10},investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Status</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>Sedang Berjalan</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey}]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Deskripsi</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Location</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>Jl. Plitur 1 No.2, RT.2, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Image
                style={[{width: "100%"}]}
                source={require('../../../assets/map_.jpg')}
              />
            </View>
            <View style={{alignItems:"center"}}>
              <Button style={[investor_style.btn_green]} onPress={() => {setModalVisible(true);}}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Modalain </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={[styles.centeredView, {backgroundColor: 'rgba(0, 0, 0, 0.75)'}]}>
          <View style={styles.modalView}>
            <Text style={[investor_style.text_bold,{fontSize: 18, textAlign: "left"}]}>Berapa Unit?</Text>
            <Text>Min Rp 1,000,000/Unit</Text>
            <TextInput
              style={{ height: 40, borderColor: color.grey, borderWidth: 1 , borderRadius: 10, padding: 10, width: "100%", marginVertical: 20}}
              onChangeText={text => onChangeText(+text)}
              value={value}
              placeholder= 'Banyak Unit'
              keyboardType= "numeric"

            />
            <Button style={[investor_style.btn_green,{width: "100%", marginBottom: 5}]} onPress={() => {setModalVisible(!modalVisible);}}>
              <Text style={[{fontSize: 14, color: '#ffffff', textAlign: "center"}]}> Modalain </Text>
            </Button>
            <Button style={[investor_style.btn_red,{width: "100%", }]} onPress={() => {setModalVisible(!modalVisible);}}>
              <Text style={[{fontSize: 14, color: '#ffffff', textAlign: "center"}]}> Cancel </Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    padding: 35,
    // alignItems: "center",
    // borderRadius: 20,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
});