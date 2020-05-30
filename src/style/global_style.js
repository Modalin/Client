import {Dimensions, StyleSheet} from 'react-native'
import Constant from 'expo-constants'

const style = StyleSheet.create({
  containerFull:{
    width: Dimensions.get('window').width,
    paddingTop: Constant.statusBarHeight + 50,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  container_full_white:{
    paddingTop: Constant.statusBarHeight + 50,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  logo_text_title:{
    textAlign: "center",
    padding: 50,
    fontFamily: "Segoe-Print",
    fontSize: 32
  },
  btn_style:{
    width: "80%",
    padding: 20,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#00B965",
    justifyContent: "center"
  },
  btn_text:{
    color: "#ffffff",
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