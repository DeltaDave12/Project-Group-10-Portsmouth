import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground, Pres} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';


const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  let [fontsloaded] = useFonts({
    'Beau-Rivage': require('../assets/fonts/BeauRivage-Regular.ttf'),
    'inter': require('../assets/fonts/Inter-VariableFont_slntwght.ttf'),
  });

  if (!fontsloaded) {
    return null;
  }

  return (
    <View>
      <ScrollView >
        <ImageBackground source={require('./img/leeThrowingDice.jpg')} resizeMode="cover">
        <View style={styles.container1}>
          <View style={styles.header}>
            <Ionicons name="menu" size={40} color="ghostwhite" />
            <Image style={styles.header.diceImage} source={require('./img/LOGO_White.fw.png')}/>
            <Ionicons name="search" size={40} color="ghostwhite" />
          </View>
          <View style={{justifyContent:"center", alignItems: "center", height: ScreenHeight, marginTop: -80, }}>
            <Text style={styles.Title}>Welcome to</Text>
            <Text style={styles.Title}>my Tavern !</Text>
          </View>
        </View>
        </ImageBackground>


        <View style={styles.container2}>
          <View style={{ alignItems: 'center', height: ScreenHeight, width: ScreenWidth}}>
            <Text style={[styles.Title, {marginTop: 20, fontSize: 38, textShadowRadius: 0,}]}>About Us</Text>
            <FontAwesome5 name="asterisk" size={30} color="lightgrey" style={{marginTop: 10}}/>
            <View style={[styles.container2.smallTextView, {marginTop: 20}]}>
              <Text style={styles.container2.smallTextView.text}>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? 
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
              <TouchableOpacity style={styles.container2.button}>
                  <Text style={{textAlign: 'center', color: 'ghostwhite'}}>More</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image style={[styles.container2.image,{borderColor: 'white', borderWidth: 5,}]} source={require('./img/gateway-games-for-new.jpg')}/>
              <Image style={[styles.container2.image,{borderColor: 'white', borderWidth: 5,}]} source={require('./img/ownersFront.jpg')}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={[styles.container2.image,{borderColor: 'white', borderWidth: 5,}]} source={require('./img/diceFrontLogo.jpg')}/>
              <Image style={[styles.container2.image,{borderColor: 'white', borderWidth: 5,}]} source={require('./img/peoplePlaying_1.jpg')}/>
          </View>
          </View>
        </View>


        <ImageBackground source={require('./img/nourriture_1.jpg')} resizeMode="cover">
        <View style={styles.container3}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={[styles.Title, {textAlign: 'center', marginTop: '20%'}]}>Menu</Text>
            <TouchableOpacity style={[styles.container2.button, { marginTop: '140%'}]}>
              <Text style={{textAlign: 'center', color: 'ghostwhite'}}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>


        <View style={styles.container4}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={[styles.Title,{textAlign: 'center', textShadowRadius: 0,}]}>Events</Text>
            <FontAwesome5 name="asterisk" size={30} color="lightgrey" style={{marginTop: 10, alignItems: 'center'}}/>
            <View style={{ marginTop: 20}}>
              <ScrollView horizontal>
                <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
                <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
                <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
                <Image style={styles.container4.image} source={require('./img/eventExample_1.png')}/>
              </ScrollView>
            </View>
            <View>
            </View>
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


      <View style={styles.Footer}>
            <View >
                <Ionicons name="home" size={40} color="#323232" onPress={() => navigation.navigate('Home')}/>
                <Text>Home</Text>
            </View>
            <View style={styles.iconsFooter}>
                <Ionicons name="calendar" size={40} color="#323232" onPress={() => navigation.navigate('Booking')}/>
                <Text>Booking</Text>
            </View>
            <View style={styles.iconsFooter}>
                <Ionicons name="book-outline" size={40} color="#323232" onPress={() => navigation.navigate('Menu')}/>
                <Text>Menu</Text>
            </View>
            <View style={styles.iconsFooter}>
            <FontAwesome5 name={'dice'} size={40} color="#323232" onPress={() => navigation.navigate('News')}/>
                <Text>Games</Text>
            </View>
            <View style={styles.iconsFooter}>
                <MaterialIcons name="perm-identity" size={40} color="#323232" onPress={() => navigation.navigate('Profile')}/>
                <Text>Profile</Text>
            </View>
        </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  mainContainer: {

  },

  Footer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    backgroundColor: 'ghostwhite',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0.2,
    borderColor: 'lightgray',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  container1: {
    height: ScreenHeight,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,

    diceImage: {
      width: 60,
      height: 40,
    }
  },

  Title: {
    fontFamily: 'Beau-Rivage',
    fontSize: 40,
    color: '#E9BD1F',
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius: 5,
},

  container2: {
    backgroundColor: 'ghostwhite',
    height: ScreenHeight,
    

    title:{
      textAlign: 'center',
      color: 'black',
    },
  
    smallTextView:{
      
      width:250,
      height: 170,
      fontFamily: 'serif',
      

      text:{
        textAlign: 'center',
        fontSize: 8,
        color: 'black'
      }
    },

    button: {
      justifyContent: 'center',
      backgroundColor: '#fcb900',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      width: 100,
      height: 40,
    },

    image: {
      width: 150,
      height: 125,
      resizeMode: 'stretch'
    }
  },

  container3: {
    height: ScreenHeight,
  },

  container4: {
    backgroundColor: 'white',
    height: ScreenHeight/1.5,

    image: {
      justifyContent: 'center',
      width: ScreenWidth,
      height: 200,
      resizeMode: 'contain'
    }
  },

  container5: {
    backgroundColor: 'white',
    height: ScreenHeight,

    image: {
      height: ScreenHeight,
      width: ScreenWidth + 10,
    }
  },

  container6: {
    backgroundColor: 'white',
    height: ScreenHeight,
  }
})