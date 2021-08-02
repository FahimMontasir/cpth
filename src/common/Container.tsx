import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: JSX.Element;
  color?: string;
  light?: boolean;
  justify?: string;
  align?: string;
}

export const Container = ({
  children,
  color,
  light,
  justify = 'flex-start',
  align = 'stretch',
}: IProps) => {
  return (
    <SafeArea justify={justify} align={align}>
      <CustomStatusBar color={color} light={light} />
      {children}
    </SafeArea>
  );
};

type StatusProps = {
  color?: string;
  light?: boolean;
};

const CustomStatusBar = styled.StatusBar.attrs<StatusProps>(props => ({
  backgroundColor: props.color ? props.color : props.theme.colors.background,
  barStyle: props.light ? 'light-content' : 'dark-content',
}))<StatusProps>``;

type AreaProps = {
  justify?: string;
  align?: string;
};

const SafeArea = styled.SafeAreaView<AreaProps>`
  flex-grow: 1;
  background-color: ${p => p.theme.colors.background};
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
`;
