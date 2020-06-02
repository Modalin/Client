import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import NumberFormat  from 'react-number-format'

export default function Transaction({navigation}) {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},]
  return(
    <View style={[investor_style.container_home,investor_style.bar_, {backgroundColor: "#ffffff"}]}>
      {/* list bisnis */}
      <View style={investor_style.container_list}>
        {/* flat list here */}
        <Card onTouchMove={() => navigation.navigate('payment')}>
          <CardItem>
            <Body>
              <View style={investor_style.card}>
                <View style={investor_style.round}>
                    {/* image here */}
                </View>
                <View style={{justifyContent:"center"}}>
                  <Text style={[investor_style.text_bold]}>Bengkel A&S</Text>
                  <View style={investor_style.sub_income_card}>
                    <View>
                      <Text style={[investor_style.text_grey]}>Min Investasi</Text>
                      <NumberFormat value={100000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[]}>{value}</Text>} />
                    </View>
                    <View>
                      <Text style={[investor_style.text_grey]}>Persen</Text>
                      <Text style={[investor_style.text_green,{alignSelf:"flex-end"}]}>+1,2/year</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{borderBottomWidth:1, width: "100%", borderBottomColor: "#AEAEAE"}}/>
              <View style={{paddingVertical: 10}}>
                <Text style={[]}>Status</Text>
                <Text style={[]}>Menunggu Transfer</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
    </View>
  )
}