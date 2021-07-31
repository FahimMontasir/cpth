import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: JSX.Element;
  color?: string;
  light?: boolean;
}

export const Container = ({children, color, light}: IProps) => {
  return (
    <SafeArea>
      <CustomStatusBar color={color} light={light} />
      {children}
    </SafeArea>
  );
};

type StyledProps = {
  color?: string;
  light?: boolean;
};

const CustomStatusBar = styled.StatusBar.attrs<StyledProps>(props => ({
  backgroundColor: props.color ? props.color : props.theme.colors.background,
  barStyle: props.light ? 'light-content' : 'dark-content',
}))<StyledProps>``;

const SafeArea = styled.SafeAreaView`
  flex-grow: 1;
  background-color: ${p => p.theme.colors.background};
`;
