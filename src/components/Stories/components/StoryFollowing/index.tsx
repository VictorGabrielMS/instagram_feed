import React from 'react';

import { Container, AvatarContainer, Avatar,  Label } from './styles';

export const StoryFollowing: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={{ uri: 'https://instagram.faux1-1.fna.fbcdn.net/v/t51.2885-15/e35/70372240_1497524390443582_5932462703352823456_n.jpg?_nc_ht=instagram.faux1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=22r0ETQMlsAAX_Dc6s1&tn=l3XCARDiswDIGdHa&edm=AABBvjUBAAAA&ccb=7-4&oh=8cc87500dd237ec8a3e69f15fa8f64b7&oe=61177699&_nc_sid=83d603' }} />
      </AvatarContainer>

      <Label numberOfLines={1}>User Name Long</Label>
    </Container >
  );
}

