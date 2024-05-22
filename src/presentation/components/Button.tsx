import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../../config/theme/appTheme'

interface Props {
  backgroundColor?: string
  content: string
  isWide?: boolean
  textColor?: string
  onPress: (number: string) => void
}

export const Button = ({
  backgroundColor = '#333333',
  textColor = '#ffffff',
  isWide = false,
  content,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(content)}>
      <View
        style={{...styles.button, backgroundColor, width: isWide ? 180 : 80}}>
        <Text style={{...styles.textButton, color: textColor}}>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}
