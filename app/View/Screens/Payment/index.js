import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {setSelectedLog} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import DropShadow from 'react-native-drop-shadow';
const styles = StyleSheet.create({
  inp: {
    width: 300,
    borderColor: '#ceeded',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
  crLine: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  crInp: {
    width: 80,
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#ceeded',
    backgroundColor: '#ceeded',
  },
  header: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
    color: '#f83600',
    fontWeight: 'bold',
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
  },
  cart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
  },
  cartText: {
    fontSize: 20,
  },
  cartExtra: {
    width: 160,
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#ceeded',
    backgroundColor: '#ceeded',
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
    height: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
export default function Payment({navigation}) {
  const [firstSelection, setFirstSelection] = useState(false);
  const [secondSelection, setSecondSelection] = useState(false);
  const checkV = newValue => {
    setFirstSelection(newValue);
    setSecondSelection(false);
  };
  const checkM = newValue => {
    setSecondSelection(newValue);
    setFirstSelection(false);
  };
  const transactionSubmit = () => {
    navigation.navigate('Transaction Successful');
  };
  return (
    <ScrollView>
      <View>
        <View>
          <View style={styles.cart}>
            <View style={styles.check}>
              <CheckBox
                disabled={false}
                value={firstSelection}
                onValueChange={newValue => checkV(newValue)}
              />
              <Text style={styles.cartText}>VISA Card</Text>
            </View>
            <Text style={styles.cartText}>1234-5678-XXXX</Text>
          </View>
          <View style={styles.cart}>
            <View style={styles.check}>
              <CheckBox
                disabled={false}
                value={secondSelection}
                onValueChange={newValue => checkM(newValue)}
              />
              <Text style={styles.cartText}>Master Card</Text>
            </View>
            <Text style={styles.cartText}>1234-5678-XXXX</Text>
          </View>
        </View>
        <Text style={styles.header}>Card Information</Text>
        <View>
          <TextInput placeholder="Full Name" style={styles.inp} />
        </View>
        <Text style={styles.header}>14 Digits Card Number</Text>
        <View style={styles.crLine}>
          <TextInput
            placeholder="1234"
            maxLength={4}
            style={styles.crInp}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="5678"
            maxLength={4}
            style={styles.crInp}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="9012"
            maxLength={4}
            style={styles.crInp}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="-"
            editable={false}
            selectTextOnFocus={false}
            style={styles.crInp}
          />
        </View>
        <View style={styles.crLine}>
          <TextInput placeholder="Exp Date" style={styles.cartExtra} />
          <TextInput placeholder="CVV" style={styles.cartExtra} />
        </View>
        <View>
          <DropShadow style={styles.shadowProp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => transactionSubmit()}>
              <Text style={(styles.text, styles.buttonText)}>
                Finish Payment
              </Text>
            </TouchableOpacity>
          </DropShadow>
        </View>
      </View>
    </ScrollView>
  );
}
