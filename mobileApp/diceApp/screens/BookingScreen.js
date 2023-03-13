import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Pressable, Alert } from 'react-native'
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


export default function BookingScreen({navigation}) {
    
    //Initialize Firestore
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;

    //States to get TextInput values
    const [name, setName] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [mail, setMail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [date, setDate] = React.useState('')
    const [hour, setHour] = React.useState('')
    const [nbrPeople, setNbrPeople] = React.useState('')
    const [message, setMessage] = React.useState('')

    //newReservation adds reservation in our firestore
    function newReservation() {
        try {
            const docRef = addDoc(collection(db, "reservations"), {
              Name: name,
              Lastname: lastname,
              Mail: mail,
              Phone: phone,
              Date: date,
              Hour: hour,
              NumberOfPeople: nbrPeople,
              Message: message
            });
            console.log("Document written with ID: ", docRef.id);
            Alert.alert("Reservation completed :" + name + lastname + "on" + date + "at" + hour)
        } catch (e) {
            Alert.alert("Something went wrong :( !")
            console.error("Error adding document: ", e);
        }
    }
        

    // Load the fonts
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
                <Image source={require('./img/dicesplash.jpg')} resizeMode="cover" style={styles.image} />
                <View style={styles.overImage}></View>
                    <Image source={require('./img/LOGO_White.fw.png')} style={styles.Logo}/>
                <View style={styles.Icons}>
                </View>
                <Text style={styles.Title}>Booking</Text>
            </View>
            <View style={styles.bottomPage}>
                <Text style={styles.bottomPageText}>Lorem ipsum dolor sit amet consectetur. Odio in vel ipsum mauris in id cras pulvinar scelerisque. Nec donec nascetur non eget quis amet lorem. Pellentesque enim orci pellentesque faucibus egestas tincidunt. Eget ornare cras aliquam diam sed risus molestie adipiscing aliquet. Nisl phasellus mattis eu in consequat. Mauris mattis aliquet sodales etiam orci cum. Mollis aenean leo consequat malesuada. Risus molestie mattis purus suspendisse accumsan orci cras etiam. Imperdiet porta congue praesent mi cursus molestie sit tincidunt eros.</Text>
                <FontAwesome5 name={'dice-six'} size={40} color="lightgray" style={styles.deco}/>

                <View style={styles.bookSection}>
                    <TextInput value={name} onChangeText={(text) => setName(text)} placeholder='Name' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={lastname} onChangeText={(text) => setLastname(text)} placeholder='Lastname' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={mail} onChangeText={(text) => setMail(text)} placeholder='Mail' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={phone} onChangeText={(text) => setPhone(text)} placeholder='Phone Number' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={date} onChangeText={(text) => setDate(text)} placeholder='Date' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={hour} onChangeText={(text) => setHour(text)} placeholder='Hour' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={nbrPeople} onChangeText={(text) => setNbrPeople(text)} placeholder='Number of people' style={styles.input} placeholderTextColor="white" multiline={true}></TextInput>
                    <TextInput value={message} onChangeText={(text) => setMessage(text)} placeholder='Message' style={styles.inputS} placeholderTextColor="white" multiline={true} numberOfLines={10}></TextInput>
                    <Pressable style={styles.button} onPress={newReservation}><Text style={styles.textButton} >Send</Text></Pressable>
                </View>
            </View>
        </ScrollView>

        <View style={styles.Footer}>
            <View style={styles.iconsFooter}>
                <Ionicons name="home" size={40} color="#323232" onPress={() => navigation.navigate('Home')}/>
                <Text>Home</Text>
            </View>
            <View style={[styles.iconsFooter, {left: '15%'}]}>
                <Ionicons name="calendar" size={40} color="#E9BD1F"/>
                <Text style={{color: '#E9BD1F', bottom: 5}}>Booking</Text>
                <View style={{width: 70, backgroundColor: '#E9BD1F', height: 5, right: 10, borderRadius: 15}}></View>
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
    Logo: {
        position: 'absolute',
        left: '37%',
        top: '15%',
        width: '25%',
        height: '17%',
    },
    button: {
        left: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: '4%',
        borderRadius: 7,
        backgroundColor: '#fcb900',
    },
    textButton: {
        color: 'ghostwhite',
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
    Title: {
        fontFamily: 'Beau-Rivage',
        fontSize: 72,
        right: '30%',
        top: '50%',
        position: 'absolute',
        color: '#E9BD1F',
    },
    topPage: {

    },
    bottomPage: {
        alignItems: 'center',
        height: 1500,
        width: '100%',
        backgroundColor: 'white',
    },
    bottomPageText: {
        top: '4%',
        width: '80%',
        fontFamily: 'inter',
        textAlign: 'center',

    },
    iconsFooter: {

    },
    deco: {
        top: '8%',
    },
    bookSection: {
        justifyContent: 'space-evenly',
        top: '12%',
        height: 900,
        width: '85%',
        borderWidth: 1,
        borderColor: '#E9BD1F',
        marginBottom: 15,
    },
    input: {
        paddingLeft: 20,
        width: '80%',
        height: '6.5%',
        left: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(105, 65, 18, 0.6)',
    },
    inputS: {
        paddingRight: 15,
        paddingBottom: 125,
        paddingLeft: 20,
        width: '80%',
        height: '20%',
        left: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(105, 65, 18, 0.6)',
    },
})