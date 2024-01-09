import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Register');
  };

  return (
    <View>
      {/* 登录表单 */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;