import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMitraBusinessAuth } from '../../store/actions'
import {Image, View, Text, ScrollView, FlatList, ActivityIndicator, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'

export default function mitraPage({navigation}) {
  const dispatch = useDispatch()
  const { mitraBusinessAuth } = useSelector((state) => state.mitraBusinessAuth)
  const { tokenMitra } = useSelector((state) => state.tokenMitra)
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigation.addListener('focus', async () => {
      await setToken(await AsyncStorage.getItem('token'))
      if (tokenMitra || token) {
        await dispatch(getMitraBusinessAuth(token || tokenMitra.token))
      }
    });
  }, [dispatch, navigation])

  if (loading) {
    return (
      <View style={styles.spinnerView}>
        <ActivityIndicator size="large" color="#00B965" />
      </View>
    )
  }

  console.log('Async Token', token)
  if((!mitraBusinessAuth && !tokenMitra) && !token) {
    setLoading(true)
  } else {
    console.log(mitraBusinessAuth.length, ' ini jumlah array');
    return (
      <View style={[{flex: 1, backgroundColor: "#ffffff"}]}>
        <View style={[style.shadow,style.container, {width: "100%", height: "30%", justifyContent: "center"}]}>
          {/* <Card style={[style.profile_round]}>
            <Image style={[style.image_round]} source={{ uri:`${mitraBusinessAuth.photo_profile}`}}></Image>
          </Card> */}
          <TouchableHighlight style={[style.btn_green,{maxWidth: "40%", padding: 10, justifyContentent: "center",marginVertical: 10}]} onPress={() => navigation.navigate('create business', { request: 'create_business'})}>
            <Text style={[style.text_white],{textAlign: "center", color: "#ffffff"}}>Tambah Usaha</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1}}>
          <ScrollView style={[{padding: 20}]}>
            {/* Flat List Here */}
              { mitraBusinessAuth.map((el) =>

              <Card key={el._id} onTouchEnd={() => navigation.navigate('detail business mitra', { data: el })}>
                <CardItem>
                  <Body>
                    <View style={[style.card,{justifyContent: "space-between",width: "100%", alignContent: "center"}]}>
                      <View style={[{}]}>
                        <Image style={style.image_round} source={{ uri: `${el.images_360}`}}/>
                      </View>
                      <View style={[{width: "70%"}]}>
                        <Text style={[{ fontSize: 16}]}>{el.business_name}</Text>
                        <View style={[{flexDirection: "row", justifyContent: "space-between", marginVertical: 5}]}>
                          <View style={[{}]}>
                          <Text style={[style.text_grey]}>Dana Terkumpul</Text>
                          {
                            el.investor.length < 1 ? <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green]}>{value}</Text>} /> 
                            : 
                            // el.investor.map(element =>
                            //   <NumberFormat key={element._id} value={element.invest_value*element.total_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green]}>{value}</Text>} />
                            // )
                            <NumberFormat value={el.investor.reduce((a, b) => (a.invest_value*a.total_unit) + (b.invest_value*b.total_unit), 0)} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[style.text_green]}>{value}</Text>} />
                          }
                          </View>
                          <View>
                            <Text style={[style.text_grey]}>Total Investor</Text>
                            <Text style={[{alignSelf: "flex-end"}]}>{el.investor.length}</Text>
                          </View>
                        </View>
                        <View style={[{borderBottomWidth: 1, borderBottomColor: color.grey, marginVertical: 10}]}></View>
                        <View style={[[style.text_grey,{}]]}>
                          <TouchableHighlight style={[style.btn_green,{alignSelf: "flex-end", width: 100}]}>
                            <Text style={[style.btn_green,{width:"auto" ,alignSelf: "center", padding: 5, color: "#ffffff"}]}>Ambil Dana</Text>
                          </TouchableHighlight>
                        </View>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
                )}
          </ScrollView>
        </View>
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
