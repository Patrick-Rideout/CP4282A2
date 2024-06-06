import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

export default function Sigma(props) {
    const sigma = props.sigmas[props.sigmaIndex];

    return (
        <>
            <Text style={styles.Text}>{sigma.name}</Text>
            <Image source={props.imageList[sigma.imageIndex]} style={styles.Image}  />
            <Text style={styles.smallText}>Date Of Birth: {sigma.dateOfBirth}</Text>
            <Text style={styles.smallText}>Powers: </Text>
            {
                sigma.powers.map((power, index) => {
                    return <Text style={styles.smallText} key={index}>{power}</Text>
                })
            }
        </>
    );
}

const styles = StyleSheet.create({
  Image: {
      width: 400,
      height: 400,
      marginHorizontal: 20,
      alignItems: 'left',
      justifyContent: 'center',
      padding: 3,
      backgroundColor: "#444",
    },
  Text: {
      fontSize: 50,
     },
  smallText: {
       fontSize: 18,
     }
});
