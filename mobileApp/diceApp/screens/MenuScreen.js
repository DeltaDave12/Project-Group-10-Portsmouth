import { StyleSheet, Text, View, Button, Alert, Image, ScrollView, TextInput, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'react-native-web';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts } from 'expo-font';


import { Audio } from 'expo-av';

export default function MenuScreen({navigation}) {
    
    //Sound effect 
    const [sound, setSound] = React.useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [currentItems, setCurrentItems] = useState('');
    const [itemsArray, setItemsArray] = useState(Array)

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/pop.mp3')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
      }
    
      React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    //Items That you Buy

    const showItems = () => {
        let stringItems = JSON.stringify(itemsArray)
        setCurrentItems(stringItems)
        console.log(stringItems)
    }

    const functionForModal = () => {
        showItems()
        setModalVisible(true)
    }
   

    //Fonts
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
                <Image source={require('./img/Menu.png')} resizeMode="cover" style={styles.image} />
                <View style={styles.overImage}></View>
                    <Image source={require('./img/LOGO_White.fw.png')} style={styles.Logo}/>
                <View style={styles.Icons}>
                    <Ionicons name="menu" size={40} color="ghostwhite" style={styles.icon1}/>
                    <Ionicons name="search" size={40} color="ghostwhite" style={styles.icon2}/>
                </View>
                <Text style={styles.Title}>Menu</Text>
            </View>
            <Modal visible={modalVisible} useNativeDriver={true} onRequestClose={() => {setModalVisible(!modalVisible);}}>
                <Button
                onPress={() => setModalVisible(!modalVisible)} title='Close Modal'>
                </Button>
                <View>
                    <Text>{currentItems}</Text>
                </View>
            </Modal>
            <View style={styles.Menu}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
                    <TouchableOpacity onPress={functionForModal}><Image source={require('./img/grocery100.png')} style={{width: 50, height: 50, flexDirection: 'row', alignItems: 'center',}}/></TouchableOpacity>
                    <TouchableOpacity onPress={() => setItemsArray([])} style={{marginTop: 20}}><Text>Remove Items</Text></TouchableOpacity>
                </View>
                <Text style={styles.TitleMenu}>Drinks</Text>
                <Text style={[styles.TitleMenuSecondary, {top: '1%'}]}>Hot Drinks</Text>
                <View style={{marginTop: 100, left: '5%', width: '85%'}} >
                    <Text style={styles.MenuInfo}>Our Coffee</Text>
                    <Text style={styles.MenuText}>We are delighted to serve Moonroast Coffee, locally roasted in Alresford. Our house coffee is Lunar which is an ethically sourced blend from Brazil/Colombia/Sumatra.</Text>
                </View>
                <View style={styles.DrinksMenu}>
                    <View style={styles.imageMenu}>
                        <View>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/coffe1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Espresso / Long Black</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Expresso')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Expresso')}><AntDesign name="minus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.40</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/coffee3.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Mocha</Text>
                                        <TouchableOpacity onPress={() => itemsArray.push('Moccq')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£3.25</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                        <View  style={styles.imagesMenu}>
                                <Image source={require('./img/coffee2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Cappuccino / Flat White / Latte</Text>
                                        <TouchableOpacity onPress={() => itemsArray.push('Cappucino')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.95</Text>
                                </View>
                            </View>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/coffee4.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Hot Chocolate</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Hot Chocolate')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£3.5</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row', width: '30%', top: '15%', left: '1.20%'}}>
                        <View>
                            <Image source={require('./img/extras.png')}/>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.MenuText}>Pot of Tea</Text>
                                <TouchableOpacity onPress={ () => itemsArray.push('Pot of tea')} style={{left: '80%'}}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                            </View>
                            <Text style={styles.MenuInfo}>£2.5</Text>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', left: '15%', top: '25%'}}>
                                <Text style={styles.MenuText}>Add Vanilla, Hazelnut or Caramel syrup</Text>
                                <Text style={[styles.MenuInfo, {left: '50%'}]}>£0.50</Text>
                            </View>
                            <View style={{flexDirection: 'row', left: '15%', top: '45%', width: '80%'}}>
                                <Text style={styles.MenuText}>Dairy free milks and decaf available</Text>
                                <Text style={[styles.MenuInfo, {left: '35%'}]}>£0.50</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{top: '5%', left: '7%', width: '35%'}}>
                        Choose from: Everyday tea, Earl Grey, Peppermint, Green Tea, Chai, Rooibos, Chamomile.
                    </Text>



                    <Text style={[styles.TitleMenuSecondary, {top: '7%', left: '7%'}]}>Cold Drinks</Text>



                    <View style={[styles.imageMenu2, {top: '10%', height: '45%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/CD1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Coca Cola</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Coca Cola')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/CD2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Diet Coke / Coke Zero / Pepsi Max</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Diet Coke')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£1.80</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/CD3.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuTextDrinks, {marginLeft: '5%', width: '45%'}]}>Dr Pepper</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Dr Pepper')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/CD4.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>R. Whites Lemonade</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('R. Whites Lemonade')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£1.80</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/CD5.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Barr American Cream Soda</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('American Cream Soda')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£1.80</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/CD6.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Old Jamaica Ginger Beer</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Old Jamaica Ginger Beer')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/CD7.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>San Pellegrino Blood Orange</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('San Pellegrino Blood Orange')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/CD8.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>J2O - Apple & Raspberry</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('J20 - Apple & Raspberry')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.5</Text>
                                    </View>
                                </View>
                        </View>
                            
                    </View>


                    <Text style={[styles.TitleMenuSecondary, {top: '13%', left: '7%'}]}>Beer & Cider</Text>


                    <View style={[styles.imageMenu2, {top: '15%', height: '45%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/B1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Heineken Alcohol Free (330ml)</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Heineken Alcohol Free')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.80</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/B2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Coors Light (500ml)</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Coors Light')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£3.90</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/B3.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuTextDrinks, {marginLeft: '5%', width: '45%'}]}>Peroni (330ml)</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Peroni')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£3.90</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/B4.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Fullers London Pride (500ml)</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Fullers London Pride')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£4.25</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/B5.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Cornish Orchards -Gold Cider (500ml)</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Cornish Orchards - Gold Cider')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View> 
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£4.50</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/B6.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'55%'}]}>Weihenstephaner HefeWeissbier (500ml)</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Weihenstep Hefe Weissbier')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£5.25</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/B7.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Erdinger Dunkel (500ml)</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Erdinger Dunkel')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£5.25</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/B8.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Old Mout Fruit Cider (500ml)</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Old Mount Fruit Cider')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£4.50</Text>
                                    </View>
                                </View>
                        </View>
                            
                    </View>

                    <View style={[styles.TitleMenuSecondary, {top: '125%', left: '1%', flexDirection: 'row', alignItems: 'center'}]}>
                        <Text style={styles.TitleMenuSecondary}>Wine</Text>
                        <Text style={{left :'60%', color: '#332009', fontSize: 16}}>(125ml/175ml/250ml/Bottle)</Text>
                    </View>

                    <View style={[styles.imageMenu2, {top: '22%', height: '45%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/W1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'45%'}]}>Cavatina Pinot Grigio, Venezie Italy</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Cavatina Pinot Grigio')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£(3.00/4.00/5.50/16.00)</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/W2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Waipapa Bay Sauvignon Blanc, Marlborough</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Waipapa Bay Sauvignon Blanc')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£(3.50/4.50/6.50/18.50)</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/W3.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuTextDrinks, {marginLeft: '5%', width: '65%'}]}>Borde Rio Malbec, Mendoza Argentina</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Borde Rio Malbec')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£(3.00/4.00/5.50/16.50)</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/W4.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Campo Dorado Rioja Crianza, Spain</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Campo Dorado Rioja Crianza')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£(3.50/4.50/6.50/18.50)</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/W5.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Prosecco Spumante DOC, Italy</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Prosecco Spumante DOC')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£(4.00/ - / - /19.50)</Text>
                                    </View>
                            </View>
                        </View>
                            
                    </View>

                    <Text style={[styles.TitleMenu, {top: '15%'}]}>Food</Text>
                    <Text style={[styles.TitleMenuSecondary, {top: '17%', left: '7%'}]}>Snack Bag</Text>
                    
                    <View style={{flexDirection: 'row', top: '110%', width: '100%'}}>
                        <Text style={[styles.MenuText, {marginLeft: '7%', width:'65%', fontSize: 20}]}>Any 3 different items</Text>
                        <Text style={[styles.MenuInfo, {marginLeft: '7%', fontSize: 20}]}>£6</Text>
                    </View>



                    <View style={[styles.imageMenu2, {top: '20%', height: '45%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/SN1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Roasted corn nuts</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Roasted Corn Nuts')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/SN2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Pretzels</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Pretzels')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SN3.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuTextDrinks, {marginLeft: '5%', width: '45%'}]}>Cheddars</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Cheddars')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SN4.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Wasabi peas</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Wasabi Peas')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.5</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SN5.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Pork scratchings</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Pork scratchings')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.5</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SN6.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'55%'}]}>Chilli rice crackers</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Chili rice crackers')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.5</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SN7.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Tomato & basil savoury bites</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Tomato & basil savoury bites')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.5</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SN8.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Mixed sweets </Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Mixed sweets')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£2.5</Text>
                                    </View>
                                </View>
                        </View>
                            
                    </View>

                    <Text style={[styles.TitleMenuSecondary, {top: '23%', left: '7%'}]}>Snack Bag</Text>
                    <Text style={[styles.MenuText, {top: '24%', left: '7%', width: '85%'}]}>Toasted and served in sourdough with the choice of crisps & salad or tortilla chips & salsa</Text>

                    <View style={[styles.imageMenu2, {top: '25%', height: '45%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/SD1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Turkey Pesto</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Turkey Pesto')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/SD2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Tuna Melt</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Tuna melt')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SD3.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuTextDrinks, {marginLeft: '5%', width: '45%'}]}>Spicy Pizza</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Spicy Pizza')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.75</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SD4.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Ham and brie</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Ham and Brie')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                    </View>
                                </View>
                        </View>

                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SD5.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'65%'}]}>Reuben</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Reuben')}><AntDesign name="plus" size={25} color="#E9BD1F" style={[styles.plusIcon, {left: '5%'}]}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                    </View>
                            </View>
                                <View  style={styles.imagesMenu}>
                                    <Image source={require('./img/SD6.png')} style={styles.imageMenu}/>
                                    <View style={styles.description}>
                                        <View style={{flexDirection: 'row',}}>
                                            <Text style={[styles.MenuText, {marginLeft: '5%', width:'55%'}]}>Cheese and pesto</Text>
                                            <TouchableOpacity onPress={ () => itemsArray.push('Cheese and pesto')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                        </View>
                                        <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                    </View>
                                </View>
                        </View>
                            
                    </View>

                    <Text style={[styles.TitleMenuSecondary, {top: '15%', left: '7%'}]}>Kids Sandwiches</Text>
                    <Text style={[styles.MenuText, {top: '15%', left: '7%', width: '85%'}]}>Available either toasted or untoasted with lightly salted crisps</Text>


                    <View style={[styles.imageMenu2, {top: '15%', height: '25%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/KSD1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Ham & Cheese</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Ham & Cheese')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£4</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/KSD2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Tuna, Mayonnaise & Cheese</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Tuna, Mayonnaise & Cheese')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£4.5</Text>
                                </View>
                            </View>
                        </View>
                            
                    </View>



                    <Text style={[styles.TitleMenuSecondary, {top: '5%', left: '7%'}]}>Quesadillas</Text>
                    <Text style={[styles.MenuText, {top: '5%', left: '7%', width: '85%'}]}>Served with tortilla chips, tomato salsa and guacamole</Text>


                    <View style={[styles.imageMenu2, {top: '7%', height: '17%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/Q1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Turkey, chorizo & cheddar</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Turkey, chorizo & cheddar')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                </View>
                            </View>

                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/Q2.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'60%'}]}>Pulled jackfruit & cheddar</Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Pulled jackfruit & cheddar')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View> 
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£6.95</Text>
                                </View>
                            </View>
                        </View>
                            
                    </View>




                    <Text style={[styles.TitleMenuSecondary, {top: '5%', left: '7%'}]}>Little Gamers Lunch</Text>

                    <View style={{flexDirection: 'row', top: '30%', left: '1.25%'}}>
                        <Text style={[styles.MenuText, {left: '7%', width: '85%'}]}>Choice of sandwich, squash & cover charge</Text>
                        <Text style={[styles.MenuInfo, {right: '100%'}]}>£7.5</Text>
                    </View>
                    
                    <Text style={[styles.MenuText, {top: '6%', left: '35%'}]}>(12 and under)</Text>

                    <Text style={[styles.TitleMenuSecondary, {top: '7%', left: '7%'}]}>Something Sweet</Text>

                    <View style={[styles.imageMenu2, {top: '7%', height: '45%', width: '80%'}]}>

                        
                        <View style={[styles.imagesMenu, {flexDirection: 'row'}]}>
                            <View  style={styles.imagesMenu}>
                                <Image source={require('./img/SS1.png')} style={styles.imageMenu}/>
                                <View style={styles.description}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Text style={[styles.MenuText, {marginLeft: '5%', width:'50%'}]}>Chocolate Brownie </Text>
                                        <TouchableOpacity onPress={ () => itemsArray.push('Chocolate Brownie')}><AntDesign name="plus" size={25} color="#E9BD1F" style={styles.plusIcon}/></TouchableOpacity>
                                    </View>
                                    <Text style={[styles.MenuInfo, {marginLeft: '5%'}]}>£4.5</Text>
                                </View>
                            </View>
                        </View>
                            
                    </View>



                </View>
            </View>


            

        </ScrollView>
        <View style={styles.Footer}>
            <View style={styles.iconsFooter}>
                <Ionicons name="home" size={40} color="#323232" onPress={() => navigation.navigate('Home')}/>
                <Text>Home</Text>
            </View>
            <View style={styles.iconsFooter}>
                <Ionicons name="calendar" size={40} color="#323232" onPress={() => navigation.navigate('Booking')}/>
                <Text>Booking</Text>
            </View>
            <View style={[styles.iconsFooter, {left: '20%'}]}>
                <Ionicons name="book-outline" size={40} color="#E9BD1F"/>
                <Text style={{color: '#E9BD1F', bottom: 5}}>Menu</Text>
                <View style={{width: 70, backgroundColor: '#E9BD1F', height: 5, right: 17, borderRadius: 15}}></View>
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

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
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
    Title: {
        fontFamily: 'Beau-Rivage',
        fontSize: 72,
        right: '30%',
        top: '50%',
        position: 'absolute',
        color: '#E9BD1F',
    },
    Logo: {
        position: 'absolute',
        left: '37%',
        top: '15%',
        width: '25%',
        height: '17%',
    },
    icon1: {
        left: '55%',
    },
    icon2: {
        left: '700%'
    },
    Menu: {
        height: 9650,
    },
    TitleMenu: {
        fontFamily: 'Beau-Rivage',
        fontSize: 50,
        color: '#512F07',
        top: '1%',
        left: '35%',
    },
    TitleMenuSecondary: {
        fontFamily: 'Beau-Rivage',
        fontSize: 50,
        color: '#512F07',
        top: '1.5%',
        left: '5%',
    },
    MenuInfo: {
        fontWeight: 'bold',
        color: '#512F07',
        fontFamily: 'inter',
    },
    MenuText: {
        fontFamily: 'inter',
        color: '#512F07',
    },
    MenuTextDrinks: {
        fontFamily: 'inter',
        color: '#512F07',
    },
    imageMenu: {
        marginLeft: '5%',
        marginTop: '5%',
        flexDirection: 'row',
    },
    imageMenu2: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    DrinksMenu: {
        height: 2500,
    },
    plusIcon: {
        left: '5%',
    },
    imagesMenu: {
        width: '80%',
    },
    description: {
        top: '5%',
        marginBottom: '7%',
    },
})