import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: JSX.Element;
  color?: string;
}

const Container = ({children, color}: IProps) => {
  return (
    <SafeArea>
      <CustomStatusBar color={color} />
      {children}
    </SafeArea>
  );
};
export default Container;

type StyledProps = {
  color?: string;
};

const CustomStatusBar = styled.StatusBar.attrs<StyledProps>(props => ({
  backgroundColor: props.color ? props.color : props.theme.colors.primary,
  barStyle: 'dark-content',
}))<StyledProps>``;

const SafeArea = styled.SafeAreaView`
  flex-grow: 1;
  background-color: red;
`;
