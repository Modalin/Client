import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

//screen
import landing_user from './src/pages/login/landing_user'
import identify_user from './src/pages/login/identify_user';
import login from './src/pages/login/login';
import maps from './src/pages/maps/maps'
const Stack = createStackNavigator()

export default function App() {

  let [fontsLoaded] = useFonts({
    'Segoe-Print': require('./assets/fonts/SegoePrint.ttf'),
  });

  if(!fontsLoaded){
    return(
      <AppLoading></AppLoading>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="landing user" component={landing_user} options={{headerShown: false}}/>
          <Stack.Screen name="identify user" component={identify_user} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Segoe-Print"}}}/>
          <Stack.Screen name="login" component={login} options={{title: "Modalin", headerTitleStyle:{fontFamily: "Segoe-Print"}}}/> */}
          <Stack.Screen name="maps" component={maps} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}