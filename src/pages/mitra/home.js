import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMitraBusinessAuth } from '../../store/actions'
import {Image, View, Text, ScrollView, FlatList, ActivityIndicator, StyleSheet} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'

export default function mitraPage({navigation}) {
  const dispatch = useDispatch()
  const { mitraBusinessAuth } = useSelector((state) => state.mitraBusinessAuth)
  const { tokenMitra } = useSelector((state) => state.tokenMitra)

  useEffect(() => {
    if (tokenMitra) {
      dispatch(getMitraBusinessAuth(tokenMitra))
    }
  }, [dispatch, tokenMitra])

  if(!mitraBusinessAuth && !tokenMitra) {
    return (
      <View style={styles.spinnerView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  } else {
    console.log('ini mitra business');
    console.log(tokenMitra);
    return (
      <View style={[{flex: 1, backgroundColor: "#ffffff"}]}>
        <View style={[style.shadow,style.container, {width: "100%", height: "30%", justifyContent: "center"}]}>
          <Card style={[style.profile_round]}>
            <Image style={[style.image_round]} source={require('../Investor/tst.jpg')}></Image>
          </Card>
          <Button style={[style.btn_green,{maxWidth: "30%", marginVertical: 10}]}>
            <Text style={[style.text_white]}>Tambah Usaha</Text>
          </Button>
        </View>
        <ScrollView style={[{padding: 20}]}>
          {/* Flat List Here */}
            { mitraBusinessAuth.map((el) => 
              
            <Card onTouchEnd={() => navigation.navigate('detail business mitra')} key={el._id}>
              <CardItem>
                <Body>
                  <View style={[style.card,{justifyContent: "space-between",width: "100%", alignContent: "center"}]}>
                    <View style={[{}]}>
                      <Image style={style.image_round} source={{ uri: `${el.images_360}`}}/>
                    </View>
                    <View style={[{width: "70%"}]}>
                      <Text style={[{ fontSize: 18}]}>{el.business_name}</Text>
                      <View style={[{flexDirection: "row", justifyContent: "space-between", marginVertical: 5}]}>
                        <View style={[{}]}>
                        <Text style={[style.text_grey]}>Dana Terkumpul</Text>
                        {
                          el.investor.length < 1 ? 
                          <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green]}>{value}</Text>} /> : 
                          el.investor.map(element => 
                            
                            <NumberFormat key={element._id} value={element.invest_value*element.total_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green]}>{value}</Text>} />
                          )
                        }
                        </View>
                        <View>
                          <Text style={[style.text_grey]}>Total Investor</Text>
                          <Text style={[{alignSelf: "flex-end"}]}>{el.investor.length}</Text>
                        </View>
                      </View>
                      <View style={[{borderBottomWidth: 1, borderBottomColor: color.grey, marginVertical: 10}]}></View>
                      <View style={[[style.text_grey,{}]]}>
                        <Button style={[style.btn_green,{alignSelf: "flex-end", width: 100}]}>
                          <Text style={[style.btn_green,{width:"auto" ,alignSelf: "center", padding: 5, color: "#ffffff"}]}>Ambil Dana</Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
              )}
          
        </ScrollView>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  spinnerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
})