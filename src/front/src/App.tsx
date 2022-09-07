import React from 'react';
import './App.css';
import {presetGpnDefault, Theme} from '@consta/uikit/Theme';
import { AppRoutes } from './core/routers/Routes';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Theme preset={presetGpnDefault}>
        <div className={'App'}>
          <AppRoutes />
        </div>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
