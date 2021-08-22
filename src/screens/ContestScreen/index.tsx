import React from 'react';

import {Container, ScrollView} from '../../common';
import {ContestNavigationProp} from '../../helper/navigationTypes';
import ContestsCardRow from './Components/ContestsCardRow';

interface IProps {
  navigation: ContestNavigationProp;
}

const ContestScreen = ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollView gutterH>
        <ContestsCardRow navigation={navigation} />
      </ScrollView>
    </Container>
  );
};
export default ContestScreen;
