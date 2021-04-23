import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/Main/About/About';
import Products from './components/Main/Products/Products';
import Login from './components/Main/Login/Login';
import Cart from './components/Main/Cart/Cart';
import Home from './components/Main/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="TopRightGradient" />
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
