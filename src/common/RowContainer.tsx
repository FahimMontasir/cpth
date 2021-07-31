import styled from 'styled-components/native';

interface IProps {
  /**only percentage value allowed */
  marginVertical?: string;
  marginHorizontal?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
}

export const RowContainer = styled.View<IProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${p =>
    p.marginVertical && {
      marginTop: p.marginVertical,
      marginBottom: p.marginVertical,
    }}
  ${p =>
    p.marginHorizontal && {
      marginRight: p.marginHorizontal,
      marginLeft: p.marginHorizontal,
    }}
  ${p =>
    p.paddingVertical && {
      paddingTop: p.paddingVertical,
      paddingBottom: p.paddingVertical,
    }}
  ${p =>
    p.paddingHorizontal && {
      paddingRight: p.paddingHorizontal,
      paddingLeft: p.paddingHorizontal,
    }}
`;
