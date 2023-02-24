import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignInScreen({navigation}){
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
          <Pressable onPress={() => navigation.navigate('Login')} style={styles.button1}><Text>Login</Text></Pressable>
          <Pressable style={styles.button2}><Text style={styles.textButton2} >Sign in</Text></Pressable>
        </View>
        <Text style={styles.Title}>Sign In</Text>
        <View style={styles.Icons}>
          <Ionicons name="logo-google" size={40} color="ghostwhite"/>
          <Ionicons name="logo-facebook" size={40} color="ghostwhite"/>
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder='Name' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
          <TextInput placeholder='Surname' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
        </View>
        <View style={styles.inputs}>
          <TextInput placeholder='Email' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
          <TextInput placeholder='Password' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
        </View>
        <View style={styles.inputs1}>
          <TextInput placeholder='Birthday Date' style={styles.input} placeholderTextColor="ghostwhite"></TextInput>
        </View>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.SignInButton}><Text>SignIn</Text></Pressable>
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
      backgroundColor: '#fcb900',
    },
    button2:  {
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      height: 50,
      borderBottomWidth: 3,
      borderColor: '#fcb900',
    },
    textButton2: {
      color: 'ghostwhite',
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
    SignInButton: {
      color: 'ghostwhite',
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
      marginTop: 35,
      width: 250,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    inputs1: {
      marginTop: 50,
      width: 200,
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