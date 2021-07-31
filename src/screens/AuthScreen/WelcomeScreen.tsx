import React from 'react';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamProps} from '../../routes/authNavigator';
import styled from 'styled-components/native';
import Container from '../../common/Container';

type NavigationProp = StackNavigationProp<AuthParamProps, 'welcome'>;
type Props = {
  navigation: NavigationProp;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <Container>
      <AContainer>
        <Btn title="guest" />
        <ButtonContainer>
          <Btn
            width={'40%'}
            raised
            title="login"
            onPress={() => navigation.navigate('login')}
          />
          <Btn
            width={'40%'}
            title="signUp"
            onPress={() => navigation.navigate('signUp')}
          />
        </ButtonContainer>
      </AContainer>
    </Container>
  );
};
export default WelcomeScreen;

interface IProps {
  width?: string;
}

const Btn = styled(Button).attrs<IProps>(props => ({
  containerStyle: {
    width: props.width || '95%',
    margin: props.theme.spacing.sm,
  },
  buttonStyle: {
    backgroundColor: 'white',
  },
  titleStyle: {
    color: 'black',
    fontFamily: 'sans-serif-small',
  },
  raised: true,
}))<IProps>``;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
`;

const AContainer = styled.View`
  top: 80%;
`;
