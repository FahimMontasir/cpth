import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CourseScreen from '../../screens/CourseScreen';
import CourseDetailsScreen from '../../screens/CourseScreen/CourseDetailsScreen';

export type CourseParamProps = {
  course: undefined;
  courseDetails: undefined;
};

const CourseStack = createStackNavigator<CourseParamProps>();

const CourseNavigator = () => {
  return (
    <CourseStack.Navigator headerMode="none">
      <CourseStack.Screen name="course" component={CourseScreen} />
      <CourseStack.Screen
        name="courseDetails"
        component={CourseDetailsScreen}
      />
    </CourseStack.Navigator>
  );
};
export default CourseNavigator;
