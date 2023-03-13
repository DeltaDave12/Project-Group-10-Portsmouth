import * as tf from '@tenserflow/tfjs'
import {cameraWithTensors} from '@tensorflow/tfjs-react-native'
import {Camera} from 'expo-camera'
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Pressable, Alert, TouchableOpacity, Modal, TouchableOpacityComponent } from 'react-native'
import React, { useState, useEffect } from 'react'
 
const TensorCamera = cameraWithTensors(Camera);

export default function AchievementScreen({navigation}) {
   
  useEffect(() => {
    async function prepare() {
      // Request camera
      await Camera.requestCameraPermissionsAsync()

      //Wait for tfjs to initialize backend
      await tf.ready();

      console.log('ready:!!!!!')
    }

    prepare();
  }, []);
  return (
      <View>
       
      </View>
  );
}

const styles = StyleSheet.create({
    
})