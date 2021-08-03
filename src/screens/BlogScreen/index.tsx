import React from 'react';

import {Button, Container, Typography} from '../../common';
import {BlogNavigationProp} from '../../helper/navigationTypes';

type Props = {
  navigation: BlogNavigationProp;
};

const BlogScreen = ({navigation}: Props) => {
  return (
    <Container align="center">
      <Typography heading> I'm blog screen</Typography>
      <Button
        title="hello"
        onPress={() => navigation.navigate('blogDetails')}
      />
    </Container>
  );
};
export default BlogScreen;
