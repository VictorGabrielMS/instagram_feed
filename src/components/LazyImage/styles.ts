import styled from 'styled-components/native';

interface iImage {
  readonly ratio: number;
};

export const Small = styled.ImageBackground<iImage>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;

export const Original = styled.Image<iImage>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;
