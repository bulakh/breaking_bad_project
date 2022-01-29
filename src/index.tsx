import React from 'react';
import { configure } from 'mobx';
import ReactDOM from 'react-dom';
import App from './App';

setTimeout(() =>
  configure({
    enforceActions: "never",
    reactionScheduler: (f) => setTimeout(f),
  }),
)

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

