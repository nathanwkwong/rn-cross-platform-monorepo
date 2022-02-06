/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => {
  const debugging = `
  const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
  console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
    };
`
  // return (
  //   <View>
  //     <Text>hi</Text>
  //     <Text>hi</Text>
  //     <Text>hi</Text>
  //     <Text>hi</Text>
  //     <Text>hi</Text>
  //     <Text>hi</Text>
  //   </View>
  // )
  const onMessage = (payload) => {
    let dataPayload
    console.log(payload)
    try {
      dataPayload = JSON.parse(payload.nativeEvent.data)
    } catch (e) {}

    if (dataPayload) {
      if (dataPayload.type === 'Console') {
        console.info(`[Console] ${JSON.stringify(dataPayload.data)}`)
      } else {
        console.log(dataPayload)
      }
    }
  }
  return (
    <WebView
      source={{ uri: 'http://10.0.2.2:3002' }}
      style={{ marginTop: 20 }}
      injectedJavaScript={debugging}
      onMessage={onMessage}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
})

export default App
