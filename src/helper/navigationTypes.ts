import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppTabParamProps} from '../routes/appNavigator';
import {BlogParamProps} from '../routes/blogNavigator';
import {AuthParamProps} from '../routes/authNavigator';

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
export type BlogNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamProps, 'blog'>,
  StackNavigationProp<BlogParamProps>
>;
