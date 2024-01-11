import React from 'react';
import { View, Button, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleRegister = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Register');
  };

  const handleHello = () => {
    // 执行登录逻辑，成功后进行页面跳转
    console.log('hello');
    navigation.navigate('Hello');
  };

  return (
    <View>
      {/* 登录表单 */}
      <Button title="Register" onPress={handleRegister} />
      <Button title="Hello" onPress={handleHello} />
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;