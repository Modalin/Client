import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, ScrollView, FlatList, Image} from 'react-native'
import {Button , Card, CardItem, Body} from 'native-base'
import NumberFormat  from 'react-number-format'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { getMitraBusiness, getInvestorWallet } from '../../store/actions'
import Splash from '../login/splahScreen'

console.disableYellowBox = true;
export default function home({navigation}) {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},{id: 6, value: "Perikanan"}]
  const {mitraBusiness} = useSelector((state) => state.mitraBusiness)
  const {tokenInvestor} = useSelector((state) => state.tokenInvestor)
  const {investorWallet} = useSelector((state) => state.investorWallet)
  const dispatch = useDispatch()

  
  useEffect(() => {

    if (tokenInvestor) {
        dispatch(getMitraBusiness())
        dispatch(getInvestorWallet({ token : tokenInvestor.token }))
      }

  }, [dispatch, tokenInvestor])


  if (!mitraBusiness && !investorWallet) {
    return (
      <Splash></Splash>
    )
  } else {
    return (
      <View style={investor_style.container_home}>
        <View style={investor_style.container}>
          <View style={{alignSelf: "flex-start", backgroundColor: "white"}}>
            <Image
              resizeMode="contain"
              style={{width: 70}}
              source={require('../../../assets/garden.png')}
            />
          </View>
          <View>
            <NumberFormat value={investorWallet.saldo} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_bold,{alignSelf: "center", fontSize: 18}]}>{value}</Text>} />
            <View style={investor_style.income_value}>
              <View>
                <NumberFormat value={investorWallet.income} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_green, {alignSelf: "flex-start"}]}>{value}</Text>} />
                <Text style={[investor_style.text_grey,{alignSelf: "flex-start"}]}>Pendapatan</Text>
              </View>
              <View style={{borderLeftWidth: 1, height: 80, borderColor: "#AEAEAE"}}></View>
              <View>
                <Text style={[investor_style.text_green, {alignSelf: "flex-start"}]}>{investorWallet.incomePersentase}%/year</Text>
                <Text style={[investor_style.text_grey,{alignSelf: "flex-start"}]}>Persentase</Text>
              </View>
            </View>
          </View>
        </View>
        {/* category */}
        <View style={investor_style.category_list}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
          >
            {data.map((item,index)=>
              <Button style={investor_style.card_category} key={index}>
                <Text>{item.value}</Text>
              </Button>
            )}
          </ScrollView>
        </View>
        {/* list usaha */}
      <ScrollView>

        <View style={[investor_style.container_list, { marginBottom: 140 }]}>
          {/* flat list here */}
          {/* <FlatList
            data={mitraBusiness}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => */}
            {
              mitraBusiness.map(item =>
              
              <Card key={item._id} onTouchEnd={() => navigation.navigate('detail business',{ data : item })}>
                <CardItem>
                  <Body>
                    <View style={investor_style.card}>
                      <Image style={investor_style.image_round} source={{ uri: `${item.images_360}`}}/>
                      <View style={[{marginHorizontal: 20}]}>
                        <Text style={investor_style.text_bold}>{item.business_name}</Text>
                        {
                          item.status === "" ? <Text></Text> :
                          item.status === "Sedang Berjalan" ? <Text style={[investor_style.text_yellow]}>test</Text> :
                          item.status === "Pendanaan Terpenuhi" ? <Text style={[investor_style.text_grey]}>ok</Text> : <Text></Text>
                        }
                        <View style={investor_style.sub_income_card}>
                          <View>
                            <Text style={investor_style.text_grey}>Min Investasi</Text>
                            <NumberFormat value={item.value_per_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[]}>{value}</Text>} />
                          </View>
                          <View>
                            <Text style={investor_style.text_grey}>Persentase</Text>
                            <Text style={[investor_style.text_green,{alignSelf:"flex-end"}]}>+{item.persentase_value}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
                )
            }
            {/* }
            // keyExtractor={item => item.id}
          /> */}


        </View>
      </ScrollView>
      </View>
    )
  }

}