import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Container, Logo, IconsContainer } from './styles'

import logo from '../../assets/instagram.png'

export const Header: React.FC = () => {
  return (
    <Container >
      <Logo source={logo} />

      <IconsContainer >
        <Feather name="plus-square" size={20} style={{ marginRight: 16 }} />
        <FontAwesome name="heart-o" size={20} style={{ marginRight: 16 }} />
        <Ionicons name="chatbubble-outline" size={20} />
      </IconsContainer>
    </Container>
  );
}

