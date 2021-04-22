import './App.scss';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/Main/About/About';
import Products from './components/Main/Products/Products';
import Login from './components/Main/Login/Login';
import Cart from './components/Main/Cart/Cart';
import Home from './components/Main/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="TopRightGradient" />
        <header>
          <Navbar />
        </header>
        <div className="BottomLeftGradient" />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
