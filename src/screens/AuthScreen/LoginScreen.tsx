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
import {LoginNavigationProp} from '../../helper/navigationTypes';

type Props = {
  navigation: LoginNavigationProp;
};

const LoginScreen = ({navigation}: Props) => {
  return (
    <Container color="#7A9AD5" light>
      <ImageBackground
        source={require('../../assets/doctor.jpg')}
        justify="flex-end"
        align="center">
        <SubContainer paddingV="5%" paddingH="2%" color roundedTop>
          <Typography heading gutterV="2%">
            Login to your account
          </Typography>
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
          <Button title="Login" />
          <TextWithBtn
            title="create one!"
            onPress={() => navigation.navigate('signUp')}>
            Don't have any account?
          </TextWithBtn>
        </SubContainer>
      </ImageBackground>
    </Container>
  );
};
export default LoginScreen;
