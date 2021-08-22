import React from 'react';

import {Button, Container, Typography} from '../../common';
import {BlogNavigationProp} from '../../helper/navigationTypes';

type Props = {
  navigation: BlogNavigationProp;
};

const BlogScreen = ({navigation}: Props) => {
  return (
    <Container align="center" justify="center">
      <Typography subheading>Coming soon!</Typography>
      {/* <Button
        width="40%"
        title="Post a blog"
        onPress={() => navigation.navigate('blogDetails')}
      /> */}
    </Container>
  );
};
export default BlogScreen;
