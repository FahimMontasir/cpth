import React from 'react';
import {Rectangular, ScrollView, Typography} from '../../../common';

const BlogsCardRow = () => {
  return (
    <>
      <Typography subheading gutterV="3%">
        Trending Blogs
      </Typography>
      <ScrollView horizontal>
        <Rectangular />
        <Rectangular />
        <Rectangular />
      </ScrollView>
    </>
  );
};
export default BlogsCardRow;
