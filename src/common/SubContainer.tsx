import styled from 'styled-components/native';

interface IProps {
  /**only percentage value allowed */
  marginV?: string;
  marginH?: string;
  paddingV?: string;
  paddingH?: string;
  row?: boolean;
  color?: boolean;
  rounded?: boolean;
  roundedTop?: boolean;
  roundedBottom?: boolean;
}

export const SubContainer = styled.View<IProps>`
  flex-direction: ${p => (p.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  width: 100%;
  ${p =>
    p.color && {
      backgroundColor: p.theme.colors.background,
      elevation: '5',
    }}

  ${p =>
    p.rounded && {
      borderRadius: '5px',
    }}

  ${p =>
    p.roundedTop && {
      borderTopLeftRadius: '30px',
      borderTopRightRadius: '30px',
    }}
  ${p =>
    p.roundedBottom && {
      borderBottomLeftRadius: '60px',
      borderBottomRightRadius: '10px',
    }}

  ${p =>
    p.marginV && {
      marginTop: p.marginV,
      marginBottom: p.marginV,
    }}
  ${p =>
    p.marginH && {
      marginRight: p.marginH,
      marginLeft: p.marginH,
    }}
  ${p =>
    p.paddingV && {
      paddingTop: p.paddingV,
      paddingBottom: p.paddingV,
    }}
  ${p =>
    p.paddingH && {
      paddingRight: p.paddingH,
      paddingLeft: p.paddingH,
    }}
`;
