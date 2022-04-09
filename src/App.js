import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import Login from './componenets/Login/Login';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default App;