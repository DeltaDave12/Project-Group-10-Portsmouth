import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

export default function NewsScreen({navigation}) {
  return (
      <View style={styles.centerButtonFlex}>
          <Button title='Go Back' onPress={() => navigation.goBack()}/>
      </View>
  );
}

const styles = StyleSheet.create({
    centerButtonFlex:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})