import styled, {css} from 'styled-components/native';

interface IProps {
  heading?: boolean;
  subheading?: boolean;
  body?: boolean;
  caption?: boolean;
  gutterV?: string;
  gutterH?: string;
}

export const Typography = styled.Text<IProps>`
  ${p =>
    p.gutterV &&
    css`
      margin-top: ${p.gutterV};
      margin-bottom: ${p.gutterV};
    `}

  ${p =>
    p.gutterH &&
    css`
      margin-right: ${p.gutterH};
      margin-left: ${p.gutterH};
    `}

  ${p =>
    p.heading &&
    css`
      font-size: 25px;
      color: ${({theme}) => theme.typography.heading};
    `}
  ${p =>
    p.subheading &&
    css`
      font-size: 18px;
      color: ${({theme}) => theme.typography.subheading};
      font-weight: bold;
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
