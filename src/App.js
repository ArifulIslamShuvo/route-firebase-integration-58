import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import Login from './componenets/Login/Login';
import Orders from './componenets/Orders/Orders';
import Products from './componenets/Products/Products';
import Register from './componenets/Register/Register';
import RequireAuth from './componenets/RequireAuth/RequireAuth';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
};

export default App;