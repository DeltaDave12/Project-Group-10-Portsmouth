import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Image, Pressable, ImageBackground, CheckBox } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen({navigation}){
  return (
    <ImageBackground source={require('./img/dicesplash0322.jpg')} resizeMode="cover" style={styles.imageBk}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.50)', 'transparent']}
          style={styles.background}
        />
      <View style={styles.container}>
        <Image source={require('./img/LOGO_Black.png')} style={styles.image}/>
        <View style={styles.login}>
          <View style={styles.buttons}>
            <Pressable style={styles.button1} onPress={() => navigation.navigate('Home')}><Text style={styles.textButton1}>Login</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('SignIn')} style={styles.button2}><Text>Sign in</Text></Pressable>
          </View>
          <Text style={styles.Title}>Login</Text>
          <View style={styles.Icons}>
            <Ionicons name="logo-google" size={40} color="ghostwhite"/>
            <Ionicons name="logo-facebook" size={40} color="ghostwhite"/>
          </View>
          <View style={styles.inputs}>
            <TextInput placeholder='Email' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
          </View>
          <View style={styles.inputs}>
            <TextInput placeholder='Password' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
          </View>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.LoginButton}><Text>Login</Text></Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image: {
      left: 0,
      width: 130,
      height: 100,
    },
    container: {
      marginVertical: 50,
      marginLeft: 10,
      marginBottom: 25,
      
    },
    login: {
      alignItems: 'center',
    },
    buttons: {
      marginTop: 100,
      width: 170,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button1:  {
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      height: 50,
      borderBottomWidth: 3,
      borderColor: '#fcb900',
    },
    textButton1: {
      color: 'ghostwhite',
    },
    button2:  {
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      height: 50,
      backgroundColor: '#fcb900',
    },
    Icons: {
      marginTop: 15,
      width: 125,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    Title: {
      color: 'ghostwhite',
      fontSize: 35,
      marginTop: 50,
    },
    LoginButton: {
      borderRadius: 25,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: 175,
      height: 50,
      backgroundColor: '#fcb900',
    },
    input: {
      backgroundColor: 'rgba(6, 44, 73,0.3)',
      height: 50,
      width: 100,
      borderBottomWidth: 3,
      borderColor: 'gray',
    },
    inputs: {
      marginTop: 50,
      width: 250,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    imageBk: {
      height: 1000,
    },
    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
})