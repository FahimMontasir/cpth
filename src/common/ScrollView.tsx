import styled, {css} from 'styled-components/native';

interface IProps {
  gutterH?: boolean;
  gutterV?: boolean;
}

export const ScrollView = styled.ScrollView<IProps>`
  ${p =>
    p.gutterH &&
    css`
      padding-left: 2%;
      padding-right: 2%;
    `}
  ${p =>
    p.gutterV &&
    css`
      padding-top: 2%;
      padding-bottom: 2%;
    `}
`;
