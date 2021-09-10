import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View``;

export const Header = styled.View`
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
`;


export const AuthorInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 13px;
`;

export const Legend = styled.Text`
  color: #333;
  font-weight: normal;
  font-size: 10px;
`;


export const PostHeaderIcon = styled(MaterialCommunityIcons).attrs({
  name:"settings-helper",
  size:26,
})`
  line-height: 3px;
  padding: 0;
  margin: 0;
`
export const Footer = styled.View`
  padding: 0 16px;
`;

export const IconsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
`;

export const Description = styled.Text`
  font-size: 11px;
`;

export const DescriptionBold = styled.Text`
  font-weight: bold;
`;

export const PostDate = styled.Text`
  font-size: 9px;
  color: #c0c0c0;
  padding-top: 2px;
  padding-bottom: 6px;
`;
