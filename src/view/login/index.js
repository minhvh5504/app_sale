/* eslint-disable no-undef */
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React, {useState} from 'react'

import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Login = () => {
  const [checkPasswordVisible, setPasswordVisible] = useState(false)
  const [checkPasswordVisible1, setPasswordVisible1] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/images/Ellipse1.png')}></Image>
        <Text style={styles.text__Logo}>MyTask.ID</Text>
        <Text style={styles.text__Task}>Login</Text>
      </View>
      <View
        style={{
          marginHorizontal: '10%',
          marginVertical: '10%',
        }}>
        <Text style={styles.input__Text}>Email</Text>
        <TextInput placeholder='Input your email' style={styles.text__Input}></TextInput>
        <Text style={styles.input__Text}>Password</Text>
        <TextInput
          placeholder='********'
          secureTextEntry={checkPasswordVisible ? false : true}
          style={styles.text__Input}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!checkPasswordVisible)
          }}>
          {checkPasswordVisible ? (
            <Icon name='eye-off' size={30} color='#A1C4FD' style={styles.eye__Icon} />
          ) : (
            <Icon name='eye' size={30} color='#A1C4FD' style={styles.eye__Icon} />
          )}
        </TouchableOpacity>
        <Text style={styles.input__Text}>Confirm Password</Text>
        <TextInput
          placeholder='********'
          secureTextEntry={checkPasswordVisible1 ? false : true}
          style={styles.text__Input}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible1(!checkPasswordVisible1)
          }}>
          {checkPasswordVisible1 ? (
            <Icon name='eye-off' size={30} color='#A1C4FD' style={styles.eye__Icon} />
          ) : (
            <Icon name='eye' size={30} color='#A1C4FD' style={styles.eye__Icon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{paddingLeft: '65%', fontSize: 12, fontWeight: '800'}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <Text style={styles.text__Bottom}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: '3%'}}>
          <Text style={{color: 'black'}}>Dont have an account?</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: '900', paddingLeft: '1%', color: 'blue'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/Ellipse3.png')}
          style={{position: 'absolute', marginTop: '23%'}}></Image>
      </View>
    </View>
  )
}

export default Login
