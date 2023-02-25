import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'react-native-web';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
export default function AboutUsScreen({navigation}) {
    let [fontsloaded] = useFonts({
        'Beau-Rivage': require('../assets/fonts/BeauRivage-Regular.ttf'),
        'inter': require('../assets/fonts/Inter-VariableFont_slntwght.ttf'),
      });
    
      if (!fontsloaded) {
        return null;
      }
  return (
      <View>
            <View style={styles.topPage}>
                <View style={styles.Page}>
                    <Text style={styles.Element1}>Lorem ipsum dolor sit amet consectetur. Cursus et malesuada in ut faucibus montes. Nibh mauris orci imperdiet sit pretium lectus malesuada ac egestas. In massa orci purus arcu malesuada. Lorem ipsum dolor sit amet consectetur. Cursus et malesuada in ut faucibus montes. Nibh mauris orci imperdiet sit pretium lectus malesuada .</Text>
                    <Image source={require('./img/DICE-PORTSMOUTH-ALBERT-ROAD-14-2.jpg')} style={styles.Element2}></Image>
                    <Image source={require('./img/gateway-games-for-new.jpg')} style={styles.Element3}></Image>
                    <Text style={styles.Element4}>Lorem ipsum dolor sit amet consectetur. Cursus et malesuada in ut faucibus montes. Nibh mauris orci imperdiet sit pretium lectus malesuada ac egestas. In massa orci purus arcu malesuada. Lorem ipsum dolor sit amet consectetur. Cursus et malesuada in ut faucibus montes. Nibh mauris orci imperdiet sit pretium lectus malesuada .</Text>
                </View>
                    <Image source={require('./img/LOGO_White.fw.png')} style={styles.Logo}/>
                <View style={styles.Icons}>
                    <Ionicons name="menu" size={40} color="#512F07" style={styles.icon1}/>
                    <Ionicons name="search" size={40} color="#512F07" style={styles.icon2}/>
                </View>
                <Text style={styles.Title}>About Us</Text>
            </View>

          <View style={styles.Footer}>
            <View style={styles.iconsFooter}>
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
    Page: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
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
    Title: {
        fontFamily: 'Beau-Rivage',
        fontSize: 72,
        left: '18%',
        top: '18%',
        position: 'absolute',
        color: '#E9BD1F',
    },
    image: {
        position: 'absolute',
        height: 370,
        width: '100%',
    },
    overImage: {
        height: 370,
        width: '100%',
        backgroundColor: 'rgba(51, 32, 9, 0.6)',
    },
    Icons: {
        top: '7%',
        position: 'absolute',
        flexDirection: 'row',
    },
    Logo: {
        position: 'absolute',
        left: '36%',
        top: '7%',
        width: '27%',
        height: '10%',
    },
    icon1: {
        left: '55%',
    },
    icon2: {
        left: '700%'
    },
    Element1: {
        lineHeight: 17,
        fontSize: 15,
        color: '#332009',
        fontFamily: 'inter',
        position: 'absolute',
        top: '32%',
        height: '20%',
        width: '50%',
        left: '4%',
        paddingBottom: 35 - (35 * 0.75),
    },
    Element2: {
        position: 'absolute',
        top: '32%',
        right: '4%',
        width: '40%',
        height: '20%',
        borderRadius: 10,
    },
    Element3: {
        position: 'absolute',
        top: '62%',
        left: '4%',
        width: '40%',
        height: '20%',
        borderRadius: 10,
    },
    Element4: {
        fontSize: 15,
        lineHeight: 17,
        color: '#332009',
        fontFamily: 'inter',
        position: 'absolute',
        top: '62%',
        height: '20%',
        width: '50%',
        right: '4%',
        textAlign: 'right',
        paddingBottom: 35 - (35 * 0.75),
    },
})