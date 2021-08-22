import React from 'react';

import {ScrollView, SquareCard, Typography} from '../../../common';
import {ContestNavigationProp} from '../../../helper/navigationTypes';

interface IProps {
  navigation: ContestNavigationProp | any;
}

const ContestsCardRow = ({navigation}: IProps) => {
  return (
    <>
      <Typography subheading gutterV="3%">
        Ongoing Contests
      </Typography>
      <ScrollView horizontal>
        <SquareCard onPress={() => navigation.navigate('contestDetails')} />
        <SquareCard onPress={() => console.log('details')} />
        <SquareCard onPress={() => console.log('details')} />
        <SquareCard onPress={() => console.log('details')} />
      </ScrollView>
    </>
  );
};
export default ContestsCardRow;
