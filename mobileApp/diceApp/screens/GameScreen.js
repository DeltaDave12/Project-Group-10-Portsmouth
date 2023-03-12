import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Pressable, Alert, TouchableOpacity, Modal, TouchableOpacityComponent } from 'react-native'
import React, { useState, useEffect } from 'react'
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
import NumericInput from 'react-native-numeric-input'

export default function GameScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

    //Filter States
    let [numberOfPlayers, setNumberOfPlayers] = useState();
    let [amountOfMinutes, setAmountOfMinutes] = useState();
    let [kindOfGame, setKindOfGame] = useState();
    const [difficuty, setDifficulty] = useState();

    //Searchbar States
    const [searchBar, setSearchBar] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    //Some Games for SearchBar demo
    //ID goes from 1 to 23
    const gameTitleArray = ['3 wishes', 'Arcadia Quest', '7 Wonders', '7 Wonders', 'Architectura', 'Assembly', 'Avalon', 'Azul', 'Buccaneer Bones', 'Bucket of Doom', 'Carcassonne', 'Cash n Guns', 'Catan', 'Champions of Midguard' , 'Clans of caledonia', 'Cobra Paw', 'Codenames', 'Colony', 'Colour brain', 'Colt express', 'Concept', 'Cortex', 'Coup']


  return (
      <View>
        <ScrollView>
            <View style={styles.topPage}>
                    <Image source={require('./img/gameBG.png')} resizeMode="cover" style={styles.image} />
                    <View style={styles.overImage}></View>
                        <Image source={require('./img/LOGO_White.fw.png')} style={styles.Logo}/>
                    <View style={styles.Icons}>
                    </View>
                    <Text style={styles.Title}>Games</Text>
            </View>
            <View style={[styles.middlePage]}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput placeholder='Search' onChangeText={(text) => setSearchBar(text)} style={[styles.input, {top: '5%'}]} placeholderTextColor="white" multiline={true}></TextInput>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{width: '25%', position: 'absolute', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', left: '70%', top: '80%'}}>
                        <FontAwesome5 name={'filter'} size={25} color="#512F07" style={{}} />
                        <Text style={{left: '0%', color: '#512F07'}}>filter</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <TouchableOpacity onPressOut={() => setModalVisible(!modalVisible)} style={{backgroundColor: '#E9BD1F', width: 300, height: 550, borderRadius: 15, top: 175, left: '15%', position: 'absolute'}}>
                        <View style={[styles.modalView, {}]}>
                            <Text style={{color: '#332009', fontSize: 18, left: '5%'}}>Player</Text>
                            <NumericInput type='up-down' iconSize={25} textColor='black' 
                            iconStyle={{ color: 'black' }}
                            rounded={true}
                            borderColor='#E9BD1F'
                            upDownButtonsBackgroundColor='#E9BD1F'/>

                            <Text style={{color: '#332009', fontSize: 18, left: '5%'}}>Playing Time</Text>
                            <View style={{height: '8%',flexDirection: 'row', justifyContent: 'space-around', width: '90%', flexWrap: 'wrap', left: '5%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>- 15min</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>15-30min</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>30-60min</Text></TouchableOpacity>
                            </View>
                            <View style={{height: '8%',flexDirection: 'row', width: '100%', flexWrap: 'wrap',top: '5%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center', left: '60%'}}><Text style={{fontSize: 12}}>60-90min</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center', left: '90%'}}><Text style={{fontSize: 12}}>+90min</Text></TouchableOpacity>
                            </View>

                            <Text style={{color: '#332009', fontSize: 18, top: '5%', left: '5%'}}>Kind of Game</Text>
                            <View style={{height: '8%',flexDirection: 'row', justifyContent: 'space-around', width: '90%', flexWrap: 'wrap', left: '5%', top: '10%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><AntDesign name="heart" size={25} color="red"/></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><FontAwesome5 name={'shopping-basket'} size={25} color="#512F07"/></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Adults</Text></TouchableOpacity>
                            </View>
                            <View style={{height: '8%',flexDirection: 'row', justifyContent: 'space-around', width: '90%', flexWrap: 'wrap', left: '5%', top: '15%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Role</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Family</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Children</Text></TouchableOpacity>
                            </View>
                            <View style={{height: '8%',flexDirection: 'row', justifyContent: 'space-around', width: '90%', flexWrap: 'wrap', left: '5%', top: '20%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Alone</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Speed</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center'}}><Text style={{fontSize: 12}}>Memory</Text></TouchableOpacity>
                            </View>

                            <Text style={{color: '#332009', fontSize: 18, top: '15%', left: '5%'}}>Difficulty</Text>
                            <View style={{height: '8%',flexDirection: 'row', width: '90%', flexWrap: 'wrap', left: '5%', top: '25%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center', flexDirection: 'row'}}><View style={{backgroundColor: 'red', width:15, height: 15, borderRadius: 15, marginRight: 5}}/><Text style={{fontSize: 12}}>Expert</Text></TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center', flexDirection: 'row', left: '5%'}}><View style={{backgroundColor: '#E9BD1F', width:15, height: 15, borderRadius: 15, marginRight: 5}}/><Text style={{fontSize: 12}}>Medium</Text></TouchableOpacity>
                            </View>
                            <View style={{height: '8%',flexDirection: 'row', width: '90%', flexWrap: 'wrap', left: '5%', top: '30%'}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: '29%', alignItems: 'center', borderRadius: 5, height: '100%', justifyContent: 'center', flexDirection: 'row'}}><View style={{backgroundColor: '#13C93B', width:15, height: 15, borderRadius: 15, marginRight: 5}}/><Text style={{fontSize: 12}}>Easy</Text></TouchableOpacity>
                            </View>

                        </View>
                </TouchableOpacity>
        

                </Modal>

                <View style={{flexDirection: 'row'}}>
                    {gameTitleArray[0].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G1.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>3-5</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>3-5 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                3 Wishes is a simple card game with only 18 cards in the deck.
                                There are 3 different types of wish cards that players are trying to get in front of them. The 3 different types of wishes are Superpower (blue), Gift (yellow), and World Harmony (pink). And players will spend the game 
                                switching cards around between players and the available cards in the center as they work to collect the right mix of cards for themselves.
                            </Text>
                            <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('3Wishes')}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[1].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G2.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>60 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                In Arcadia Quest, players lead guilds of intrepid heroes on an epic campaign to dethrone the vampire lord and reclaim the mighty Arcadia for their own. 
                                But only one guild may lead in the end, so players must battle against each other as well as against the monstrous occupying forces.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '5%',}}>
                    {gameTitleArray[2].toLowerCase().includes(searchBar.toLowerCase()) && 
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G3.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{ flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-7</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>15-30 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                            A game of 7 Wonders is played in three “Ages” of 6 rounds. At the start of each Age, players are dealt 7 cards. An Age has 6 game turns during which the participants will put a card into play that will allow them to perform one of the following three actions: build a building, build a Wonder stage, or receive 3 gold coins.
                            A wonderful strategy game !
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                        }
                    {gameTitleArray[3].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G4.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-7</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>15-30 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                In 7 Wonders, you are at the head of a marvel, one of the seven great cities of the ancient world! Your goal is to develop and prosper your city to make it more influential than those of your opponents. The future of legendary cities like Babylon, Ephesus or Rhodes depends on your management skills.

                                Build an architectural marvel that will transcend future times !
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                        }   
                </View>
                <View style={{flexDirection: 'row', top: '10%'}}>
                    {gameTitleArray[4].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G5.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30-45 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%', fontSize: 13.2}}>
                                The most eminent architects came here to erect a magnificent city with the best theaters, greenhouses, and taverns. Each architect wants to make the most significant contribution to the city construction, but their ambitions will inevitably lead to a challenging competition.
                                Play Architectura by the basic rules or the advanced rules in which you assemble a unique deck for each player. Whichever version you play, each game will be different!
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[5].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G6.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>1-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>10-20 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Assembly is a quick, cooperative or solo, puzzle card game that fits in your pocket.
                                Using the Command Cards in your hand Draw, Swap, and Rotate Room Modules around the ship until they sit on their matching Blueprint where you can lock them into place to build a ship and escape.

                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '15%'}}>
                    {gameTitleArray[6].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G7.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>5-10</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                The Resistance: Avalon pits the forces of Good and Evil in a battle to control the future of civilization. Arthur represents the future of Britain, a promise of prosperity and honor, yet hidden among his brave warriors are Mordred's unscrupulous minions. 
                                The Resistance: Avalon is a standalone game, and while The Resistance is not required to play, the games are compatible and can be combined.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[7].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G8.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30-45 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%', fontSize: 13.5}}>
                            Introduced by the Moors, azuleijos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '20%'}}>
                    {gameTitleArray[8].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G9.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>1-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>15 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                3 Wishes is a simple card game with only 18 cards in the deck.
                                There are 3 different types of wish cards that players are trying to get in front of them. The 3 different types of wishes are Superpower (blue), Gift (yellow), and World Harmony (pink). And players will spend the game switching cards around between players and the available cards in the center as they work to collect the right mix of cards for themselves.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }  
                    {gameTitleArray[9].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G10.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>4-20</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Bucket of Doom is a card based game in a hot pink toxic bucket. Players take it in turns to share their daring escape from impending doom using one of their personal object cards to escape. Players vote for their favourite story, best plan wins.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '25%'}}>
                    {gameTitleArray[10].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G11.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-5</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30-45 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. 
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[11].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G12.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>4-12</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>20 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                A horrible crime has been committed! Conduct the investigation, study the clues given by the medical examiner and try to unmask the murderer hiding among you. But beware, each of you will be entitled to only one accusation. Be observant, because the guilty will do everything to make an innocent person accuse ...At the beginning of the game, a medical examiner is appointed. 
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '30%'}}>
                    {gameTitleArray[12].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G13.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>3-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>60-120 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                In CATAN (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players build by spending resources that are depicted by these resource cards;
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[13].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G14.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>60-90 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Champions of Midgard is a middleweight, Viking-themed, worker placement game with dice rolling in which players are leaders of Viking clans who have traveled to an embattled Viking harbor town to help defend it against the threat of trolls, draugr, and other mythological Norse beasts. By defeating these epic creatures, players gain glory and the favor of the gods. 
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '35%'}}>
                    {gameTitleArray[14].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G15.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>1-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30-120 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Clans of Caledonia is a mid-to-heavy economic game set in 19th-century Scotland. At this time, Scotland made the transition from an agricultural to an industrialized country that heavily relied on trade and export. In the following years, food production increased significantly to feed the population growth. Linen was increasingly substituted by the cheaper cotton and raising sheep was given high importance.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[15].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G16.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-6</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>5-15 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                In Cobra Paw, players take turns rolling the dice — which feature six unique symbols — then race to grab the tile with the matching pattern before anyone else. Whoever grabs six tiles first wins!
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '40%'}}>
                    {gameTitleArray[16].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G17.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-8</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>15 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Codenames is an easy party game to solve puzzles.The game is divided into red and blue, each side has a team leader, the team leader's goal is to lead their team to the final victory.
                                At the beginning of the game, there will be 25 cards on the table with different words. Each card has a corresponding position, representing different colors.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[17].toLowerCase().includes(searchBar.toLowerCase()) &&  
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G18.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>1-4</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>45-60 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                In Colony, each player constructs and upgrades buildings, while managing resources to grow their fledgling colony. In a clever twist, dice are used as resources, with each side/number representing a different resource. Some resources are stable, allowing them to be stored between turns, while others must be used right away.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '45%'}}>
                    {gameTitleArray[18].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G19.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-12</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>30 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                No good at quizzes? Great, because in this game we give you all the answers before you start. All you have to do is work out which of the eleven color cards in your hand correctly answers one of Colourbrain’s crafty questions.
                                Get it right and you could be in luck. Now you need the other teams to get it wrong to walk off with the points — while they turn green with envy.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[19].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G20.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-6</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>40 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%', fontSize: 12.95}}>
                                On the 11th of July, 1899 at 10 a.m., the Union Pacific Express has left Folsom, New Mexico, with 47 passengers on board. After a few minutes, gunfire and hurrying footsteps on the roof can be heard. Heavily armed bandits have come to rob honest citizens of their wallets and jewels. Will they succeed in stealing the suitcase holding the Nice Valley Coal Company's weekly pay, despite it having been placed under the supervision of Marshal Samuel Ford?
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '50%'}}>
                    {gameTitleArray[20].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G21.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>4-12</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>40 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                In Concept, your goal is to guess words through the association of icons. A team of two players – neighbors at the table – choose a word or phrase that the other players need to guess. Acting together, this team places pieces judiciously on the available icons on the game board.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                    {gameTitleArray[21].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G22.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-6</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>15 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%'}}>
                                Cortex Challenge 2 tests up to six players’ memory, cognition, and sensory perception. It even includes texture cards that are used during "touch challenges" in which players must guess what they are feeling, adding a unique element that is often neglected in games.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{flexDirection: 'row', top: '55%'}}>
                    {gameTitleArray[22].toLowerCase().includes(searchBar.toLowerCase()) &&
                        <View style={styles.gameElement}>
                            <Image source={require('./img/G23.png')} style={{width: '65%', height: '25%', left: '15%', top: '5%'}}/>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly', top: '25%'}}>
                                <Text>2-6</Text>
                                <MaterialIcons name="perm-identity" size={25} color="#fcb900"/>
                                <Text>15 min</Text>
                                <AntDesign name="clockcircleo" size={25} color="#fcb900"/>
                            </View>
                            <Text style={{width: '85%', left: '10%', top: '9%', fontSize: 13}}>
                                You are head of a family in an Italian city-state, a city run by a weak and corrupt court. You need to manipulate, bluff and bribe your way to power. Your object is to destroy the influence of all the other families, forcing them into exile. Only one family will survive...
                                In Coup, you want to be the last player with influence in the game, with influence being represented by face-down character cards in your playing area.
                            </Text>
                            <TouchableOpacity style={styles.playButton}><Text style={{color: 'white'}}>Play</Text></TouchableOpacity>
                        </View>
                    }
                </View>
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
    middlePage: {
        height: 8200,
        width: '100%',
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
    Logo: {
        position: 'absolute',
        left: '37%',
        top: '15%',
        width: '25%',
        height: '17%',
    },
    Title: {
        fontFamily: 'Beau-Rivage',
        fontSize: 72,
        right: '30%',
        top: '50%',
        position: 'absolute',
        color: '#E9BD1F',
    },
    input: {
        paddingLeft: 20,
        width: '60%',
        height: '120%',
        left: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(105, 65, 18, 0.6)',
    },
    gameElement: {
        borderRadius: 15,
        borderColor: '#E9BD1F',
        borderWidth: 2,
        width: '43%',
        height: 650,
        marginLeft: '5%',
        top: '15%',
    },
    playButton: {
        position: 'absolute',
        top: '92%',
        left: '25%',
        backgroundColor: '#E9BD1F',
        width: '45%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
})