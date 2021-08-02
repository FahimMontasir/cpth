import React from 'react';
import {Input} from 'react-native-elements';
import {
  Container,
  ImageBackground,
  SubContainer,
  Typography,
} from '../../common';

const SignUpScreen = () => {
  return (
    <Container color="#7A9AD5" light>
      <ImageBackground
        source={require('../../assets/doctor.jpg')}
        justify="flex-end"
        align="center">
        <SubContainer marginV="10%">
          <Typography heading>Create your account</Typography>
          <Input />
        </SubContainer>
      </ImageBackground>
    </Container>
  );
};
export default SignUpScreen;
