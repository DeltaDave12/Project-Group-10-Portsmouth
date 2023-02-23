import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
      </View>
      <View style={styles.container2}>
        <Button style={styles.myButton} title='Booking' onPress={() => navigation.navigate('Booking')}/>
      </View>
      <View style={styles.container3}>
        <Button style={styles.myButton} title='Menu' onPress={() => navigation.navigate('Menu')}/>
      </View>
      <View style={styles.container4}>
        <Button style={styles.myButton} title='News & Events' onPress={() => navigation.navigate('News')}/>
      </View>
      <View style={styles.container5}>
      </View>
      <View style={styles.container6}>
      </View>
      <View style={styles.container7}>
      </View>
      <Button style={styles.myButton} title='Profile' onPress={() => navigation.navigate('Profile')} />
      <Button style={styles.myButton} title='Log Out' onPress={() => navigation.navigate('Login')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container1: {
    backgroundColor: 'blue',
  },

  container2: {
    backgroundColor: 'green',
  },

  container3: {
    backgroundColor: 'pink',
  },

  container4: {
    backgroundColor: 'red',
  },

  container5: {
    backgroundColor: 'orange',
  },

  container6: {
    backgroundColor: 'yellow',
  },

  container7: {
    backgroundColor: 'powderblue',
  },
})