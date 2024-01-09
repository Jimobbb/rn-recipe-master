import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const CategoriesGridTile = (props) => {
  const { onSelect, title, color } = props
  let TouchableComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }
  console.log('看看prop', props);
  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={onSelect} style={{ flex: 1 }}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    // 解决渲染超过边界
    borderRadius: 10,
    overflow: 'hidden',
    // iOS阴影
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // 安卓阴影
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
})

export default CategoriesGridTile
