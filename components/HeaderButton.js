import { HeaderButton } from 'react-navigation-header-buttons'
// ↓↓↓ expoicon文档 ↓↓↓
// https://docs.expo.dev/guides/icons/
// ↓↓↓ icon字典 ↓↓↓
// https://icons.expo.fyi/
import { AntDesign } from '@expo/vector-icons'

import colors from '../constants/colors'
import { Platform } from 'react-native'

const CustomHeaderButton = (props) => {
  return <HeaderButton {...props} IconComponent={AntDesign} iconSize={23} color={Platform.OS === 'android' ? 'white' : colors.primaryColor} />
}

export default CustomHeaderButton
