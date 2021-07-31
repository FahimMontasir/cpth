import styled, {css} from 'styled-components/native';

interface IProps {
  heading?: boolean;
  body?: boolean;
  caption?: boolean;
}

export const Typography = styled.Text<IProps>`
  ${p =>
    p.heading &&
    css`
      font-size: 30px;
      color: ${({theme}) => theme.typography.heading};
    `}
  ${p =>
    p.body &&
    css`
      font-size: 20px;
      color: ${({theme}) => theme.typography.body};
    `}
  ${p =>
    p.caption &&
    css`
      font-size: 15px;
      color: ${({theme}) => theme.typography.caption};
    `}
`;
