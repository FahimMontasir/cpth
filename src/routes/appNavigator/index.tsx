import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from '../homeNavigator';
import CourseNavigator from '../courseNavigator';
import ContestNavigator from '../contestNavigator';
import BlogNavigator from '../blogNavigator';
import ProfileNavigator from '../profileNavigator';

const AppBottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <AppBottomTab.Navigator>
      <AppBottomTab.Screen name="course" component={CourseNavigator} />
      <AppBottomTab.Screen name="contest" component={ContestNavigator} />
      <AppBottomTab.Screen name="home" component={HomeNavigator} />
      <AppBottomTab.Screen name="blog" component={BlogNavigator} />
      <AppBottomTab.Screen name="profile" component={ProfileNavigator} />
    </AppBottomTab.Navigator>
  );
};
export default AppNavigator;
