import React from 'react';
import { Image, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feed } from './pages/Feed'

import logo from './assets/instagram.png'

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerTitle: () => <Image source={logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5'
        }
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}
