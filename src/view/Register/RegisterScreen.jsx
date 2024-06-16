/* eslint-disable no-undef */
import {View, Text, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import React, {useState} from 'react'

import styles from './StylesRegister'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from '@react-native-community/checkbox'

const LoginScreen = ({navigation}) => {
  const [isCheck, setCheck] = useState(false)

  const [checkPasswordVisible, setPasswordVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/images/Ellipse1.png')}></Image>
        <Text style={styles.text__Logo}>Shop Me</Text>
        <Text style={styles.text__Task}>SignUp</Text>
      </View>
      <View
        style={{
          marginHorizontal: '8%',
          marginVertical: '10%',
        }}>
        <Icon name='email' size={25} color='#A1C4FD' style={styles.input__Icon} />
        <TextInput placeholder='Email' style={styles.text__Input}></TextInput>
        <Icon name='account' size={25} color='#A1C4FD' style={styles.input__Icon} />
        <TextInput placeholder='Username' style={styles.text__Input}></TextInput>
        <Icon name='lock' size={25} color='#A1C4FD' style={styles.input__Icon} />
        <TextInput
          placeholder='Password'
          secureTextEntry={checkPasswordVisible ? false : true}
          style={styles.text__Input}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!checkPasswordVisible)
          }}>
          {checkPasswordVisible ? (
            <Icon name='eye-outline' size={30} color='#A1C4FD' style={styles.eye__Icon} />
          ) : (
            <Icon name='eye-off-outline' size={30} color='#A1C4FD' style={styles.eye__Icon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('sau này làm')
          }}>
          <Text style={styles.text__Bottom}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: '500', marginTop: '10%', marginBottom: '5%'}}>or</Text>
        <View style={{flexDirection: 'row', gap: 40}}>
          <Image source={require('../../assets/images/logoGoogle.png')}></Image>
          <Image source={require('../../assets/images/logoApple.png')}></Image>
        </View>
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          <Text style={{color: 'black', fontSize: 15}}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', paddingLeft: '3%', color: '#238C98'}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
