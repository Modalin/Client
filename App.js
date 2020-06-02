import React from 'react'
import {} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import store from './src/store/index'

//login
import landing_user from './src/pages/login/landing_user'
import identify_user from './src/pages/login/identify_user'
import identify_user_register from './src/pages/register/identify_user'
import login from './src/pages/login/login'
import register_investor from './src/pages/register/register_investor'

//investor
import tab_bottom_investor from './src/pages/Investor/bottom_nav'
import payment from './src/pages/Investor/payment'
import maps from './src/pages/maps/maps'
import detail_business from './src/pages/Investor/detail_business'
import edit_profile from './src/pages/Investor/edit_profile'

//mitra
import createBusiness from './src/pages/mitra/createBusiness'
import tab_bottom_mitra from './src/pages/mitra/bottom_nav'
import image360 from './src/pages/google-vr/Image360'
const Stack = createStackNavigator()

//Firebase
// import * as firebase from 'firebase'
// import { firebaseConfig } from './src/firebase/config'

console.disableYellowBox = true
export default function App() {

  let [fontsLoaded] = useFonts({
    'Segoe-Print': require('./assets/fonts/SegoePrint.ttf'),
    'Gill Sans': require('./assets/fonts/gillsans.ttf'),
  })

  // //Check Firebase App named already exist
  // console.log(firebase.apps.length)
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig)
  // }

  if(!fontsLoaded){
    return(
      <AppLoading></AppLoading>
    )
  }else{
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Create Business */}
          <Stack.Screen name="create business" component={createBusiness} options={{headerShown: false}}/>
          {/* User Login */}
          <Stack.Screen name="landing user" component={landing_user} options={{headerShown: false}}/>
          <Stack.Screen name="identify user" component={identify_user} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="login" component={login} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="register investor" component={register_investor} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="identify user register" component={identify_user_register} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          {/* Investor */}
          <Stack.Screen name="investor" component={tab_bottom_investor} options={{headerShown: false}}/>
          <Stack.Screen name="payment" component={payment} options={{headerShown: false}}/>
          <Stack.Screen name="maps" component={maps} options={{title: "Map",headerTitleStyle: {fontFamily: "Gill Sans"}, headerShown: true}}/>
          <Stack.Screen name="detail business" component={detail_business} options={{headerShown: false}}/>
          <Stack.Screen name="edit profile" component={edit_profile} options={{headerShown: false}}/>
          <Stack.Screen name="image360" component={image360}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}