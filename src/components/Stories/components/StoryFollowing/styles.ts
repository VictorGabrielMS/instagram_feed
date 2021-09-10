import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 65px;
 margin: 0 4px;
`;

export const AvatarContainer = styled.View`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 1px;
  border-color: #cfcfcf;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 54px;
  width: 54px;
  border-radius: 30px;
`;

export const Label = styled.Text`
  color: #c0c0c0;
  width: 100%;
  text-align: center;
  font-size: 11px;
  margin-top: 2px;
`;

