import React from 'react';
import styled from 'styled-components/native';

import {Button, Container, ImageBackground, SubContainer} from '../../common';
import {WelcomeNavigationProp} from '../../helper/navigationTypes';

type Props = {
  navigation: WelcomeNavigationProp;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <Container color="#0082D2" light>
      <ImageBackground source={require('../../assets/welcome.jpg')}>
        <ButtonContainer>
          <Button
            title="Guest Sign In"
            onPress={() => navigation.navigate('root')}
          />
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
