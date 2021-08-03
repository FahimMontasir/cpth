import React from 'react';

import {
  Button,
  Container,
  ImageBackground,
  Input,
  SubContainer,
  TextWithBtn,
  Typography,
} from '../../common';
import {SignUpNavigationProp} from '../../helper/navigationTypes';

type Props = {
  navigation: SignUpNavigationProp;
};

const SignUpScreen = ({navigation}: Props) => {
  return (
    <Container color="#7A9AD5" light>
      <ImageBackground
        source={require('../../assets/doctor.jpg')}
        justify="flex-end"
        align="center">
        <SubContainer paddingV="5%" paddingH="2%" color roundedTop>
          <Typography heading gutterV="2%">
            Create your account
          </Typography>
          <Input
            placeholder="Enter your name"
            icon="account"
            autoCompleteType="username"
          />
          <Input
            placeholder="Enter your email"
            icon="email"
            autoCompleteType="email"
          />
          <Input
            placeholder="Enter your password"
            icon="lock"
            autoCompleteType="password"
            secureTextEntry
          />
          <Button title="Sign Up" />
          <TextWithBtn
            title="Login"
            onPress={() => navigation.navigate('login')}>
            Already have a account?
          </TextWithBtn>
        </SubContainer>
      </ImageBackground>
    </Container>
  );
};
export default SignUpScreen;
