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
    <body>
        <div class="image-box" >
            <iframe width="100%" height="2000px" src="https://momento360.com/e/u/b9a9d0c82ca74cf18754ebdd187de731?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75">
            </iframe>
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


