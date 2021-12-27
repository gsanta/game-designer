import React from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import './App.scss';
import 'react-reflex/styles.css';
import SpriteSheet from './ui/SpriteSheet';
import { Provider } from 'react-redux';
import store from './ui/store';
import { SidePanel } from './ui/SidePanel';
import RenderCanvas from './ui/RenderCanvas';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ReflexContainer orientation="vertical">
        <ReflexElement className="left-pane">
          <SidePanel />
          <SpriteSheet />
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement className="right-pane">
          <RenderCanvas />
        </ReflexElement>
      </ReflexContainer>
    </Provider>
  );
};

export default App;
