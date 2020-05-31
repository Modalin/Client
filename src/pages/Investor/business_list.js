import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View, Text, ScrollView} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { getInvestorBusiness } from '../../store/actions'

export default function Business(params) {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},{id: 6, value: "Perikanan"}]
  const { tokenInvestor } = useSelector(state => state.tokenInvestor)
  const { investorBusiness } = useSelector(state => state.investorBusiness)
  const dispatch = useDispatch()

  console.log(investorBusiness);

  useEffect(() => {
    dispatch(getInvestorBusiness(tokenInvestor.id, tokenInvestor.token))
  }, [dispatch])

  return(
    <View style={[investor_style.container_home,investor_style.bar_, {backgroundColor: "#ffffff"}]}>
      <View style={[investor_style.category_list]}>
        {/* category */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
        >
          {data.map((item,index)=>
            <Button style={investor_style.card_category} key={index}>
              <Text style={investor_style.text_medium}>{item.value}</Text>
            </Button>
          )}
        </ScrollView>
      </View>
      {/* list bisnis */}
      <View style={investor_style.container_list}>
        {/* flat list here */}
        <Card>
          <CardItem>
            <Body>
              <View style={investor_style.card}>
                <View style={investor_style.round}>
                    {/* image here */}
                </View>
                <View>
                  <Text style={investor_style.text_bold}>Bengkel A&S</Text>
                  <View style={investor_style.sub_income_card}>
                    <View>
                      <Text style={investor_style.text_grey}>Investasi</Text>
                      <Text >Rp 1,000,000</Text>
                    </View>
                    <View>
                      <Text style={investor_style.text_grey}>Pendapatan</Text>
                      <Text style={[investor_style.text_green,{alignSelf:"flex-end"}]}>+1,2%</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
    </View>
  )
}