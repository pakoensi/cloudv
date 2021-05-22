import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/AppComponents/Banner";
import Products from "./components/AppComponents/Products";
//import Footer
import Footer from "./components/AppComponents/Footer";
import TopBar from "./components/AppComponents/TopBar";

const prod = [
  { id: 1, name: "bags", price: 23.4, media: { source: "hrhrhrhhrhrhr" } },
  { id: 2, name: "bags", price: 23.4, media: { source: "hrhrhrhhrhrhr" } },
  { id: 3, name: "socks", price: 24.4, media: { source: "hrhrhrhhrhrhr" } },
  {
    id: 4,
    name: "pictures",
    price: 43.4,
    media: { source: "hrhrhrhhrhrhr" },
  },
  { id: 5, name: "mugs", price: 3.4, media: { source: "hrhrhrhhrhrhr" } },
  { id: 5, name: "mugs", price: 3.4, media: { source: "hrhrhrhhrhrhr" } },
];

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(prod);
  }, []);

  const addProducts = () => {
    setProducts([]);
  };
  return (
    <div className="App">
      {/* <Banner /> */}
      <TopBar />
      <Products products={products} addProduct={addProducts} />
      <Footer />
    </div>
  );
}

export default App;
