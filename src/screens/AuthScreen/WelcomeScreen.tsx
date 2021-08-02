import React from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AuthParamProps} from '../../routes/authNavigator';
import {Button, Container, ImageBackground, SubContainer} from '../../common';

type NavigationProp = StackNavigationProp<AuthParamProps, 'welcome'>;
type Props = {
  navigation: NavigationProp;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <Container color="#0082D2" light>
      <ImageBackground source={require('../../assets/welcome.jpg')}>
        <ButtonContainer>
          <Button title="Guest Sign In" />
          <SubContainer marginV="1%" row>
            <Button
              width={'40%'}
              title="Sign In"
              onPress={() => navigation.navigate('login')}
            />
            <Button
              width={'40%'}
              title="Sign Up"
              onPress={() => navigation.navigate('signUp')}
            />
          </SubContainer>
        </ButtonContainer>
      </ImageBackground>
    </Container>
  );
};
export default WelcomeScreen;

const ButtonContainer = styled.View`
  position: absolute;
  top: 75%;
  width: 100%;
  height: 100%;
`;
