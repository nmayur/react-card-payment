import React from 'react';

// For Routing
import { HashRouter, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

// import Routes
import Routes from './Routes/Routes';

function App() {
  const history = createBrowserHistory();
  return (
    <HashRouter history={history}>
      <Routes />
    </HashRouter>
  );
}

export default App;
