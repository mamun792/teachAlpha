
import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Products from "./pages/Products";
import NotFoun from "./pages/NotFoun";


function App() {

 // const {data,isLoading,error} = 

  return (
    <>
    <div className="App min-h-screen bg-gray-50 text-gray-700">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/cart" element={<Card/>}/> 
        <Route path="/cart/:id" element={<Card/>}/> 
        <Route path="*" element={<NotFoun/>}/> 
     </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
