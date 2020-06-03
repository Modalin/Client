import {StyleSheet} from 'react-native'
import Constant from 'expo-constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  containerFull:{
    paddingTop: Constant.statusBarHeight,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 20
  },
  img_banner:{
    resizeMode: "cover"
  },
  btn_style_border_green:{
    width: "80%",
    padding: 15,
    borderWidth: 1.5,
    borderColor: "#00B965",
    marginTop: 40,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    justifyContent: "center"
  },
  btn_style:{
    width: "80%",
    padding: 15,
    marginTop: 40,
    borderRadius: 15,
    backgroundColor: "#00B965",
    justifyContent: "center",
  },
  container_full_white:{
    paddingTop: Constant.statusBarHeight + 100,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  logo_text_title:{
    textAlign: "center",
    padding: 50,
    fontFamily: "San Frans",
    fontSize: 32
  },
  btn_text:{
    color: "#ffffff"
  },
  text_green:{
    color: "#00B965",
  },
  title_bold:{
    fontSize: 20,
    fontWeight: "bold"
  },
  login_input:{
    width: "90%",
    borderColor: "#AEAEAE",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  },
  form_style:{
    width: "90%",
    alignItems: "center",
  }
})

export default style