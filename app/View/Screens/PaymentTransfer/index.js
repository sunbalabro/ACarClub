import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import success from '../../../Assets/success.jpg';
import DropShadow from 'react-native-drop-shadow';
const styles = StyleSheet.create({
  scBan: {
    width: '100%',
    height: 300,
  },
  scHead: {
    fontSize: 40,
    textAlign: 'center',
    color: '#f83600',
    fontWeight: 'bold',
  },
  scRc: {
    fontSize: 20,
    color: '#267fff',
  },
  scCon: {
    marginTop: 80,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#4830D3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 4,
    marginTop: 50,
  },
  text: {
    fontSize: 26,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  buttonText: {
    color: '#fff',
  },
});
export default function PaymentTransfer({navigation}) {
  const date = new Date();
  const time = date.getHours() + ':' + date.getMinutes();
  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        <Image style={styles.scBan} source={success} />
      </View>
      <View>
        <Text style={styles.scHead}>Money Transfer is successful</Text>
      </View>
      <View style={styles.scCon}>
        <Text style={styles.scRc}>Recipient's Name</Text>
      </View>
      <View>
        <Text style={styles.scRc}>Today at {time}</Text>
      </View>
      <View>
        <DropShadow style={styles.shadowProp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Car Categories')}>
            <Text style={(styles.text, styles.buttonText)}>Finish Payment</Text>
          </TouchableOpacity>
        </DropShadow>
      </View>
    </View>
  );
}
