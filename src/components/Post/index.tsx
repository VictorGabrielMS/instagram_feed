import type { iFeedData } from '../../pages/Feed';

import React, { ReactNode } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { View } from 'react-native';
import { Container, Header, AuthorInfo, Avatar, Column, Name, Legend, PostHeaderIcon, Footer, IconsRow, Description, DescriptionBold, PostDate } from './styles';

interface iPostProps {
  item: iFeedData;
  image: ReactNode;
}

export const Post: React.FC<iPostProps> = ({ image, item }) => {
  return (
    <Container>
      <Header>
        <AuthorInfo>
          <Avatar source={{ uri: item.author.avatar }} />

          <Column>
            <Name>{item.author.name}</Name>
            {item.legend && <Legend>{item.legend}</Legend>}
          </Column>
        </AuthorInfo>

        <PostHeaderIcon />
      </Header>

      {image}

      <Footer>
        <IconsRow>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="heart-o" size={20} style={{ marginRight: 12 }} />
            <Ionicons name="chatbubble-outline" size={20} style={{ marginRight: 12 }} />
            <Feather name="navigation" size={20} />
          </View>

          <Feather name="bookmark" size={20} />
        </IconsRow>

        <Description numberOfLines={1} >
          Liked by <DescriptionBold>{item.author.name}</DescriptionBold> and <DescriptionBold>others</DescriptionBold>
        </Description>

        <Description numberOfLines={2} style={{ paddingTop: 6 }} >
          <DescriptionBold>{item.author.name}</DescriptionBold> {item.description}
        </Description>

        <PostDate>
          11 hours ago
        </PostDate>
      </Footer>
    </Container>
  )
}

