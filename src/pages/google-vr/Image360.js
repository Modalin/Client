import React from 'react';
import {WebView} from 'react-native-webview'
import {StyleSheet} from 'react-native'


console.disableYellowBox = true
export default function Image360() {

  const imageUrl = "https://roundme.com/tour/408702/view/1425791/"
  const imagePage = `
  <!DOCTYPE html>
  <html>
      <head>
      <title> Gambar 360 </title>
      <script type="text/javascript" src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
      </head>
      <body id="test">
        <a-scene>
            <img id="panorama" src=${imageUrl} />
            <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
        </a-scene>
        </body>
      </html>
  `
  return (
   <WebView
            source={{uri: imageUrl
            }}
            // scalesPageToFit={false}
            // injectedJavaScript={jsCode}
            javaScriptEnabled={true}
            // style={style.container}
  />
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


