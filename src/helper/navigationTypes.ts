import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';

import {BlogParamProps} from '../routes/blogNavigator';
import {AuthParamProps} from '../routes/authNavigator';
import {CourseParamProps} from '../routes/courseNavigator';
import {ContestParamProps} from '../routes/contestNavigator';
import {HomeParamProps} from '../routes/homeNavigator';
import {ProfileParamProps} from '../routes/profileNavigator';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//tab navigator
export type AppTabParamProps = {
  course: NavigatorScreenParams<CourseParamProps>;
  contest: NavigatorScreenParams<ContestParamProps>;
  home: NavigatorScreenParams<HomeParamProps>;
  blog: NavigatorScreenParams<BlogParamProps>;
  profile: NavigatorScreenParams<ProfileParamProps>;
};
//auth screen
export type WelcomeNavigationProp = StackNavigationProp<
  AuthParamProps,
  'welcome'
>;
export type SignUpNavigationProp = StackNavigationProp<
  AuthParamProps,
  'signUp'
>;
export type LoginNavigationProp = StackNavigationProp<AuthParamProps, 'login'>;
//blog screen
export type BlogNavigationProp = StackNavigationProp<BlogParamProps, 'blog'>;
//contest screen
export type ContestNavigationProp = StackNavigationProp<
  ContestParamProps,
  'contest'
>;

//home screen
export type CompositeHomeNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamProps, 'home'>,
  StackNavigationProp<HomeParamProps>
>;
