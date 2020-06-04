import React from 'react'
import { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, ScrollView, FlatList, Image, AsyncStorage} from 'react-native'
import {Button , Card, CardItem, Body} from 'native-base'
import NumberFormat  from 'react-number-format'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import { getMitraBusiness, getInvestorWallet } from '../../store/actions'
import Splash from '../login/splahScreen'
import Loading from '../loading_screen'
// gradient
import { LinearGradient } from 'expo-linear-gradient';

console.disableYellowBox = true;
export default function home({navigation}) {
  const data = [{id: 1, value: "All"},{id: 2, value: "Pertanian"},{id: 3, value: "Jasa"},{id: 4, value: "Industri"},{id: 5, value: "Peternakan"},{id: 6, value: "Perikanan"}]
  const {mitraBusiness} = useSelector((state) => state.mitraBusiness)
  const {tokenInvestor} = useSelector((state) => state.tokenInvestor)
  const {investorWallet} = useSelector((state) => state.investorWallet)
  const [tokenAsync, setToken] = useState('')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  console.log(tokenInvestor);


  useEffect(() => {
    dispatch(getMitraBusiness())
    if (tokenInvestor) {
        navigation.addListener('focus', async() => {
            await dispatch(getInvestorWallet({ token : tokenInvestor.token})).then(async() => {
              setToken(await AsyncStorage.getItem('token'))
            })
          });
      }
      if (mitraBusiness) {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }
  }, [dispatch, navigation, tokenInvestor])

  if (loading) {
    return (
      <Loading />
    )
  }


  if (mitraBusiness && investorWallet){
    console.log('masuk mitra bisnis', mitraBusiness);
    return (
      <View style={[investor_style.container_home,{backgroundColor: "#ffffff"}]}>

        <View style={[{backgroundColor: "#ffffff"}]}>
          <LinearGradient
            // colors={['#00A855', '#6FD6A2', "#BBE9D1"]}
            // start={[0.2, 0.3]}
            start={[1.2, 2]}
            colors={["#00A855" , 'transparent',"#7FDDAE",'#2CBC7B',]}
            style={[,investor_style.bar_,{height: 200, }]}>
            <View style={[{marginHorizontal: 20,marginVertical: 10 ,flexDirection: "row"}]}>
              <View>
                <View style={[{marginBottom: 10}]}>
                  <Text  style={[{fontSize: 14, color: "#ffffff"}]}>Name</Text>
                  <Text  style={[{fontSize: 18, color: "#ffffff", fontWeight: "bold"}]}>{tokenInvestor.name || "Empty"}</Text>
                </View>
                <View style={[{}]}>
                  <Text style={[{fontSize: 14, color: "#ffffff"}]}>Total Investasi</Text>
                  <NumberFormat value={investorWallet.saldo ? investorWallet.saldo : 0} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <Text style={[investor_style.text_bold,{ fontSize: 18, color: "#ffffff"}]}>{value}</Text>} />
                </View>
              </View>
              <View>
                {/* <Image style={investor_style.image_round} source={{ uri: `${tokenInvestor.photo_profile}`}}/> */}
              </View>
            </View>
          </LinearGradient>
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

{/* <View style={investor_style.container}>
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
</View> */}