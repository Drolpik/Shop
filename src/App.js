import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/Main/About/About';
import Products from './components/Main/Products/Products';
import Login from './components/Main/Login/Login';
import Cart from './components/Main/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/shop" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
