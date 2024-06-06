import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from './components/button.js';
import Sigma from './components/sigma.js';

import sigmas from './assets/sigmas.json';

const SJImage = require('./assets/SJ.jpg');
const JDImage = require('./assets/JD.jpg');
const MAImage = require('./assets/MA.jpg');

const imageList = [SJImage, JDImage, MAImage];

export default function App() {
  const [sigmaIndex, setSigmaIndex] = useState(0);

  const handleSigmaPress = (index) => {
    setSigmaIndex(index);
  }

  return (
    <View style={styles.container}>
      <Sigma sigmas={sigmas} imageList={imageList} sigmaIndex={sigmaIndex} />
      <View style={styles.container}>
          <Button label={"1"} onPress={() => handleSigmaPress(0)} isSelected={sigmaIndex === 0} />
          <Button label={"2"} onPress={() => handleSigmaPress(1)} isSelected={sigmaIndex === 1} />
          <Button label={"3"} onPress={() => handleSigmaPress(2)} isSelected={sigmaIndex === 2} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  Image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    alignItems: 'left',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: "#444",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: 100,
  },
});
