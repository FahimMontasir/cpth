import styled from 'styled-components/native';
import {Input} from 'react-native-elements';

interface IProps {
  icon?: string;
}

export const AppInput = styled(Input).attrs<IProps>(props => ({
  leftIcon: {
    type: 'material-community',
    name: props.icon,
    size: 30,
    color: props.theme.colors.black,
  },
  inputContainerStyle: {
    borderBottomColor: props.theme.colors.black,
  },
  inputStyle: {color: props.theme.colors.black},
  autoCapitalize: 'none',
}))<IProps>``;
