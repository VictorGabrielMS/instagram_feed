import styled from 'styled-components/native';

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  alignContent: 'center',
})`
  height: 90px;
  padding: 0 8px ;
`;
