import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

import HomeNavigator, {HomeParamProps} from '../homeNavigator';
import CourseNavigator, {CourseParamProps} from '../courseNavigator';
import ContestNavigator, {ContestParamProps} from '../contestNavigator';
import BlogNavigator, {BlogParamProps} from '../blogNavigator';
import ProfileNavigator, {ProfileParamProps} from '../profileNavigator';

export type AppTabParamProps = {
  course: NavigatorScreenParams<CourseParamProps>;
  contest: NavigatorScreenParams<ContestParamProps>;
  home: NavigatorScreenParams<HomeParamProps>;
  blog: NavigatorScreenParams<BlogParamProps>;
  profile: NavigatorScreenParams<ProfileParamProps>;
};

const AppBottomTab = createBottomTabNavigator<AppTabParamProps>();

const AppNavigator = () => {
  return (
    <AppBottomTab.Navigator initialRouteName="home">
      <AppBottomTab.Screen name="course" component={CourseNavigator} />
      <AppBottomTab.Screen name="contest" component={ContestNavigator} />
      <AppBottomTab.Screen name="home" component={HomeNavigator} />
      <AppBottomTab.Screen name="blog" component={BlogNavigator} />
      <AppBottomTab.Screen name="profile" component={ProfileNavigator} />
    </AppBottomTab.Navigator>
  );
};
export default AppNavigator;
