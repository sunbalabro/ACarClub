import React, {useEffect} from 'react';
import {AsyncStorageStatic} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator';
import AuthNavigator from '../AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {userConstants} from '../../store/Constants';
export default function MainNavigator() {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = React.useState(true);
  // const [user, setUser] = React.useState(null);
  const currentUser = useSelector(state => state.authentication.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        dispatch({
          type: userConstants.LOGIN_SUCCESS,
          user: result,
        });
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      {currentUser ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
