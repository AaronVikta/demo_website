import React from 'react';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
function App() {
  return (
    <div className="App">
        <Router>
          <PageWrapper>
            <Route
            exact={true}
            path="/"
            component={Home}/>

            <Route
            path="/about"
            component={About}
            />
            <Route
            path="/contact"
            component={Contact}
            />
             </PageWrapper>
        </Router>
    </div>
  );
}

export default App;
