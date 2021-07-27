import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContestScreen from '../../screens/ContestScreen';
import ContestDetailsScreen from '../../screens/ContestScreen/ContestDetailsScreen';

type ContestParamProps = {
  contest: undefined;
  contestDetails: undefined;
};

const ContestStack = createStackNavigator<ContestParamProps>();

const ContestNavigator = () => {
  return (
    <ContestStack.Navigator>
      <ContestStack.Screen name="contest" component={ContestScreen} />
      <ContestStack.Screen
        name="contestDetails"
        component={ContestDetailsScreen}
      />
    </ContestStack.Navigator>
  );
};
export default ContestNavigator;
