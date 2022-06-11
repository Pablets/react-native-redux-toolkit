import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Text} from 'react-native-svg';
import {BookshelfButton} from '../components/Buttons/BookshelfButton';
import Login from '../assets/login.svg';
import {colors} from '../styles/colors';
import {Counter} from '../features/counter/Counter';

export const HomeScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: colors.background, flex: 1}}>
          <Login />
          <Counter />
          <BookshelfButton type={'primary'} title={'Login'} />
          <BookshelfButton type={'secondary'} title={'Register'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
