import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from './components/Header';
import { Feed } from './pages/Feed'

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}
