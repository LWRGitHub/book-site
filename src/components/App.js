import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

// App components
import Header from './Header';
import Books from './Books';

const App = () => (
  <HashRouter>
    <div className="container">
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/about" component={About} /> */}
      <Route path="/books" component={Books} />
    </div>
  </HashRouter>
);

export default App;
