import React,{useState} from 'react'
import {View, Text, ImageBackground, ScrollView, TouchableHighlight ,Modal, StyleSheet} from 'react-native'
import {Picker, Button} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'
import Repot from './repot'

export default function Detail(params) {
  const [status, setStatus] = useState({selected: null})
  const [IsInvestorViewModal, setIsInvestorViewModal] = useState(false);
  const [IsRepotViewModal, setIsRepotViewModal] = useState(false);
  return(
    <View style={[style.container_home, style.bar_,{}]}>
      <ImageBackground style={{width: "100%",height: 150}} source={{ uri : `https://media-cdn.tripadvisor.com/media/photo-s/11/67/bb/9b/rinjani-mountain-panorama.jpg`}}>
          <View style={[{height: 150, backgroundColor: "#000000", opacity: 0.75,justifyContent: "flex-end"}]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between", padding: 10}]}>
              <Text style={[style.text_white]}>Ayam Geprek Juara</Text>
              <Text style={[style.text_white]}>3 Unit Left</Text>
            </View>
          </View>
      </ImageBackground>
      <ScrollView>
        <View style={[{margin: 20, borderRadius: 10}]}>
          <View style={[style.card_detail]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
              <View>
                <Text>Dana Dibutuhkan</Text>
                <NumberFormat value={10000000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_bold]}>{value}</Text>} />
              </View>
              <View style={[{alignItems:"flex-end"}]}>
                <Text>Dana Dibutuhkan</Text>
                <NumberFormat value={10000000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green, style.text_bold]}>{value}</Text>} />
              </View>
            </View>
          </View>
          <View style={[style.card_detail]}>
            <View style={[{}]}>
              <View>
                <Text style={[style.text_grey, style.padding_b_10]}>Deskripsi</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                <View style={[style.padding_b_10, {borderBottomWidth: 1, borderColor: color.grey}]}></View>
              </View>
              <View>
                <Text style={[style.text_grey, style.padding_b_10]}>Status</Text>
                <Picker
                  enabled={false}
                  mode="dialog"
                  style={[style.text_green,{ width: undefined, fontSize: 1}]}
                  selectedValue={status}
                  onValueChange={(value) => setStatus(value)}
                >
                  <Picker.Item label="Menunggu Pendanaan" value="" />
                  <Picker.Item label="Sedang Berjalan" value="Sedang Berjalan" />
                  <Picker.Item label="Pendanaan Terpenuhi" value="Pendanaan Terpenuhi" />
                </Picker>
                <View style={[{borderBottomWidth: 1, borderColor: color.grey},style.padding_b_10]}></View>
              </View>
              <TouchableHighlight onPress={() => {setIsInvestorViewModal(true)}} underlayColor="#ffffff">
                <View>
                  <Text style={[style.text_grey, style.padding_b_10]}>Investor</Text>
                  <Text>4</Text>
                  <View style={[style.padding_b_10, {borderBottomWidth: 1, borderColor: color.grey}]}></View>
                </View>
              </TouchableHighlight>
              <View>
                <Text style={[style.text_grey, style.padding_b_10]}>Lokasi</Text>
                <Text>Jl. Plitur 1 No.2, RT.2, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210</Text>
                <View style={[style.padding_b_10, {borderBottomWidth: 1, borderColor: color.grey}]}></View>
              </View>
              <View>
                {/* <Map></Map> */}
              </View>
              <View style={[{alignItems: "center"}]}>
                <Button style={[style.btn_green,{marginVertical: 10}]} onPress={() => alert('wait')}>
                  <Text style={[style.text_white]}>Repot</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={IsInvestorViewModal}
        >
          <View style={[inner_style.centeredView, {backgroundColor: 'rgba(0, 0, 0, 0.75)'}]}>
            <View style={inner_style.modalView}>
              <Text style={[style.text_bold,{fontSize: 18, textAlign: "left"}]}>List Investor</Text>
              {/* flat list here */}
              <Button style={[style.btn_red,{width: "100%", }]} onPress={() => {setIsInvestorViewModal(!IsInvestorViewModal);}}>
                <Text style={[{fontSize: 14, color: '#ffffff', textAlign: "center"}]}> Cancel </Text>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={IsRepotViewModal}
        >
          <Repot></Repot>
        </Modal>
    </View>
  )
}

const inner_style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
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