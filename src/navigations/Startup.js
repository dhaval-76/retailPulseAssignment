import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-root-toast';

import Login from '../screens/Login';

import {errorSelector, isAuthenticatedSelector} from '../store/auth/selector';
import {removeError} from '../store/auth/slice';
import SearchOutlet from '../screens/SearchOutlet';
import OutletDetail from '../screens/OutletDetail';

const Stack = createStackNavigator();

export default function Startup() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const error = useSelector(errorSelector);

  const dispatch = useDispatch();

  // displaying error generated in authentication
  useEffect(() => {
    if (error !== '') {
      Toast.show(error, {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        onHide: () => {
          // calls on toast's hide animation start.
          dispatch(removeError());
        },
      });
    }
  }, [error, dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthenticated ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="SearchOutlet" component={SearchOutlet} />
            <Stack.Screen name="OutletDetail" component={OutletDetail} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
