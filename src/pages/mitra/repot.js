import React,{useState} from 'react'
import {View, Text, ScrollView, TouchableHighlight, StyleSheet, TextInput} from 'react-native'
import {Button, Card, CardItem, Body, Textarea, DatePicker} from 'native-base'
import {style, color_ as color} from './mitra_style'


export default function Repot(params) {
  const [deskripsi, setDeskripsi] = useState(null)
  const [date, setDate] = useState(null)
  const [income, setIncome] = useState(null)
  return(
    <View style={[style.container_home,style.bar_,{backgroundColor: '#ffffff', padding: 20}]}>
      <ScrollView>
        <Card style={[{}]}>
          <CardItem>
            <Body>
              <View style={[{alignSelf: "center"}]}>
                <Text style={[style.text_bold]}>Repot Usaha</Text>
              </View>
              <View style={[{marginVertical: 40, width: "100%"}]}>
                <View style={[{borderBottomWidth: 1, width: "100%", borderBottomColor: color.grey, marginVertical: 10}]}>
                  <Text style={[{}]}>Deskripsi</Text>
                  <Textarea
                  placeholder="Deskripsi"
                  placeholderTextColor={color.grey}
                  Left
                  style={[{}]}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => setDeskripsi(text)}
                  value={deskripsi}
                  />
                </View>
                <View style={[{borderBottomWidth: 1, width: "100%", borderBottomColor: color.grey, marginVertical: 10}]}>
                  <Text style={[{}]}>Tanggal</Text>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"calendar"}
                    placeHolderText="Select date"
                    textStyle={{ color: color.grey }}
                    placeHolderTextStyle={{ color: color.grey }}
                    onDateChange={setDate}
                    disabled={false}
                    />
                </View>
                <View style={[{borderBottomWidth: 1, width: "100%", borderBottomColor: color.grey, marginVertical: 10}]}>
                  <Text style={[{}]}>Keuntungan Bulan Ini</Text>
                  <TextInput
                    style={[{paddingHorizontal: 10, color: color.grey}]}
                    onChange={(text=> setIncome(text))}
                    keyboardType="numeric"
                    />
                </View>
                <View style={[{alignItems: "center"}]}>
                  <Button style={[style.btn_green,{borderRadius: 20}]}>
                    <Text style={[style.text_white]}>Upload Bukti</Text>
                  </Button>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  )
}