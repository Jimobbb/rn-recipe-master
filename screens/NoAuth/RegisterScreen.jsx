import React from 'react';
import { View, Button, Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const handleLogin = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Login');
    // console.log('xxx');
  };

  const handleHello = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Hello');
  };

  return (
    <View>
      {/* 登录表单 */}
      <Button title="Login" onPress={handleLogin} />
      <Button title="Hello" onPress={handleHello} />
      <Text>Register Screen</Text>
    </View>
  );
};

export default RegisterScreen;