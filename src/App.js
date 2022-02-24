import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import Home from './Home.js'
const App = () => {
  return (
    <BrowserRouter>
            <Home />

            {/* <Route path='/sign' component={Sign} /> */}

        </BrowserRouter>
  );
};


export default App;