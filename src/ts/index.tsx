import * as React from 'react';
import * as ReactDOM from 'react-dom';

//コンポーネントを定義
function Index() {
  return (
    <p>Hello World</p>
  );
};

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
