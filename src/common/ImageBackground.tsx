import styled from 'styled-components/native';

type BgProps = {
  justify?: string;
  align?: string;
};

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})<BgProps>`
  width: 100%;
  height: 100%;
  justify-content: ${p => (p.justify ? p.justify : 'flex-start')};
  align-items: ${p => (p.align ? p.align : 'stretch')};
`;
