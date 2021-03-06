import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

const App = () => {
  return (
    <Comment
      user={userInfo}
      text="Good job!"
      date={new Date('2019-10-29T11:32:19.777Z')}
    />
  );
};

export default App;
