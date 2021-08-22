import React from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  onPress: () => void;
}

const HomeButton = ({onPress}: IProps) => {
  return (
    <Container onPress={onPress}>
      <Gradient
        colors={['#f0e2dd', '#FF7795']}
        start={{x: -1, y: 0}}
        end={{x: 1, y: 0}}>
        <MaterialCommunityIcons name="home" color="white" size={30} />
      </Gradient>
    </Container>
  );
};
export default HomeButton;

const Container = styled.TouchableOpacity.attrs({activeOpacity: 0.5})`
  top: -20px;
  border-radius: 30px;
  elevation: 15;
`;
const Gradient = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
