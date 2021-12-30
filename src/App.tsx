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
import Notifications from './features/notification/Notifications';

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
      <Notifications />
    </Provider>
  );
};

export default App;
