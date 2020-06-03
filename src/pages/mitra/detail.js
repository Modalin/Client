import React,{useState, useEffect} from 'react'
import {View, Text, ImageBackground, ScrollView, TouchableHighlight ,Modal, StyleSheet} from 'react-native'
import {Picker, Button} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'
import CalculateByBusiness from '../../javaScript/calculate_by_business'
import Repot from './repot'

export default function Detail({ route, navigation }) {
  const [status, setStatus] = useState({selected: null})
  const [IsInvestorViewModal, setIsInvestorViewModal] = useState(false);
  const [IsRepotViewModal, setIsRepotViewModal] = useState(false);
  const dataBusiness = route.params.data;

  return(
    <View style={[style.container_home, style.bar_,{}]}>
      <ImageBackground style={{width: "100%",height: 150}} source={{ uri : `${dataBusiness.images_360}`}}>
          <View style={[{height: 150, backgroundColor: "#000000", opacity: 0.75,justifyContent: "flex-end"}]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between", padding: 10}]}>
              <Text style={[style.text_white]}>{dataBusiness.business_name}</Text>
              <Text style={[style.text_white]}>{dataBusiness.business_unit} Unit Left</Text>
            </View>
          </View>
      </ImageBackground>
      <ScrollView>
        <View style={[{margin: 20, borderRadius: 10}]}>
          <View style={[style.card_detail]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
              <View>
                <Text>Dana Dibutuhkan</Text>
                {
                  dataBusiness.investor.length < 1 ? <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_bold]}>{value}</Text>} /> :
                  dataBusiness.investor.map(el =>
                    <NumberFormat key={el._id} value={el.invest_value * el.total_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_bold]}>{value}</Text>} />
                  )
                }

              </View>
              <View style={[{alignItems:"flex-end"}]}>
                <Text>Dana Terkumpul</Text>
                <NumberFormat value={10000000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green, style.text_bold]}>{value}</Text>} />
              </View>
            </View>
          </View>
          <View style={[style.card_detail]}>
            <View style={[{}]}>
              <View>
                <Text style={[style.text_grey, style.padding_b_10]}>Deskripsi</Text>
                <Text>{dataBusiness.business_description}</Text>
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
                  {
                    dataBusiness.status === "" ? <Picker.Item label="Menunggu Pendanaan" value="" /> :
                    dataBusiness.status === "Sedang Berjalan" ? <Picker.Item label="Sedang Berjalan" value="Sedang Berjalan" /> :
                    dataBusiness.status === "Pendanaan Terpenuhi" ? <Picker.Item label="Pendanaan Terpenuhi" value="Pendanaan Terpenuhi" /> : ""
                  }

                </Picker>
                <View style={[{borderBottomWidth: 1, borderColor: color.grey},style.padding_b_10]}></View>
              </View>
              <TouchableHighlight onPress={() => {setIsInvestorViewModal(true)}} underlayColor="#ffffff">
                <View>
                  <Text style={[style.text_grey, style.padding_b_10]}>Investor</Text>
                  <Text>{dataBusiness.investor.length}</Text>
                  <View style={[style.padding_b_10, {borderBottomWidth: 1, borderColor: color.grey}]}></View>
                </View>
              </TouchableHighlight>
              <View>
                <Text style={[style.text_grey, style.padding_b_10]}>Lokasi</Text>
                <Text>{dataBusiness.location.address}</Text>
                <View style={[style.padding_b_10, {borderBottomWidth: 1, borderColor: color.grey}]}></View>
              </View>
              <View>
                {/* <Map></Map> */}
              </View>
              <View style={[{alignItems: "center"}]}>
                <Button style={[style.btn_green,{marginVertical: 10}]} onPress={() => navigation.navigate('repot')}>
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
              {
                dataBusiness.investor.length < 1 ? <Text>Investor Kosong</Text> :
                dataBusiness.investor.map(el =>
                  <View key={el._id} style={{ marginVertical: 18}}>
                    <Text style={[style.text_bold]}>Total Unit : {el.total_unit}</Text>
                    <NumberFormat value={el.invest_value} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_bold]}>Nilai Pendanaan : {value}</Text>} />
                  </View>
                )
              }
              <Button style={[style.btn_red,{width: "100%", }]} onPress={() => {setIsInvestorViewModal(!IsInvestorViewModal);}}>
                <Text style={[{fontSize: 14, color: '#ffffff', textAlign: "center"}]}> Cancel </Text>
              </Button>
            </View>
          </View>
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