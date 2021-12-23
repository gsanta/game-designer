import React from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import './App.scss';
import 'react-reflex/styles.css';

const App = (): JSX.Element => (
  <ReflexContainer orientation="vertical">
    <ReflexElement className="left-pane">
      <div className="pane-content">Left Pane (resizeable)</div>
    </ReflexElement>

    <ReflexSplitter />

    <ReflexElement className="right-pane">
      <div className="pane-content">Right Pane (resizeable)</div>
    </ReflexElement>
  </ReflexContainer>
);

export default App;
