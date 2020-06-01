import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, ScrollView, FlatList} from 'react-native'
import {Button , Card, CardItem, Body} from 'native-base'
import SvgUri from "expo-svg-uri"
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { getMitraBusiness, getInvestorWallet } from '../../store/actions'

export default function home({navigation}) {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},{id: 6, value: "Perikanan"}]
  const {mitraBusiness} = useSelector((state) => state.mitraBusiness)
  const {tokenInvestor} = useSelector((state) => state.tokenInvestor)
  const {investorWallet} = useSelector((state) => state.investorWallet)
  const dispatch = useDispatch()

  useEffect(() => {

      dispatch(getMitraBusiness())

      if (tokenInvestor) {
        dispatch(getInvestorWallet({ token : tokenInvestor.token }))
      }

  }, [dispatch, tokenInvestor])

  if (!mitraBusiness && !investorWallet) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    )
  } else {
    return (
      <View style={investor_style.container_home}>
        <View style={investor_style.container}>
          <View style={{alignSelf: "flex-start"}}>
            <SvgUri
              width="70"
              height="70"
              source={require('../../../assets/garden.svg')}
            />
          </View>
          <View>
            <Text style={[investor_style.text_bold,{alignSelf: "center", fontSize: 18}]}>Rp. {investorWallet.saldo}</Text>
            <View style={investor_style.income_value}>
              <View>
                <Text style={[investor_style.text_green, {alignSelf: "flex-start"}]}>Rp. {investorWallet.income}</Text>
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
          <FlatList
            keyExtractor={(item, index) => 'key'+index}
            data={mitraBusiness}
            renderItem={({ item }) =>
            <Card onTouchEnd={() => navigation.navigate('detail business',{ data : item })} key={item._id}>
              <CardItem>
                <Body>
                  <View style={investor_style.card}>
                    <View style={investor_style.round}>
                        {/* image here */}
                    </View>
                    <View>
                      <Text style={investor_style.text_bold}>{item.business_name}</Text>
                      {
                        item.status === "" ? <Text></Text> :
                        item.status === "Sedang Berjalan" ? <Text style={[investor_style.text_yellow]}>test</Text> :
                        item.status === "Pendanaan Terpenuhi" ? <Text style={[investor_style.text_grey]}>ok</Text> : ""
                      }
                      <View style={investor_style.sub_income_card}>
                        <View>
                          <Text style={investor_style.text_grey}>Min Investasi</Text>
                          <Text >Rp {item.value_per_unit}</Text>
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
            }
            keyExtractor={item => item.id}
          />


        </View>
      </ScrollView>
      </View>
    )
  }

}