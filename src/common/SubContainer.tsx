import styled from 'styled-components/native';

interface IProps {
  /**only percentage value allowed */
  marginV?: string;
  marginH?: string;
  paddingV?: string;
  paddingH?: string;
  row?: boolean;
}

export const SubContainer = styled.View<IProps>`
  flex-direction: ${p => (p.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  width: 100%;
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
