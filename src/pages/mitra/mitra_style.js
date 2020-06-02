import {StyleSheet} from 'react-native'
import Constant from 'expo-constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const style = StyleSheet.create({
  text_small:{
    fontSize: hp('1.25%')
  },
  text_medium:{
    fontSize:  hp('1.5%')
  },
  text_large:{
    fontSize:  hp('1.75%')
  },
  text_very_large:{
    fontSize:  hp('2%')
  },
  bar_:{
    paddingTop: Constant.statusBarHeight + 20
  },
  m_bar_btm_:{
    marginBottom: 180
  },
  m_b_20:{
    marginBottom: 20
  },
  container_home:{
    flex: 1,
  },
  container:{
    paddingTop: Constant.statusBarHeight,
    backgroundColor: "#ffffff",
  },


  container_list:{
    marginTop: 10,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  card:{
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  round:{
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#AEAEAE"
  },
  sub_income_card:{
    maxWidth: "75%",
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  income_value:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30
  },

  text_grey:{
    color: "#AEAEAE"
  },
  text_yellow:{
    color: "#FFFF00"
  },
  text_green: {
    color: "#00B965"
  },
  text_white:{
    color: "#ffffff"
  },
  text_bold:{
    fontWeight: "bold"
  },

  profile_round:{
    margin: 10,
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#AEAEAE"
  },

  image_round:{
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    marginRight: 10
  },

  btn_green:{
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#00B965",
    justifyContent: "center"
  },
  btn_red:{
    width: "80%",
    padding: 2,
    borderRadius: 10,
    backgroundColor: "#C20000",
    justifyContent: "center"
  },

  banner_:{
    justifyContent: "flex-end"
  },

  card_detail:{
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15
  },

  padding_b_10: {
    paddingBottom: 10
  },

  shadow:{
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5,
  }
})

const shadow_ = {
  width: 300,
  height:100,
  color:"#000000",
  border:2,
  radius:3,
  opacity:0.2,
  x:0,
  y:3,
  style:{marginVertical:5}
}
const color_ ={
  grey: "#AEAEAE",
  green: "#00B965",
  white: "#ffffff",
  black: "#000000"
}

export {style, shadow_, color_}