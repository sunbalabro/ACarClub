import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Splash from '../../../Assets/splash.png';
const styles = StyleSheet.create({
  splash: {
    width: 300,
    height: 200,
    marginLeft: 20,
  },
  greet: {
    fontSize: 40,
    marginTop: 90,
    textAlign: 'center',
    color: '#267fff',
  },
  btn: {
    width: 300,
    height: 50,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#267fff',
  },
  btnText: {
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  extra: {
    width: 200,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  extraText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f83600',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
export default function Greetings({navigation}) {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        <Text style={styles.greet}>Welcome to Car Club</Text>
      </View>
      <View>
        <Image style={styles.splash} source={Splash} />
      </View>
      <View style={{marginTop: 50}}>
        <View style={styles.shadowProp}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Log In')}>
            <Text style={styles.btnText}>Sign In to get started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extra}>
          <Text style={styles.extraText}>Or</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Sign Up to register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
