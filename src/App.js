import React from 'react';

// For Routing
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

// import Routes
import Routes from './Routes/Routes';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
