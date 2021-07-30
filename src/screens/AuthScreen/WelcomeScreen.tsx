import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamProps} from '../../routes/authNavigator';
import styled from 'styled-components/native';

type NavigationProp = StackNavigationProp<AuthParamProps, 'welcome'>;
type Props = {
  navigation: NavigationProp;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Container>
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
      </Container>
    </View>
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
    backgroundColor: props.theme.colors.primary,
  },
  raised: true,
}))<IProps>``;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
`;

const Container = styled.View`
  top: 80%;
`;
