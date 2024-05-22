import React from 'react'
import {Text, View} from 'react-native'

import {useCalculator} from '../hooks/useCalculator'
import {Button} from '../components/Button'
import {styles} from '../../config/theme/appTheme'

export const CalculatorScreen = () => {
  const {
    lastNumber,
    number,
    buildNumber,
    cleanAll,
    positiveOrNegative,
    deleteNumber,
    divideNumber,
    multiplyNumber,
    substractNumber,
    addNumber,
    calculate,
  } = useCalculator()

  return (
    <View style={styles.container}>
      {lastNumber !== '0' && (
        <Text style={styles.smallResult} numberOfLines={1} adjustsFontSizeToFit>
          {lastNumber}
        </Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* RowButtons */}
      <View style={styles.row}>
        <Button
          content='C'
          backgroundColor='#9b9b9b'
          textColor='#000000'
          onPress={cleanAll}
        />
        <Button
          content='+/-'
          backgroundColor='#9b9b9b'
          textColor='#000000'
          onPress={positiveOrNegative}
        />
        <Button
          content='D'
          backgroundColor='#9b9b9b'
          textColor='#000000'
          onPress={deleteNumber}
        />
        <Button content='/' backgroundColor='#ff9427' onPress={divideNumber} />
      </View>

      {/* RowButtons */}
      <View style={styles.row}>
        <Button content='7' onPress={buildNumber} />
        <Button content='8' onPress={buildNumber} />
        <Button content='9' onPress={buildNumber} />
        <Button
          content='x'
          backgroundColor='#ff9427'
          onPress={multiplyNumber}
        />
      </View>

      {/* RowButtons */}
      <View style={styles.row}>
        <Button content='4' onPress={buildNumber} />
        <Button content='5' onPress={buildNumber} />
        <Button content='6' onPress={buildNumber} />
        <Button
          content='-'
          backgroundColor='#ff9427'
          onPress={substractNumber}
        />
      </View>

      {/* RowButtons */}
      <View style={styles.row}>
        <Button content='1' onPress={buildNumber} />
        <Button content='2' onPress={buildNumber} />
        <Button content='3' onPress={buildNumber} />
        <Button content='+' backgroundColor='#ff9427' onPress={addNumber} />
      </View>

      {/* RowButtons */}
      <View style={styles.row}>
        <Button content='0' isWide onPress={buildNumber} />
        <Button content='.' onPress={buildNumber} />
        <Button content='=' backgroundColor='#ff9427' onPress={calculate} />
      </View>
    </View>
  )
}
