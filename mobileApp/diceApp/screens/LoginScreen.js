import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Image, Pressable, ImageBackground, CheckBox } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen({navigation}){
  return (
    <ImageBackground source={require('./img/portsmouthabouttop.jpg')} resizeMode="cover" style={styles.imageBk}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.50)', 'transparent']}
          style={styles.background}
        />
      <View style={styles.container}>
        <Image source={require('./img/LOGO_White.fw.png')} style={styles.image}/>
        <View style={styles.login}>
          <View style={styles.buttons}>
            <Pressable style={styles.button1}><Text style={styles.textButton1}>Login</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('SignIn')} style={styles.button2}><Text style={styles.button2Text}>Join us</Text></Pressable>
          </View>
          <View style={styles.Icons}>
            <Ionicons name="logo-google" size={40} color="ghostwhite"/>
            <Ionicons name="logo-facebook" size={40} color="ghostwhite"/>
          </View>
          <View style={styles.inputs}>
            <TextInput placeholder='Mail' style={styles.input} placeholderTextColor="#512F07"></TextInput>
          </View>
          <View style={styles.inputs}>
            <TextInput placeholder='Password' style={styles.input} placeholderTextColor="#512F07"></TextInput>
          </View>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.LoginButton}><Text style={styles.LoginButtonText} >Login</Text></Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image: {
      left: '31%',
      width: 130,
      height: 100,
    },
    container: {
      marginVertical: '15%',
      marginLeft: '5%',
      
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
      color: '#fcb900',
    },
    button2:  {
      alignItems: 'center',
      justifyContent: 'center',
      width: '55%',
      height: '43%',
      backgroundColor: '#fcb900',
      borderRadius: 30,
    },
    button2Text: {
      color: 'white',
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
    LoginButtonText: {
      color: 'ghostwhite',
    },
    input: {
      backgroundColor: 'white',
      paddingLeft: 15,
      height: 35,
      width: 135,
      borderWidth: 0,
      borderColor: 'lightgray',
      borderRadius: 15,
      fontSize: 12,
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