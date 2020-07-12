import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Books from './Books';
import Home from './Home';

const App = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/books" component={Books} />
        <Route component={Home} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
