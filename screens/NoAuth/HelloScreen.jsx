import { StyleSheet, Text, View, Button } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react'

const HelloScreen = () => {
  const handleLogin = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Login');
    // console.log('xxx');
  };

  const handleRegister = () => {
    // 执行登录逻辑，成功后进行页面跳转
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="search" size={50} color="white" />
      </View>
      <Text style={styles.text}>DigiPay</Text>
      <Button style={styles.button} title="Register" onPress={handleRegister} />
      <Button style={styles.button} title="Login" onPress={handleLogin} />
    </View>
  )
}

export default HelloScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '80%',
        height: 20,
        backgroundColor: '#1A87DD',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})