import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import styled from 'styled-components/native';

interface IProps {
  imageUrl?: string;
  title?: string;
  onPress?: () => void;
}

export const Rectangular = ({
  imageUrl = 'https://i.ibb.co/fFH03T9/image4.jpg',
  title = 'One of our rich student got two trillion dollar and lost three',
  onPress,
}: IProps) => {
  return (
    <CardContainer onPress={onPress}>
      <Img
        source={{uri: imageUrl}}
        PlaceholderContent={<ActivityIndicator color="pink" />}
      />
      <Title numberOfLines={3}>{title}</Title>
    </CardContainer>
  );
};
const CardContainer = styled.TouchableOpacity.attrs({activeOpacity: 0.8})`
  background-color: ${({theme}) => theme.colors.primary};
  width: 230px;
  height: 70px;
  border-radius: 3px;
  flex-direction: row;
  margin-left: 10px;
`;
const Img = styled(Image)`
  height: 70px;
  width: 100px;
`;
const Title = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.sm};
  width: 130px;
`;
