import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View, Text, ScrollView, TextInput} from 'react-native'
import {Card, Button} from 'native-base'
import {style as investor_style, shadow_ as box_shadow} from './investor_style'
import {editInvestorProfile} from '../../store/actions'

export default function Profile({ navigation }) {
  const { tokenInvestor } = useSelector(state => state.tokenInvestor)
  const [editStatus, setEditStatus] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [address, setAddress] = useState('')
  const [account, setAccount] = useState(0)
  const [job, setJob] = useState('')
  const [ktp, setKtp] = useState(0)
  const [npwp, setNpwp] = useState(0)
  const dispatch = useDispatch()

  const onHandleEdit = (e) => {
    e.preventDefault()
    setEditStatus(true)
  }

  const onSubmitEdit = (e) => {
    e.preventDefault()
    // dispatch(editInvestorProfile({
    //   name,
    //   email,
    //   phone,
    //   address,
    //   job,
    //   wallet : {
    //     account_number : account
    //   },
    //   document : {
    //     KTP : {
    //       no_KTP: ktp
    //     },
    //     NPWP: {
    //       no_NPWP: npwp
    //     }
    //   }
    // }))
    alert('successfully edit' )
    setEditStatus(false)
  }
  
  return (
    <View style={[investor_style.container_home]}>
      <ScrollView>

        <View style={[investor_style.container,investor_style.bar_,{flexDirection: "row", paddingBottom: 20}]}>
          <Card style={[investor_style.profile_round]}>
            <View></View>
          </Card>
          <View style={[{justifyContent: "center", marginHorizontal: 20}]}>
            {
              editStatus ? <TextInput onChangeText={setName} value={name}>{tokenInvestor.name ? tokenInvestor.name : ''}</TextInput> :
              <Text>{tokenInvestor.name ? tokenInvestor.name : ''}</Text>
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
              editStatus ? <TextInput onChangeText={setEmail} value={email}>{tokenInvestor.email ? tokenInvestor.email : ''}</TextInput> :
              <Text>{tokenInvestor.email ? tokenInvestor.email : ''}</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Phone</Text>
            {
              editStatus ? <TextInput onChangeText={setPhone} value={phone}>{tokenInvestor.phone ? tokenInvestor.phone : ''}</TextInput> :
              <Text>{tokenInvestor.phone ? tokenInvestor.phone : ''}</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Address</Text>
            {
              editStatus ? <TextInput onChangeText={setAddress} value={address}>{tokenInvestor.address ? tokenInvestor.address : ''}</TextInput> :
              <Text>{tokenInvestor.address ? tokenInvestor.address : ''}</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>No Rekening</Text>
            {
              editStatus ? <TextInput onChangeText={setAccount} value={account}>{tokenInvestor.wallet.account_number ? tokenInvestor.wallet.account_number : '0'}</TextInput> :
              <Text>{tokenInvestor.wallet.account_number ? tokenInvestor.wallet.account_number : '0'}</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>Pekerjaan</Text>
            {
              editStatus ? <TextInput onChangeText={setJob} value={job}>{tokenInvestor.job ? tokenInvestor.job : ''}</TextInput> :
              <Text>{tokenInvestor.job ? tokenInvestor.job : ''}</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>KTP</Text>
            {
              editStatus ? <TextInput onChangeText={setKtp} value={ktp}>{tokenInvestor.document.KTP.no_KTP ? tokenInvestor.document.KTP.no_KTP : '0'}</TextInput> :
              <Text>{tokenInvestor.document.KTP.no_KTP ? tokenInvestor.document.KTP.no_KTP : '0'}</Text>
            }
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[investor_style.text_grey]}>NPWP</Text>
            {
              editStatus ? <TextInput onChangeText={setNpwp} value={npwp}>{tokenInvestor.document.NPWP.no_NPWP ? tokenInvestor.document.NPWP.no_NPWP : ''}</TextInput> :
              <Text>{tokenInvestor.document.NPWP.no_NPWP ? tokenInvestor.document.NPWP.no_NPWP : ''}</Text>
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
}