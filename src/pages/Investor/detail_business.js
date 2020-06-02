import React,{useState} from 'react'
import {View, Text, ImageBackground, ScrollView, TouchableHighlight, Modal, StyleSheet, TextInput} from 'react-native'
import {Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow, color_ as color} from './investor_style'
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapData from '../maps/maps.js'
import NumberFormat  from 'react-number-format'

export default function Edit({ route, navigation }) {
  const data = route.params.data;
  // console.log('masuk detail di client yang baru');
  // console.log(data);

  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState(null);
  return (
    <View style={[investor_style.bar_, {flex: 1}]}>
      <ImageBackground style={{width: "100%",height: 150}} source={{ uri : `${data.images_360}`}}>
        <View style={[{height: 150, backgroundColor: "#000000", opacity: 0.75,justifyContent: "flex-end"}]}>
          <View style={[{flexDirection: "row", justifyContent: "space-between", padding: 10}]}>
            <Text style={[investor_style.text_white]}>{data.business_name}</Text>
            <Text style={[investor_style.text_white]}>{data.business_unit} Unit Left</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={[]}>
        <View style={[{marginHorizontal: 20, top: 20, marginBottom: 50}]}>
          <View style={[investor_style.card_detail]}>
            <View style={[{flexDirection: "row", justifyContent: "space-between"}]}>
              <View>
                <Text style={[investor_style.text_grey]}>Minimal Invest</Text>
                <NumberFormat value={data.value_per_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_bold]}>{value}</Text>} />
              </View>
              <View style={[{}]}>
                <View style={[{alignItems:"flex-end"}]}>
                  <Text style={[investor_style.text_grey]}>Persentase</Text>
                  <Text style={[investor_style.text_green]}>{data.persentase_value}% / year</Text>
                </View>
                <View style={[{alignItems:"flex-end"}]}>
                  <Text style={[investor_style.text_grey]}>Perkiraan Untung</Text>
                  <NumberFormat value={data.value_per_unit * data.persentase_value} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_green]}>{value}</Text>} />
                </View>
              </View>
            </View>
          </View>
          <View style={[investor_style.card_detail]}>
            <View style={[{marginVertical: 10},investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Status</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>{!data.status ? 'Unit belum terisi' : data.status}</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey}]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Deskripsi</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>{data.business_description}</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
            </View>
            <View style={[investor_style.padding_b_10]}>
              <Text style={[investor_style.text_grey, investor_style.padding_b_10]}>Location</Text>
              <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>{data.location.address}</Text>
              <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
            </View>
            {/* onTouchEnd={() => navigation.navigate('maps', { request: 'maps', map: data.location })} */}
            <View style={[investor_style.padding_b_10,{}]} >
              <TouchableHighlight>
                <MapData props={{ request: 'maps', map: data.location }}></MapData>
              </TouchableHighlight>
            </View>
            <View style={{alignItems:"center"}}>

              <Button style={[investor_style.btn_green]} onPress={() => {setModalVisible(true);}}>
                <Text style={[{fontSize: 14, color: '#ffffff'}]}> Modalin </Text>
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
            <NumberFormat value={data.value_per_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_grey]}>Min {value}/Unit</Text>} />
            <TextInput
              style={{ height: 40, borderColor: color.grey, borderWidth: 1 , borderRadius: 10, padding: 10, width: "100%", marginVertical: 20}}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder= 'Banyak Unit'
              keyboardType= "numeric"

            />
            <Button style={[investor_style.btn_green,{width: "100%", marginBottom: 5}]} onPress={() => {setModalVisible(!modalVisible);}}>
              <Text style={[{fontSize: 14, color: '#ffffff', textAlign: "center"}]}> Modalin </Text>
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