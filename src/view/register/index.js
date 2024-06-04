/* eslint-disable no-undef */
import {View, Text, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from '@react-native-community/checkbox'

const Register = () => {
  const [isCheck, setCheck] = useState(false)

  const [checkPasswordVisible, setPasswordVisible] = useState(false)
  const [checkPasswordVisible1, setPasswordVisible1] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/images/Ellipse1.png')}></Image>
        <Text style={styles.text__Logo}>MyTask.ID</Text>
        <Text style={styles.text__Task}>Sign up</Text>
      </View>
      <View
        style={{
          marginHorizontal: '10%',
          marginVertical: '10%',
        }}>
        <Text style={styles.input__Text}>Email</Text>
        <TextInput placeholder='Input your email' style={styles.text__Input}></TextInput>
        <Text style={styles.input__Text}>Username</Text>
        <TextInput placeholder='Input your username' style={styles.text__Input}></TextInput>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={isCheck}
            onValueChange={() => setCheck(!isCheck)}
            tintColors={{true: 'yellow'}}
          />
          <Text style={{fontSize: 11, fontWeight: '900'}}>I agree with Terms and Privacy</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <Text style={styles.text__Bottom}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Text style={{fontWeight: '800'}}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: '900', paddingLeft: '1%', color: 'blue'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/Ellipse2.png')}
          style={{position: 'absolute', marginTop: '23%'}}></Image>
      </View>
    </View>
  )
}

export default Register
