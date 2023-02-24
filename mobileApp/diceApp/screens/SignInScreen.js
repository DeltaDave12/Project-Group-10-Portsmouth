import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignInScreen({navigation}){
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
          <Pressable onPress={() => navigation.navigate('Login')} style={styles.button1}><Text style={styles.textButton1}>Login</Text></Pressable>
          <Pressable style={styles.button2}><Text style={styles.textButton2} >Join us</Text></Pressable>
        </View>
        <View style={styles.Icons}>
          <Ionicons name="logo-google" size={40} color="ghostwhite"/>
          <Ionicons name="logo-facebook" size={40} color="ghostwhite"/>
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder='Surname' style={styles.input} placeholderTextColor="#512F07"></TextInput>
          <TextInput placeholder='Name' style={styles.input} placeholderTextColor="#512F07"></TextInput>
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder='Mail' style={styles.input} placeholderTextColor="#512F07"></TextInput>
          <TextInput placeholder='Password' style={styles.input} placeholderTextColor="#512F07"></TextInput>
        </View>
        <View style={styles.inputs1}>
          <TextInput placeholder='Birthday Date' style={styles.input} placeholderTextColor="#512F07"></TextInput>
        </View>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.SignInButton}><Text style={styles.SignInButtonText}>Create</Text></Pressable>
      </View>
      
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image: {
      top: '1%',
      left: '35%',
      width: '30%',
      height: '10%',
    },
    container: {
      marginVertical: '10%',
      marginLeft: '0%',
    },
    login: {
      alignItems: 'center',
    },
    buttons: {
      marginTop: '24%',
      width: '45%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button1:  {
      alignItems: 'center',
      justifyContent: 'center',
      width: '55%',
      height: '38%',
      borderRadius: 30,
      backgroundColor: '#fcb900',
    },
    button2:  {
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: '38%',
      borderBottomWidth: 3,
      borderColor: '#fcb900',
    },
    textButton2: {
      color: '#fcb900',
    },
    textButton1: {
      color: 'white',
    },
    Icons: {
      marginTop: 15,
      width: '35%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    Title: {
      color: 'ghostwhite',
      fontSize: 35,
      marginTop: '0%',
    },
    SignInButton: {
      color: 'ghostwhite',
      borderRadius: 25,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      height: '7%',
      backgroundColor: '#fcb900',
    },
    SignInButtonText: {
      color: 'ghostwhite'
    },
    input: {
      backgroundColor: 'white',
      paddingLeft: 15,
      height: '125%',
      width: 135,
      borderWidth: 0,
      borderColor: 'lightgray',
      borderRadius: 15,
      fontSize: 14,
    },
    inputs: {
      marginTop: 35,
      width: '80%',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    inputs1: {
      marginTop: 50,
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    imageBk: {
      height: '100%',
      width: '100%',
    },
    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
})