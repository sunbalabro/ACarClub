import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import ban from '../../../Assets/banner.jpg';
import DropShadow from 'react-native-drop-shadow';
import {Shadow} from 'react-native-shadow-2';
import pr from '../../../Assets/muv.jpg';
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
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
  buttonText: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  pr: {
    width: '100%',
    height: 200,
  },
  heading: {
    width: 280,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    marginLeft: 20,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
const Categories = ({navigation}) => {
  const checkCategories = () => {
    navigation.navigate('Sub Categories');
  };
  return (
    <ScrollView>
      <View>
        <View>
          <Image source={ban} style={styles.banner} />
        </View>
        <View>
          <Shadow
            distance={5}
            startColor={'#00000010'}
            containerViewStyle={{marginVertical: 20}}
            radius={8}>
            <View style={[styles.card, {marginVertical: 0}]}>
              <View>
                <Image source={pr} style={styles.pr} />
                <Text style={styles.heading}>MUV cars</Text>
                <Text>36,54,000/-</Text>
              </View>
              <DropShadow style={styles.shadowProp}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => checkCategories()}>
                  <Text style={(styles.text, styles.buttonText)}>See more</Text>
                </TouchableOpacity>
              </DropShadow>
            </View>
          </Shadow>
        </View>
        <View>
          <Shadow
            distance={5}
            startColor={'#00000010'}
            containerViewStyle={{marginVertical: 20}}
            radius={8}>
            <View style={[styles.card, {marginVertical: 0}]}>
              <View>
                <Image source={pr} style={styles.pr} />
                <Text style={styles.heading}>MUV cars</Text>
                <Text>36,54,000/-</Text>
              </View>
              <DropShadow style={styles.shadowProp}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => checkCategories()}>
                  <Text style={(styles.text, styles.buttonText)}>See more</Text>
                </TouchableOpacity>
              </DropShadow>
            </View>
          </Shadow>
        </View>
      </View>
    </ScrollView>
  );
};
export default Categories;
