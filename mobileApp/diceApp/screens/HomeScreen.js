import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground, Pres} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView >
        <ImageBackground source={require('../assets/diceTable.jpg')} resizeMode="cover">
        <View style={styles.container1}>
          <View style={styles.header}>
            <Image style={styles.header.image} source={require('../assets/menu60.png')}/>
            <Image style={styles.header.diceImage} source={require('../assets/logoDiceBlack_1.png')}/>
            <Image style={styles.header.image} source={require('../assets/loupe64.png')}/>
          </View>
        </View>
        </ImageBackground>
        <View style={styles.container2}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
            <Text style={styles.container2.title}>About Us</Text>
            <View style={styles.container2.smallTextView}>
              <Text style={styles.container2.smallTextView.text}>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? 
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity style={{  backgroundColor: 'lightblue', width:200}}>
                  <Text style={{textAlign: 'center'}}>My button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ImageBackground source={require('./img/nourriture_1.jpg')} resizeMode="cover">
        <View style={styles.container3}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{textAlign: 'center', marginTop: '20%'}}>Menu</Text>
            <TouchableOpacity style={{  backgroundColor: 'lightblue', width:200, marginTop: '160%'}}>
              <Text style={{textAlign: 'center'}}>My button</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
        <View style={styles.container4}>
          <Text style={{textAlign: 'center',}}>Events</Text>
          <View style={{ }}>
            <ScrollView horizontal>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
            </ScrollView>
          </View>
          <View style={{ }}>
            <ScrollView horizontal>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
            </ScrollView>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
            <ScrollView horizontal>
              <Image style={styles.container5.image} source={require('./img/eldenRing.jpg')}/>
              <Image style={styles.container5.image} source={require('./img/boardGame_1.jpg')}/>
              <Image style={styles.container5.image} source={require('./img/boardGame_1.jpg')}/>
              <Image style={styles.container5.image} source={require('./img/boardGame_1.jpg')}/>
            </ScrollView>
          </View>
        </View>
        <View style={styles.container6}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '160%'}}>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image style={styles.header.image} source={require('../assets/exterior100.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
            <Image style={styles.header.image} source={require('../assets/calendar100.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image style={styles.header.image} source={require('../assets/flipchart100.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('News')}>
            <Image style={styles.header.image} source={require('../assets/news64.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={styles.header.image} source={require('../assets/profile66.png')}/>
          </TouchableOpacity>
      </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  mainContainer: {

  },

  footer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'black',
    width: ScreenWidth,
    height: 80,

    image:{

    }
  },

  container1: {
    height: ScreenHeight,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,

    image: {
      width: 40,
      height: 40,
    },

    diceImage: {
      width: 60,
      height: 40,
    }
  },

  container2: {
    backgroundColor: 'black',
    height: ScreenHeight,

    title:{
      marginTop: 10,
      textAlign: 'center',
      color: 'white'
      
    },
  
    smallTextView:{
      marginTop: 20,
      width:200,
      height: 200,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'white',
      fontFamily: 'serif',

      text:{
        textAlign: 'center',
        fontSize: 8,
        color: 'white'
      }
    },
  },

  container3: {
    height: ScreenHeight,
  },

  container4: {
    backgroundColor: 'white',
    height: ScreenHeight,
    flexDirection: 'column', 
    justifyContent: 'center',
    justifyContent: 'space-evenly',

    image: {
      justifyContent: 'center',
      width: ScreenWidth,
      height: 200,
      resizeMode: 'contain'
    }
  },

  container5: {
    backgroundColor: 'violet',
    height: ScreenHeight,

    image: {
      height: ScreenHeight,
      width: ScreenWidth + 10,
    }
  },

  container6: {
    backgroundColor: 'brown',
    height: ScreenHeight,
  }
})