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
import About from './About';
import Footer from './Footer';
import All from './genres/All';

const App = () => (
  <HashRouter>
    <div className="container rounded bg-transparent">
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
        <Route path="/all" component={All} />
        <Route component={Home} />
      </Switch>
    </div>
    <Footer />
  </HashRouter>
);

export default App;
