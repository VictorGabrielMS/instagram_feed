import React from 'react';

import { List } from './styles';
import { StoryUser } from './components/StoryUser';
import { StoryFollowing } from './components/StoryFollowing';

export const Stories: React.FC = () => {
  return (
    <List>
      <StoryUser />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
      <StoryFollowing />
    </List>
  );
}

