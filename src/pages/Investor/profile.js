import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View, Text, ScrollView, TextInput, TouchableHighlight, ActivityIndicator, SafeAreaView} from 'react-native'
import {Card, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import {editInvestorProfile, getInvestor} from '../../store/actions'
import Splash from '../login/splahScreen'

export default function Profile({ navigation }) {
  const { dataInvestor } = useSelector(state => state.dataInvestor)
  const { tokenInvestor } = useSelector(state => state.tokenInvestor)
  const [editStatus, setEditStatus] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [account, setAccount] = useState("")
  const [job, setJob] = useState("")

  const dispatch = useDispatch()


  const onHandleEdit = (e) => {
    e.preventDefault()
    setEditStatus(true)
  }

  console.log(name);
  console.log(job);
  const onSubmitEdit = (e) => {
    e.preventDefault()
    if (tokenInvestor) {

      if (dataInvestor) {

        const dataProfil = {
          name: name ? name : dataInvestor.name,
          phone: phone ? phone : dataInvestor.phone,
          address: address ? address : dataInvestor.address,
          job: job ? job : dataInvestor.job,
          wallet : {
            account_number : account ? account : dataInvestor.wallet.account_number
          }
        }
        dispatch(editInvestorProfile( { data : dataProfil, token :tokenInvestor.token }))
      }

    }

    alert('successfully edit' )
    setEditStatus(false)
  }

  useEffect(() => {

    if (tokenInvestor) {
      console.log(tokenInvestor);
      dispatch( getInvestor({ token: tokenInvestor.token}))
    }

  }, [dispatch, tokenInvestor])


  if (dataInvestor.wallet) {

    console.log('ini data investor', dataInvestor);
    return (
      <View style={[investor_style.container_home]}>
        <ScrollView>
          <View style={[investor_style.container,investor_style.bar_,{flexDirection: "row", paddingBottom: 20}]}>
            <View style={{ justifyContent: "center", marginHorizontal: 10}}>
              <Card style={[investor_style.profile_round]}>
                <View></View>
              </Card>
              <TouchableHighlight
                style={[investor_style.btn_image_profile]}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('edit profile', {request: 'edit_profile'})}>
                <Text style={[{fontSize: 12, color: '#ffffff'}]}> Edit </Text>
              </TouchableHighlight>
            </View>
            <View style={[{justifyContent: "center", marginHorizontal: 20}]}>
              {
                editStatus ? <TextInput  style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", paddingVertical: 5}} onChangeText={(text) => setName(text)} value={name ? name : dataInvestor.name}/> :
                <Text>{dataInvestor.name}</Text>
              }
              <Text>Investor</Text>
            </View>
          </View>
          {/* info */}
          <View style={[investor_style.container, {marginTop: 20}]}>
            {/* email */}
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Email</Text>
              {
                <Text>{dataInvestor.email}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Phone</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setPhone(text)} value={phone ? phone : dataInvestor.phone}/> :
                <Text>{dataInvestor.phone}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Address</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setAddress(text)} value={address ? address : dataInvestor.address}/> :
                <Text>{dataInvestor.address}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>No Rekening</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={(text) => setAccount(text)} value={account ? account : dataInvestor.wallet.account_number}/> :
                <Text>{dataInvestor.wallet.account_number ? dataInvestor.wallet.account_number : ""}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>Pekerjaan</Text>
              {
                editStatus ? <TextInput style={{ borderBottomWidth:1, borderBottomColor: "#aeaeae", padding: 5}} onChangeText={ (text) => setJob(text)} value={job ? job : dataInvestor.job}/> :
                <Text>{dataInvestor.job}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>KTP</Text>
              {
                <Text>{dataInvestor.document.KTP.no_KTP ? dataInvestor.document.KTP.no_KTP : ""}</Text>
              }
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[investor_style.text_grey]}>NPWP</Text>
              {
                <Text>{dataInvestor.document.NPWP.no_NPWP ? dataInvestor.document.NPWP.no_NPWP : ""}</Text>
              }
            </View>
            {/* footer */}
            <View style={{marginBottom: 20, }}>
              <Text style={[investor_style.text_green, {textAlign: "center", paddingVertical: 10}]}>Pastikan nama kamu sesuai dengan nama yang tertera di rekening bank kamu</Text>
              <View style={{alignItems:"center"}}>
                {
                  editStatus ?
                <Button style={[investor_style.btn_green]} onPress={onSubmitEdit}>
                  <Text style={[{fontSize: 14, color: '#ffffff'}]}> Save </Text>
                </Button> :
                <Button style={[investor_style.btn_green]} onPress={onHandleEdit}>
                  <Text style={[{fontSize: 14, color: '#ffffff'}]}> Edit </Text>
                </Button>
                }
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  } else {
    return (
      <Splash></Splash>
    )
  }
}