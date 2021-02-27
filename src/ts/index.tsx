import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Index.scss';

//コンポーネントを定義
function Index() {
  return (
    <div>
      <p>Hello World v1.0.3</p>
      <p className="red">これは赤色ですか？</p>
      <p styleName="red">これは赤色ですか？</p>
      <p styleName="blue">これは青色ですか？</p>
    </div>
    );
};

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
