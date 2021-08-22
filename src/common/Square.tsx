import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Chip, Image} from 'react-native-elements';
import styled from 'styled-components/native';

interface IProps {
  imageUrl?: string;
  title?: string;
  status?: string;
  time?: string;
  onPress?: () => void;
}

export const SquareCard = ({
  imageUrl = 'https://picsum.photos/700',
  title = ' Independence day quiz (20 questions and each question has 10 marks).',
  status = 'Running',
  time = '20:00m',
  onPress,
}: IProps) => (
  <CardContainer onPress={onPress}>
    <Img
      source={{uri: imageUrl}}
      PlaceholderContent={<ActivityIndicator color="pink" />}
    />
    <Title numberOfLines={3}>{title}</Title>
    <AppChip title={status} />
    <Chip title={time} />
  </CardContainer>
);

const CardContainer = styled.TouchableOpacity.attrs({activeOpacity: 0.8})`
  background-color: ${({theme}) => theme.colors.primary};
  margin-horizontal: 10px;
  height: 250px;
  width: 200px;
  elevation: 3;
  border-radius: 3px;
  align-items: center;
`;
const Img = styled(Image)`
  height: 140px;
  width: 200px;
`;
const Title = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.white};
  padding-vertical: ${({theme}) => theme.spacing.sm};
`;
const AppChip = styled(Chip).attrs(p => ({
  containerStyle: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  buttonStyle: {
    backgroundColor: p.theme.colors.secondary,
  },
}))``;
