import React from 'react';
import { Provider } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import './app.scss';
import 'antd/dist/antd.css';
import './features/sprite/sprite.scss';
import RenderCanvas from './ui/RenderCanvas';
import { SidePanel } from './ui/SidePanel';
import store from './ui/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ReflexContainer orientation="vertical">
        <ReflexElement className="left-pane">
          <SidePanel />
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
