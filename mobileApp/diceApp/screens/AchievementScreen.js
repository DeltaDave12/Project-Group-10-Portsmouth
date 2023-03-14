import { StyleSheet, Dimensions , Text, View, Button, Image, ScrollView, TextInput, Pressable, Alert, TouchableOpacity, Modal, TouchableOpacityComponent } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { useFonts } from 'expo-font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function AchievementScreen({navigation}) {

  //AI States
  let [firstSliderValue, setFirstSliderValue] = useState(Number);
  let [secondSliderValue, setSecondSliderValue] = useState(Number);
  let [thirdSliderValue, setThirdSliderValue] = useState(Number);
  let [fourthSliderValue, setFourthSliderValue] = useState(Number);
  let [fifthSliderValue, setFifthSliderValue] = useState(Number);
  let [sixthSliderValue, setSixthSliderValue] = useState(Number);
  let result = firstSliderValue + secondSliderValue + thirdSliderValue + fourthSliderValue + fifthSliderValue + sixthSliderValue

  //ArrayOfGames
  let arrayGames = ['Solitaire', 'Rock Paper Scissors', 'Hungry Hungry Hippo', 'UNO', 'Jungle Speed', 'Hanabi', 'Werewolf', 'Citadelles', 'Poker', 'Dungeons & Dragons', 'Scythe']


  //Fonty fonts
  let [fontsloaded] = useFonts({
    'Beau-Rivage': require('../assets/fonts/BeauRivage-Regular.ttf'),
    'inter': require('../assets/fonts/Inter-VariableFont_slntwght.ttf'),
  });

  if (!fontsloaded) {
    return null;
  }


  return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.Title}>Game Buddy AI</Text>
            <Text style={styles.introText}>Need a game ? Our game buddy can help !</Text>
          </View>
          {/* First Question */}
          <View style={styles.viewQuestion}>
            <Text>How much people do you like to have when playing a game ?</Text>
            <View>
              <Slider 
                style={{width: 200, height: 40}}
                minimumValue={1}
                maximumValue={10}
                thumbTintColor = "#e9bd1f"
                minimumTrackTintColor="#e9bd1f"
                maximumTrackTintColor="#000000"
                value={firstSliderValue}
                step={1}
                onValueChange={(currentValue) => { setFirstSliderValue(currentValue)}}
              /> 
              <View style={styles.viewUnderSlide}>
                <Text style={styles.textUnderSlide}>1</Text>
                <Text style={styles.textUnderSlide}>5</Text>
                <Text style={styles.textUnderSlide}>10+</Text>
              </View>
            </View>
          </View>

          {/* Second Question */}
          <View style={styles.viewQuestion}> 
            <Text>What is a good amount of play time for you ?</Text>
            <View>
              <Slider 
                style={{width: 200, height: 40}}
                minimumValue={1}
                maximumValue={10}
                thumbTintColor = "#e9bd1f"
                minimumTrackTintColor="#e9bd1f"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(currentValue) => { setSecondSliderValue(currentValue)}}
              /> 
              <View style={styles.viewUnderSlide}>
                <Text style={styles.textUnderSlide}>- 5min</Text>
                <Text style={styles.textUnderSlide}>35min</Text>
                <Text style={styles.textUnderSlide}>+ 75min</Text>
              </View>
            </View>
          </View>

          {/* Third Question */}
          <View style={styles.viewQuestion}>
            <Text>Did you play lots of games before ?</Text>
            <View>
              <Slider 
                style={{width: 200, height: 40}}
                minimumValue={1}
                maximumValue={10}
                thumbTintColor = "#e9bd1f"
                minimumTrackTintColor="#e9bd1f"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(currentValue) => { setThirdSliderValue(currentValue)}}
              /> 
              <View style={styles.viewUnderSlide}>
                <Text style={styles.textUnderSlide}>No</Text>
                <Text style={styles.textUnderSlide}>Sometimes</Text>
                <Text style={styles.textUnderSlide}>A lot</Text>
              </View>
            </View>
          </View>

          {/* Fourth Question */}
          <View style={styles.viewQuestion}>
            <Text>Fun or complex ?</Text>
            <View>
              <Slider 
                style={{width: 200, height: 40}}
                minimumValue={1}
                maximumValue={10}
                thumbTintColor = "#e9bd1f"
                minimumTrackTintColor="#e9bd1f"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(currentValue) => { setFourthSliderValue(currentValue)}}
              /> 
              <View style={styles.viewUnderSlide}>
                <Text style={styles.textUnderSlide}>Fun</Text>
                <Text style={styles.textUnderSlide}>In Between</Text>
                <Text style={styles.textUnderSlide}>Complex</Text>
              </View>
            </View>
          </View>

          {/* Fith Question */}
          <View style={styles.viewQuestion}>
            <Text>Luck based or strategic ?</Text>
            <View>
                <Slider 
                  style={{width: 200, height: 40}}
                  minimumValue={1}
                  maximumValue={10}
                  thumbTintColor = "#e9bd1f"
                  minimumTrackTintColor="#e9bd1f"
                  maximumTrackTintColor="#000000"
                  step={1}
                  onValueChange={(currentValue) => { setFifthSliderValue(currentValue)}}
                /> 
                <View style={styles.viewUnderSlide}>
                  <Text style={styles.textUnderSlide}>Luck</Text>
                  <Text style={styles.textUnderSlide}>In Between</Text>
                  <Text style={styles.textUnderSlide}>Strategy</Text>
                </View>
            </View>
          </View>

          {/* Sixth Question */}
          <View style={styles.viewQuestion}>
            <Text>Do you want a kids or adult game ?</Text>
            <View>
                <Slider 
                  style={{width: 200, height: 40}}
                  minimumValue={1}
                  maximumValue={10}
                  thumbTintColor = "#e9bd1f"
                  minimumTrackTintColor="#e9bd1f"
                  maximumTrackTintColor="#000000"
                  step={1}
                  onValueChange={(currentValue) => { setSixthSliderValue(currentValue)}}
                /> 
                <View style={styles.viewUnderSlide}>
                  <Text style={styles.textUnderSlide}>Kids</Text>
                  <Text style={styles.textUnderSlide}>Teenager</Text>
                  <Text style={styles.textUnderSlide}>Adult</Text>
                </View>
            </View>
          </View>

          <View>
            <View style={styles.viewGameImages}>

              {firstSliderValue <= 1 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[0]}</Text></Text>
              }
              {firstSliderValue <= 1 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_solitaire.jpg')} />
              }

              {result < 11 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[1]}</Text></Text>
              }
              {result < 11 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_8.jpg')} />
              }
              
              {result < 13 && result >= 11 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[2]}</Text></Text>
              }
              {result < 13 && result >= 11 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_11.jpg')} />
              }

              {result < 16 && result >= 13 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[3]}</Text></Text>
              }
              {result < 16 && result >= 13 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_13.jpg')} />
              }

              {result < 25 && result >= 16 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[4]}</Text></Text>
              }
              {result < 25 && result >= 16 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_16.png')} />
              }

              {result < 35 && result >= 25 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[5]}</Text></Text>
              }
              {result < 35 && result >= 25 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_25.jpg')} />
              }

              
              {result < 40 && result >= 35 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[6]}</Text></Text>
              }
              {result < 40 && result >= 35 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_35.jpg')} />
              }
              
              {result < 47 && result >= 40 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[7]}</Text></Text>
              }
              {result < 47 && result >= 40 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_40.jpg')} />
              }

              {result < 48 && result >= 47 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[8]}</Text></Text>
              }
              {result < 48 && result >= 47 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_47.jpg')} />
              }

              {result < 50 && result >= 48 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[9]}</Text></Text>
              }
              {result < 50 && result >= 48 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_48.jpg')} />
              }
              
              {result >= 50 && firstSliderValue >= 2 &&
                <Text>You may want to play : <Text style={styles.boldGameText}>{arrayGames[10]}</Text></Text>
              }
              {result >= 50 && firstSliderValue >= 2 &&
                <Image style={styles.viewGameImages.images} source={require('./img/AI_G_50.jpg')} />
              }
            </View>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
      flex: 1,
      width: Dimensions.get('window').width,
      backgroundColor: 'white'
    },

    Title: {
      fontFamily: 'Beau-Rivage',
      fontSize: 50,
      color: '#E9BD1F',
      textShadowColor:'black',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius: 5,
      alignSelf: 'center',
      textAlign: 'center',
    },

    introText : {
      color: '#E9BD1F',
      marginTop: 20,
      fontSize: 20,
      textAlign: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      width: 230,
    },

    viewQuestion:  {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },

    viewUnderSlide: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    textUnderSlide: {
      fontSize: 10,
      textAlign: 'center',
    },

    boldGameText : {
      fontSize: 20,
      fontWeight: 'bold',
    },

    viewGameImages: {
      marginTop: 20,
      alignItems: 'center',
      height: 250,
      
      images:{
        marginTop: 20,
        width: Dimensions.get('window').width/2,
        height: 100,
        resizeMode: 'cover'
      },
    },

})