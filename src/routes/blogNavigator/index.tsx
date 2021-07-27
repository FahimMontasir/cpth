import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BlogScreen from '../../screens/BlogScreen';
import BlogDetailsScreen from '../../screens/BlogScreen/BlogDetailsScreen';

type BlogParamProps = {
  blogs: undefined;
  blogDetails: undefined;
};

const BlogStack = createStackNavigator<BlogParamProps>();

const BlogNavigator = () => {
  return (
    <BlogStack.Navigator>
      <BlogStack.Screen name="blogs" component={BlogScreen} />
      <BlogStack.Screen name="blogDetails" component={BlogDetailsScreen} />
    </BlogStack.Navigator>
  );
};
export default BlogNavigator;
