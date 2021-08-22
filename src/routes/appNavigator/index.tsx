import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import {AppTabParamProps} from '../../helper/navigationTypes';
import HomeNavigator from '../homeNavigator';
import CourseNavigator from '../courseNavigator';
import ContestNavigator from '../contestNavigator';
import BlogNavigator from '../blogNavigator';
import ProfileNavigator from '../profileNavigator';
import HomeButton from './HomeButton';

const AppBottomTab = createBottomTabNavigator<AppTabParamProps>();

const AppNavigator = () => {
  return (
    <TabNavigator>
      <AppBottomTab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons color={color} name="teach" size={30} />
          ),
        }}
        name="course"
        component={CourseNavigator}
      />
      <AppBottomTab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              color={color}
              name="trophy-outline"
              size={30}
            />
          ),
        }}
        name="contest"
        component={ContestNavigator}
      />
      <AppBottomTab.Screen
        options={({navigation}) => ({
          tabBarButton: () => (
            <HomeButton onPress={() => navigation.jumpTo('home')} />
          ),
        })}
        name="home"
        component={HomeNavigator}
      />
      <AppBottomTab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              color={color}
              name="newspaper-variant-multiple-outline"
              size={30}
            />
          ),
        }}
        name="blog"
        component={BlogNavigator}
      />
      <AppBottomTab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              color={color}
              name="account-tie-outline"
              size={30}
            />
          ),
        }}
        name="profile"
        component={ProfileNavigator}
      />
    </TabNavigator>
  );
};
export default AppNavigator;
const TabNavigator = styled(AppBottomTab.Navigator).attrs(props => ({
  initialRouteName: 'home',
  sceneContainerStyle: {backgroundColor: props.theme.colors.background},
  tabBarOptions: {
    activeTintColor: props.theme.colors.primary,
    style: {
      backgroundColor: props.theme.colors.background,
      borderTopWidth: 0,
      elevation: 15,
    },
  },
}))``;
