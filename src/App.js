import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/Main/About/About';
import Products from './components/Main/Products/Products';
import ProductDetails from './components/Main/Products/ProductDetails/ProductDetails';
import Login from './components/Main/Login/Login';
import Cart from './components/Main/Cart/Cart';
import Home from './components/Main/Home/Home';
import Footer from './components/Footer/Footer';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
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
              <Route path="/product/:_id" component={ProductDetails} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/cart" component={Cart} />
            </Switch>

            <NotificationContainer />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
