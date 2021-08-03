import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native-elements';

import {SubContainer} from './SubContainer';
import {Typography} from './Typography';

interface IProps {
  children: string;
  title: string;
  onPress: () => void;
}

export const TextWithBtn = ({children, title, onPress}: IProps) => {
  return (
    <SubContainer row>
      <Typography caption>{children}</Typography>
      <TextButton title={title} onPress={onPress} />
    </SubContainer>
  );
};

const TextButton = styled(Button).attrs(props => ({
  type: 'clear',
  titleStyle: {
    color: props.theme.typography.caption,
    fontFamily: 'sans-serif-small',
  },
}))``;
