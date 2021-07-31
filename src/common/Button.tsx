import {Button} from 'react-native-elements';
import styled from 'styled-components/native';

interface IProps {
  width?: string;
  color?: string;
}

export const AppButton = styled(Button).attrs<IProps>(props => ({
  containerStyle: {
    width: props.width || '95%',
    margin: props.theme.spacing.sm,
  },
  buttonStyle: {
    backgroundColor: props.color ? props.color : 'white',
  },
  titleStyle: {
    color: 'black',
    fontFamily: 'sans-serif-small',
  },
  raised: true,
}))<IProps>``;
