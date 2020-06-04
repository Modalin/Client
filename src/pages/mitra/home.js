import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMitraBusinessAuth } from '../../store/actions'
import {Image, View, Text, ScrollView, FlatList, ActivityIndicator, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style, color_ as color} from './mitra_style'
import NumberFormat  from 'react-number-format'
import Loading from '../loading_screen'
// gradient
import { LinearGradient } from 'expo-linear-gradient';
import SvgUri from "expo-svg-uri"

export default function mitraPage({navigation}) {
  const dispatch = useDispatch()
  const { mitraBusinessAuth } = useSelector((state) => state.mitraBusinessAuth)
  const { tokenMitra } = useSelector((state) => state.tokenMitra)
  const [asyncToken, setToken] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    navigation.addListener('focus', async () => {
      if (tokenMitra) {
        await dispatch(getMitraBusinessAuth({ id: tokenMitra.id, token: tokenMitra.token})).then(async() => {
            await setToken(await AsyncStorage.getItem('token'))
          })
        }
    });
    if (mitraBusinessAuth && tokenMitra) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [dispatch, navigation, tokenMitra])

  if (loading) {
    return (
      <Loading />
    )
  }

  if(mitraBusinessAuth && tokenMitra){
    console.log(mitraBusinessAuth.length, ' ini jumlah array');
    return (
      <View style={[{flex: 1, backgroundColor: "#ffffff"}]}>
        <LinearGradient
            // colors={['#00A855', '#6FD6A2', "#BBE9D1"]}
            // start={[0.2, 0.3]}
            start={[1.2, 2]}
            colors={["#00A855" , 'transparent',"#7FDDAE",'#2CBC7B',]}
            style={[style.bar_,{height: "30%",width: "100%",flexDirection:"row",justifyContent: "space-between", paddingHorizontal: 20,paddingVertical: 10,}]}>
            <View style={[{justifyContent: "center"}]}>
              <View style={[{marginBottom: 10,}]}>
                <Text  style={[{fontSize: 14, color: "#ffffff"}]}>Name</Text>
                <Text  style={[{fontSize: 18, color: "#ffffff", fontWeight: "bold"}]}>{tokenMitra.data.name || "Empty"}</Text>
              </View>
              <View style={[{}]}>
              </View>
            </View>
            <View style={[{ justifyContent:"flex-end",height: "100%"}]}>
              <TouchableHighlight style={[style.btn_green,{minWidth: "50%", padding: 10, alignSelf: "flex-end",marginVertical: 10}]} onPress={() => navigation.navigate('create business', { request: 'create_business'})}>
                <Text style={[style.text_white],{textAlign: "center", color: "#ffffff"}}>Tambah Usaha</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        {/* <View style={[style.shadow,style.container, {width: "100%", height: "30%", justifyContent: "center"}]}>
           <Card style={[style.profile_round]}>
            <Image style={[style.image_round]} source={{ uri:`${mitraBusinessAuth.photo_profile}`}}></Image>
          </Card> *
          <TouchableHighlight style={[style.btn_green,{maxWidth: "40%", padding: 10, justifyContentent: "center",marginVertical: 10}]} onPress={() => navigation.navigate('create business', { request: 'create_business'})}>
            <Text style={[style.text_white],{textAlign: "center", color: "#ffffff"}}>Tambah Usaha</Text>
          </TouchableHighlight>
        </View> */}
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
                        <Text style={[{ fontSize: 18}]}>{el.business_name}</Text>
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
