import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}){
  return (
    <View style={styles.container}>
      <TextInput placeholder='Username'></TextInput>
      <TextInput placeholder='Password'></TextInput>
      <Button title='Login' onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})