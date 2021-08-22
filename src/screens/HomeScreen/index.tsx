import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native-elements';

import {Container, ScrollView, SubContainer, Typography} from '../../common';
import BlogsCardRow from '../BlogScreen/Components/BlogsCardRow';
import ContestsCardRow from '../ContestScreen/Components/ContestsCardRow';
import {CompositeHomeNavProp} from '../../helper/navigationTypes';

interface IProps {
  navigation: CompositeHomeNavProp;
}

const HomeScreen = ({navigation}: IProps) => {
  return (
    <Container>
      <SubContainer row color roundedBottom paddingV="2%">
        <Logo source={require('../../assets/logo.png')} />
        <CustomTypography subheading>
          Confederation for Physical Therapy and Health
        </CustomTypography>
      </SubContainer>
      <ScrollView gutterH>
        <BlogsCardRow />
        <ContestsCardRow navigation={navigation} />
      </ScrollView>
    </Container>
  );
};
export default HomeScreen;

const CustomTypography = styled(Typography)`
  width: 60%;
  margin-left: 20px;
`;
const Logo = styled(Image)`
  height: 80px;
  width: 80px;
`;
