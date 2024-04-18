import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductList from './components/productList/ProductList';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductList/>
      <Footer></Footer>
    </div>
  );
}

export default App;
