import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';

type ProfileParamProps = {
  profile: undefined;
};

const ProfileStack = createStackNavigator<ProfileParamProps>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
export default ProfileNavigator;
