import React from 'react'
import {} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import store from './src/store/index'

//splash
import Splash from './src/pages/login/splahScreen'

//login
import LandingUser from './src/pages/login/landing_user'
import IdentifyUser from './src/pages/login/identify_user'
import IdentifyUserRegister from './src/pages/register/identify_user'
import Login from './src/pages/login/login'
import RegisterInvestor from './src/pages/register/register_investor'
import RegisterMitra from './src/pages/register/register_mitra'

//investor
import TabInvestor from './src/pages/Investor/bottom_nav'
import Payment from './src/pages/Investor/payment'
import DetailBusinessInvestor from './src/pages/Investor/detail_business'
import EditProfileInvestor from './src/pages/Investor/edit_profile'

//mitra
import TabMitra from './src/pages/mitra/bottom_nav';
import DetailBusinessMitra from './src/pages/mitra/detail';
import MonthlyReports from './src/pages/mitra/repot';
import CreateBusiness from './src/pages/mitra/createBusiness'
import image360 from './src/pages/google-vr/Image360'
import Location from './src/pages/maps/Locations'
const Stack = createStackNavigator()

console.disableYellowBox = true
export default function App() {

  let [fontsLoaded] = useFonts({
    'Segoe-Print': require('./assets/fonts/SegoePrint.ttf'),
    'Gill Sans': require('./assets/fonts/gillsans.ttf'),
    'San Frans': require('./assets/fonts/SFUIDisplay-Bold.ttf')
  })

  if(!fontsLoaded){
    return(
      <AppLoading></AppLoading>
    )
  }else{
    return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* User Login */}
          <Stack.Screen name="landing user" component={LandingUser} options={{headerShown: false}}/>
          <Stack.Screen name="identify user" component={IdentifyUser} options={{title: "Modalin", headerTitleStyle: {fontFamily: "San Frans", fontWeight: "bolder", backgroundColor: '21bf73'},  headerTintColor: '#fff'}}/>
          <Stack.Screen name="identify user register" component={IdentifyUserRegister} options={{title: "Modalin", headerTitleStyle: {fontFamily: "San Frans", fontWeight: "bolder", backgroundColor: '21bf73'},  headerTintColor: '#fff'}}/>
          <Stack.Screen name="login" component={Login} options={{title: "Login", headerTitleStyle: {fontFamily: "San Frans", fontWeight: "bolder", backgroundColor: '21bf73'},  headerTintColor: '#fff'}}/>
          <Stack.Screen name="register investor" component={RegisterInvestor} options={{title: "Investor", headerTitleStyle: {fontFamily: "San Frans", fontWeight: "bolder", backgroundColor: '21bf73'},  headerTintColor: '#fff'}}/>
          <Stack.Screen name="register mitra" component={RegisterMitra} options={{title: "Mitra", headerTitleStyle: {fontFamily: "San Frans", fontWeight: "bolder", backgroundColor: '21bf73'},  headerTintColor: '#fff'}}/>
          {/* Investor */}
          <Stack.Screen name="investor" component={TabInvestor} options={{headerShown: false}}/>
          <Stack.Screen name="payment" component={Payment} options={{headerShown: false}}/>
          <Stack.Screen name="detail business" component={DetailBusinessInvestor} options={{headerShown: false}}/>
          <Stack.Screen name="edit profile" component={EditProfileInvestor} options={{headerShown: false}}/>
          {/* Mitra */}
          <Stack.Screen name="mitra" component={TabMitra} options={{headerShown: false}}/>
          <Stack.Screen name="detail business mitra" component={DetailBusinessMitra} options={{headerShown: false}} />
          <Stack.Screen name="repot" component={MonthlyReports} options={{title: 'Laporan'}} />
          <Stack.Screen name="create business" component={CreateBusiness} options={{headerShown: false}}/>
          <Stack.Screen name="maps" component={Location} options={{title: "Pilih Lokasi Bisnis",headerTitleStyle: {fontFamily: "San Frans", fontWeight: "bolder", backgroundColor: '21bf73'},  headerTintColor: '#fff',  headerShown: false}}/>

        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}