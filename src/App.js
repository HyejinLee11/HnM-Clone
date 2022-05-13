import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
// import ProductDetail from './page/ProductDetail';
import NavBar from './component/NavBar';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const [authenticate, setAuthenticate] = useState(false) //true면 로그인, false면 로그인 안됨

  useEffect(()=>{console.log("authenticate : ", authenticate)},[authenticate])

  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
