import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, isSelected }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={isSelected ? styles.selectedButton : styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 75,
    height: 75,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    borderRadius: 10,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
  },
  selectedButton: {
    borderRadius: 10,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
