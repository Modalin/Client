import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, ImageBackground, ScrollView, TouchableHighlight, Modal, StyleSheet, TextInput} from 'react-native'
import {Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow, color_ as color} from './investor_style'
import MapData from '../maps/maps.js'
import NumberFormat  from 'react-number-format'
import PureChart from 'react-native-pure-chart';
import Rumus from '../../javaScript/profit'
import { investToBusiness, getMitraBusinessAuth } from '../../store/actions'
import Loading from '../loading_screen'

export default function Edit({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [unit, onChangeText] = useState(null);
  const [income, setIncome] = useState(null)
  const [data, setData] = useState(route.params.data)
  const { mitraBusinessAuth }  = useSelector((state) => state.mitraBusinessAuth)
  const { tokenInvestor } = useSelector((state) => state.tokenInvestor)
  const dispatch = useDispatch()

  const handleInvest = () => {
    if (unit && tokenInvestor) {
      dispatch(investToBusiness({
        id: data._id,
        invest_value: unit*data.value_per_unit,
        total_unit: unit,
        token: tokenInvestor.token
      }))
      setModalVisible(!modalVisible)
      alert(`Success invest ${data.business_name} dengan total keseluruhan ${unit*data.value_per_unit}`)
      navigation.goBack()
    }
  }

  if(income == null){
    let result = Rumus(data.profit_times,data.persentase_value,data.value_per_unit)
    setIncome(result)
  }else{
    console.log(data);
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
                  <View>
                  <Text style={[investor_style.text_grey]}>Kontak Mitra</Text>
                  <Text style={[investor_style.text_bold]}>{data.owner.phone}</Text>
                </View>
                </View>
                <View style={[{}]}>
                  <View style={[{alignItems:"flex-end"}]}>
                    <Text style={[investor_style.text_grey]}>Persentase</Text>
                    <Text style={[investor_style.text_green]}>{data.persentase_value}%</Text>
                  </View>
                  <View style={[{alignItems:"flex-end"}]}>
                    <Text style={[investor_style.text_grey]}>Perkiraan Untung</Text>
                    <NumberFormat value={data.value_per_unit * data.persentase_value} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_green]}>{value}</Text>} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[investor_style.card_detail]}>
              <View style={[{marginVertical: 20}]}>
                  <PureChart data={income.diagram} type='line' height={200}/>
              </View>
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
                {/* <Text style={[{textAlign: "justify"}, investor_style.padding_b_10]}>{data.location.address}</Text> */}
                <View style={[{borderBottomWidth: 1, borderColor: color.grey},investor_style.padding_b_10]}></View>
              </View>
              {/* onTouchEnd={() => navigation.navigate('maps', { request: 'maps', map: data.location })} */}
              <View style={[investor_style.padding_b_10,{}]} >
                <TouchableHighlight>
                  <MapData props={{ request: 'maps', map: data.location }}/>
                </TouchableHighlight>
              </View>
              <View style={{alignItems:"center"}}>

                <TouchableHighlight style={[investor_style.btn_green]} onPress={() => {setModalVisible(true);}} >
                  <Text style={[{fontSize: 20, textAlign: "center", padding:10, color: '#ffffff'}]}> Modalin </Text>
                </TouchableHighlight>
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
                onChangeText={unit => onChangeText(unit)}
                value={unit}
                placeholder= 'Banyak Unit'
                keyboardType= "numeric"

              />
              <Button style={[investor_style.btn_green,{width: "100%", marginBottom: 5}]} onPress={handleInvest}>
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