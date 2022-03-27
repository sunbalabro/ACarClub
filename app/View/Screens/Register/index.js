import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import splash from '../../../Assets/splashlogo.png';
const styles = StyleSheet.create({
  splash: {
    width: 300,
    height: 200,
    marginTop: 90,
    marginLeft: 20,
  },
  greet: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#267fff',
  },
  inp: {
    width: 300,
    borderBottomWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
    fontSize: 25,
  },
  btn: {
    width: 300,
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#267fff',
  },
});
export default function Register({navigation}) {
  const [borderColor, setBorderColor] = useState('#ebebeb');
  const onFocus = () => {
    setBorderColor('#43a0ee');
  };
  const onBlur = () => {
    setBorderColor('#ebebeb');
  };
  const handleSubmit = () => {
    navigation.navigate('Car Categories');
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <Image style={styles.splash} source={splash} />
        <Text style={styles.greet}> A Car Club</Text>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="First Name"
            keyboardType="default"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="Last Name"
            keyboardType="default"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="Contact Number"
            keyboardType="number-pad"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="Address"
            keyboardType="default"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="Email Addres"
            keyboardType="email-address"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            style={{
              width: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderBottomColor: borderColor,
              borderBottomWidth: 1,
            }}
            placeholder="Confirm Password"
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
