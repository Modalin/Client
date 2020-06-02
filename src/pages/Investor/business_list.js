import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View, Text, ScrollView, FlatList, Image} from 'react-native'
import {Button, Card, CardItem, Body} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { getInvestorBusiness } from '../../store/actions'
import NumberFormat  from 'react-number-format'

export default function Business({navigation}) {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},{id: 6, value: "Perikanan"}]
  const {investorBusiness} = useSelector((state) => state.investorBusiness)
  const {tokenInvestor} = useSelector((state) => state.tokenInvestor)
  const dispatch = useDispatch()


  useEffect(() => {

    if (tokenInvestor) {
      console.log('ini token investor');
      console.log(tokenInvestor);

      dispatch(getInvestorBusiness({ token: tokenInvestor.token }))
    }

  }, [dispatch, tokenInvestor])

  if (!investorBusiness) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    )
  } else {

    console.log(investorBusiness);
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
          <FlatList
            keyExtractor={(item, index) => 'key'+index}
            data={investorBusiness}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({ item }) =>
              <Card onTouchEnd={() => navigation.navigate('detail business',{ data : item })}>
                <CardItem>
                  <Body>
                    <View style={investor_style.card}>
                      <Image style={investor_style.image_round} source={{ uri: `${item.images_360}`}}/>
                      <View style={[{marginHorizontal: 20}]}>
                        <Text style={investor_style.text_bold}>{item.business_name}</Text>
                        <View style={investor_style.sub_income_card}>
                          <View>
                            <Text style={investor_style.text_grey}>Investasi</Text>
                            <NumberFormat value={item.value_per_unit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[]}>{value}</Text>} />
                          </View>
                          <View>
                            <Text style={investor_style.text_grey}>Pendapatan</Text>
                            <Text style={[investor_style.text_green,{alignSelf:"flex-end"}]}>+{item.persentase_value}%</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
          }
          />
        </View>
      </View>
    )
  }

}