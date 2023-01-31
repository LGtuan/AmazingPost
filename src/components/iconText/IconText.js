import { Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from './style'
import colors from '../../colors/color'

const IconText = ({ text, status, src, src2 }) => {

  const [isActive, setActive] = useState(false);

  const changeStatus = () => {
    if (src2 !== '') {
      setActive(!isActive);
    }
  }

  const iconStyle = (status === 'medium' ? styles.imgMedium : styles.imgSmall)
  const textStyle = (status === 'medium' ? styles.textMedium : styles.textSmall)
  return (
    <TouchableOpacity
      disabled={status !== 'medium'}
      onPress={changeStatus}
      style={styles.container}
    >
      <Image style={[iconStyle]} source={isActive ? src2 : src} />
      <Text style={[textStyle, { paddingStart: 2, marginBottom: 4, color: isActive ? colors.color4 : colors.color7 }]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default IconText