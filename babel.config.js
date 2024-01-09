module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    // 加上插件后要 npx expo start -c 清除缓存重启服务器
    // 文档如下：
    // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#what-is-react-native-reanimated
    plugins: ['react-native-reanimated/plugin']
  }
}
