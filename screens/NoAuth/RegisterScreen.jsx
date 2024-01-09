import React from 'react';
import { View, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const handleLogin = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Login');
    // console.log('xxx');
  };

  return (
    <View>
      {/* 登录表单 */}
      <Button title="Register" onPress={handleLogin} />
    </View>
  );
};

export default RegisterScreen;