import * as React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {BookshelfButton} from './components/Buttons/BookshelfButton';
import Login from './assets/login.svg';
import {colors} from './styles/colors';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigator/StackNavigator';

export interface RootStackParams {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
