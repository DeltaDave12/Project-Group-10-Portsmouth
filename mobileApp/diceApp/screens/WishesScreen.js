import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Pressable, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'react-native-web';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";
import { initializeApp, registerVersion } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';

export default function WishesScreen({navigation}) {
    let [fontsloaded] = useFonts({
        'Beau-Rivage': require('../assets/fonts/BeauRivage-Regular.ttf'),
        'inter': require('../assets/fonts/Inter-VariableFont_slntwght.ttf'),
    });
    
    if (!fontsloaded) {
        return null;
    }
  return (
      <View>
        <ScrollView>
        <View style={styles.topPage}>
                <Image source={require('./img/3Wishes.png')} resizeMode="cover" style={styles.image} />
                <View style={styles.overImage}></View>
                    <Image source={require('./img/LOGO_White.fw.png')} style={styles.Logo}/>
                <View style={styles.Icons}>
                </View>
                <AntDesign name="right" size={40} color="white" style={{right: '5%', position: 'absolute', top: '45%'}}/>
                <AntDesign name="left" size={40} color="white" style={{left: '5%', position: 'absolute', top: '45%'}}/>
        </View>
            <View style={{height: 800}}>
                <Text style={styles.Title}>3 Wishes</Text>
                <View style={{flexDirection: 'row', left :'0%', top: '35%', justifyContent: 'space-evenly'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', right: 25}}>
                        <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                        <Text style={{left: 10}}>3-5</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', left: 25}}>
                        <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                        <Text style={{left: 10}}>3-5 min</Text>
                    </View>
                </View>
                <Image style={{top: '25%', right: '2%'}} source={require('./img/decoLong1.png')}/>
                <Text style={{width: 350, height: 350, left: 34, top: '27%'}}>      3 Wishes is a party/family game for 3-5 players that plays in 3-5 minutes. With simple rules, this memory, intuition and bluffing game is as much about playing the game as it is about playing the other players. A poker face will go a long way – well, not too long, since the game may last only three minutes – and it will also serve you well as a fast and fun memory training.</Text>
                <Text style={{width: 350, height: 150, left: 34, top: '0%'}}>
                A not-so-nice-but-not-too-evil genie appears as if from nowhere (someone, somewhere probably did rub a lamp) and pitches the crowd against one another, granting the most astute player no fewer than three wishes — but not all wishes come true, and only the player with the right balance between super powers, benefits for the world, and selfish gifts will be enter the good graces of the genie.
                </Text>
                <Text style={{width: 350, height: 450, left: 34, top: '0%'}}>In more detail, each player has a hand of three cards, with two extra cards face down in the middle of the gaming table. On their turn, each player can either peek at a card or swap cards with other players or the common pool on the table, aiming to get three different type of wish cards. Once that happens, someone calls for the end of the game and all players reveal their hands and compare wish cards to determine the winner.</Text>


            </View>
            </ScrollView>
            <View style={styles.Footer}>
            <View style={styles.iconsFooter}>
                <Ionicons name="home" size={40} color="#323232" onPress={() => navigation.navigate('Home')}/>
                <Text>Home</Text>
            </View>
            <View style={[styles.iconsFooter]}>
                <Ionicons name="calendar" size={40} color="#323232" onPress={() => navigation.navigate('Booking')}/>
                <Text style={{color: '#323232'}}>Booking</Text>
            </View>
            <View style={styles.iconsFooter}>
                <Ionicons name="book-outline" size={40} color="#323232" onPress={() => navigation.navigate('Menu')}/>
                <Text>Menu</Text>
            </View>
            <View style={styles.iconsFooter}>
            <FontAwesome5 name={'dice'} size={40} color="#E9BD1F"/>
                <Text style={{color: '#E9BD1F', bottom: 5}}>Games</Text>
                <View style={{width: 70, backgroundColor: '#E9BD1F', height: 5, right: 10, borderRadius: 15}}></View>
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
        fontSize: 50,
        right: '30%',
        fontFamily: 'Beau-Rivage',
        top: '5%',
        position: 'absolute',
        color: 'black',
    },
    Logo: {
        position: 'absolute',
        left: '40%',
        top: '12%',
        width: '22%',
        height: '15%',
    },
    image: {
        position: 'absolute',
        height: 450,
        width: '100%',
    },
    Icons: {
        top: '15%',
        position: 'absolute',
        flexDirection: 'row',
    },
    icon1: {
        left: '55%',
    },
    icon2: {
        left: '700%'
    },
    overImage: {
        height: 437,
        width: '100%',
        backgroundColor: 'rgba(51, 32, 9, 0.5)',
    },
    buttons: {
        backgroundColor: 'rgba(105, 65, 18, 0.6)',
        width: '75%',
        left: '12%',
        top: '10%',
        marginTop: '7%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    boxButton: {
        borderWidth: 2,
        borderColor: '#E9BD1F',
        left: '12%',
        width: '75%',
        top: '5%',
        height: '70%'
    },
    textButton:{
        color : 'white',
        left: '5%',
    },
})