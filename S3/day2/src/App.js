import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>

        {/* to access both all the products at once and single 
        product by button click */}
        {/* <Route path="products" element={<Products />}></Route>
        <Route path="products/:id" element={<Product />}></Route> */}

        {/* <Route path="products/:id/:name" element={<Product />}> */}
        {/* the above id and name can be extracted using usePara hooks in  the Product component */}

        {/* having child information in parent, ie products, 
        then display by id */}
        {/* Outlet tag works only if you have nested Routes */}
        {/* the below 2 lines state that /products page will lead 
        us to Products page only and anything after products denoted as
        products/* will ALSO lead us to Products page, So to show that particular
        page for example, if products/1 should lead us to produsct 1 page
        then we need to use Outlet to show product 1 page */}
        <Route path="products" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// / is not mandatory
// for nested info we need 3 changes
// 1, parent route should accept all info from child url using *
// 2. wrap child with parent and remove duplicate path info
// 3. use outlet tag on where we want to show child info
