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
import {useDispatch} from 'react-redux';
import splash from '../../../Assets/splashlogo.png';
import {userActions} from '../../../store/Actions';
import {userConstants} from '../../../store/Constants';
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
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#267fff',
  },
});
export default function LoginIn({navigation}) {
  const [borderColor, setBorderColor] = useState('#ebebeb');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onFocus = () => {
    setBorderColor('#43a0ee');
  };
  const onBlur = () => {
    setBorderColor('#ebebeb');
  };
  const submit = () => {
    dispatch({
      type: userConstants.LOGIN_SUCCESS,
      user: {
        email: email,
      },
    });
    // dispatch(userActions.login(email, password, dispatch));
    // navigation.navigate('Car Categories');
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
            placeholder="Email Address"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
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
            onChangeText={value => setPassword(value)}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => submit()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
