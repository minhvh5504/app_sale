/* eslint-disable no-undef */
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from './styles'

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/images/Ellipse1.png')}></Image>
        <Text
          style={{
            position: 'absolute',
            paddingTop: '12%',
            paddingLeft: '5%',
            fontWeight: '800',
            fontSize: 30,
            color: 'black',
          }}>
          MyTask.ID
        </Text>
        <Text
          style={{
            position: 'absolute',
            paddingTop: '20%',
            paddingLeft: '5%',
            fontWeight: '500',
            fontSize: 28,
            color: 'white',
          }}>
          Sign up
        </Text>
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
        <TextInput placeholder='********' secureTextEntry={true} style={styles.text__Input}></TextInput>
        <Text style={styles.input__Text}>Confirm Password</Text>
        <TextInput placeholder='********' secureTextEntry={true} style={styles.text__Input}></TextInput>
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: '5%'}}>
          <Text style={{paddingLeft: '3%', fontSize: 12, fontWeight: '800'}}>I agree with Terms and Privacy</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <Text style={styles.text__Bottom}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: '3%'}}>
          <Text style={{color: 'black'}}>Already have an account?</Text>
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

export default Login