/* eslint-disable no-undef */
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React, {useState} from 'react'

import styles from './StylesLogin'
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
        <Text style={styles.text__Task}>Login</Text>
      </View>
      <View
        style={{
          marginHorizontal: '8%',
          marginVertical: '12%',
        }}>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox disabled={false} value={isCheck} onValueChange={() => setCheck(!isCheck)} />
          <Text style={{fontSize: 15, fontWeight: '600', opacity: 0.8}}>Remeber Me</Text>
          <TouchableOpacity>
            <Text style={{paddingLeft: '35%', fontSize: 12, fontWeight: '600', color: 'black'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeTabs')
          }}>
          <Text style={styles.text__Bottom}>Login</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: '500', marginTop: '10%', marginBottom: '5%'}}>or</Text>
        <View style={{flexDirection: 'row', gap: 40}}>
          <Image source={require('../../assets/images/logoGoogle.png')}></Image>
          <Image source={require('../../assets/images/logoApple.png')}></Image>
        </View>
        <View style={{flexDirection: 'row', marginTop: '15%'}}>
          <Text style={{color: 'black', fontSize: 15}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', paddingLeft: '3%', color: '#238C98'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
