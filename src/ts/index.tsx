import * as React from 'react';
import * as ReactDOM from 'react-dom';

//コンポーネントを定義
function Index() {
  return (
    <p>Hello World v1.0.3</p>
  );
};

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
