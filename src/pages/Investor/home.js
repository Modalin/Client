import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, ScrollView, FlatList} from 'react-native'
import {Button , Card, CardItem, Body} from 'native-base'
import SvgUri from "expo-svg-uri"
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { getMitraBusiness } from '../../store/actions'

export default function home() {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},{id: 6, value: "Perikanan"}]
  const {mitraBusiness} = useSelector((state) => state.mitraBusiness)
  const dispatch = useDispatch()

  useEffect(() => {

      dispatch(getMitraBusiness())

  }, [dispatch])

  if (!mitraBusiness) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    )
  } else {
    console.log('business');
    console.log(mitraBusiness);
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
            <Text style={[investor_style.text_bold,{alignSelf: "center", fontSize: 18}]}>Rp. 0</Text>
            <View style={investor_style.income_value}>
              <View>
                <Text style={[investor_style.text_green, {alignSelf: "flex-start"}]}>Rp. 1,000,000</Text>
                <Text style={[investor_style.text_grey,{alignSelf: "flex-start"}]}>Pendapatan</Text>
              </View>
              <View style={{borderLeftWidth: 1, height: 80, borderColor: "#AEAEAE"}}></View>
              <View>
                <Text style={[investor_style.text_green, {alignSelf: "flex-start"}]}>10%/year</Text>
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
        <View style={investor_style.container_list}>
          {/* flat list here */}
          <FlatList
            data={mitraBusiness}
            renderItem={({ item }) => 
            <Card>
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
      </View>
    )
  }

}