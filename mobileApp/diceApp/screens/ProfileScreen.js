import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Pressable, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'react-native-web';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";
import { initializeApp, registerVersion } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';

export default function ProfileScreen({navigation}) {
  return (
      <View>
        <View style={styles.topPage}>
                <Image source={require('./img/imgProfile.png')} resizeMode="cover" style={styles.image} />
                <View style={styles.overImage}></View>
                    <Image source={require('./img/LOGO_White.fw.png')} style={styles.Logo}/>
                <View style={styles.Icons}>
                    <Ionicons name="menu" size={40} color="ghostwhite" style={styles.icon1}/>
                    <Ionicons name="search" size={40} color="ghostwhite" style={styles.icon2}/>
                </View>
                <Text style={styles.Title}>Hi Serket 212 !</Text>
        </View>

        <View style={{height: '59%'}}>
            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.buttons}><Text style={styles.textButton}>User details</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text style={styles.textButton}>Friends</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text style={styles.textButton}>Rewards</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text style={styles.textButton}>Achievments</Text></TouchableOpacity>
            </View>
        </View>


        <View style={styles.Footer}>
            <View style={styles.iconsFooter}>
                <Ionicons name="home" size={40} color="#323232" onPress={() => navigation.navigate('Home')}/>
                <Text>Home</Text>
            </View>
            <View style={[styles.iconsFooter, {left: '15%'}]}>
                <Ionicons name="calendar" size={40} color="#323232" onPress={() => navigation.navigate('Booking')}/>
                <Text>Booking</Text>
            </View>
            <View style={styles.iconsFooter}>
                <Ionicons name="book-outline" size={40} color="#323232" onPress={() => navigation.navigate('Menu')}/>
                <Text>Menu</Text>
            </View>
            <View style={styles.iconsFooter}>
            <FontAwesome5 name={'dice'} size={40} color="#323232" onPress={() => navigation.navigate('Game')}/>
                <Text>Games</Text>
            </View>
            <View style={styles.iconsFooter}>
                <MaterialIcons name="perm-identity" size={40} color="#E9BD1F"/>
                <Text style={{color: '#E9BD1F', bottom: 5}}>Profile</Text>
                <View style={{width: 60, backgroundColor: '#E9BD1F', height: 5, right: 10, borderRadius: 15}}></View>
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
        fontSize: 32,
        right: '23%',
        top: '80%',
        position: 'absolute',
        color: 'white',
    },
    Logo: {
        position: 'absolute',
        left: '40%',
        top: '15%',
        width: '22%',
        height: '15%',
    },
    image: {
        position: 'absolute',
        height: 370,
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
        height: 370,
        width: '100%',
        backgroundColor: 'rgba(51, 32, 9, 0.6)',
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