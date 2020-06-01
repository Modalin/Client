import React from 'react';
import {WebView} from 'react-native-webview'
import {StyleSheet} from 'react-native'


console.disableYellowBox = true
export default function Image360() {

  const imageUrl = "https://images.unsplash.com/photo-1450387635522-8ecb968079bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"

  let jsCode = `
  document.querySelector('').style.backgroundColor = 'red';
`;
  const imagePage = `
  <!DOCTYPE html>
  <html>
      <head>
      <title> Gambar 360  </title>
      </head>
      <body>
        <a-scene>
            <img id="panorama" src="https://4.bp.blogspot.com/-wWrAiyiMxGo/WYBi00nxR_I/AAAAAAAAIas/triIz0uDWG84E21VVqp9-OWfmJJ4pnbbACLcBGAs/s1600/Cara%2BMembuat%2BFoto%2B360%2BDerajat%2Bdi%2BFacebook.jpg" />
            <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
        </a-scene>
        </body>
      </html>
  `
  return (
   <WebView
            source={{html: imagePage 
            }}
            style={style.container}
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


