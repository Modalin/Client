import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux';
import store from './src/store/index';

//screen
import landing_user from './src/pages/login/landing_user';
import identify_user from './src/pages/login/identify_user';
import identify_user_register from './src/pages/register/identify_user';
import login from './src/pages/login/login';
import register_investor from './src/pages/register/register_investor';
import mitraPage from './src/pages/mitra/home';

import tab_bottom_investor from './src/pages/Investor/bottom_nav'
import payment from './src/pages/Investor/payment'
import maps from './src/pages/maps/maps'
const Stack = createStackNavigator()


export default function App() {

  let [fontsLoaded] = useFonts({
    'Segoe-Print': require('./assets/fonts/SegoePrint.ttf'),
    'Gill Sans': require('./assets/fonts/gillsans.ttf'),
  });

  if(!fontsLoaded){
    return(
      <AppLoading></AppLoading>
    )
  }else{
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="landing user" component={landing_user} options={{headerShown: false}}/>
          <Stack.Screen name="identify user" component={identify_user} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="login" component={login} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="register investor" component={register_investor} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="identify user register" component={identify_user_register} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="mitra dashboard" component={mitraPage} options={{title: "Mitra Page", headerTitleStyle:{fontFamily: "Gill Sans"}}}/>
          <Stack.Screen name="investor" component={tab_bottom_investor} options={{headerShown: false}}/>
          <Stack.Screen name="payment" component={payment} options={{headerShown: false}}/>
          <Stack.Screen name="maps" component={maps} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}