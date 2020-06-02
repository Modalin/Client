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
    <title> 360 Image</title>
    </head>
    <body style="height:100vh">
        <div class="image-box" style="height:100vh">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DEXDDyb6t2o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </body>
    </html>
  `
  return (
   <WebView
            source={{html: imagePage
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


