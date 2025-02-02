import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {CalculatorScreen} from './src/presentation/screens/CalculatorScreen'
import {styles} from './src/config/theme/appTheme'

export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <CalculatorScreen />
    </SafeAreaView>
  )
}
