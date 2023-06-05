import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/home';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>

    </Routes>
    </>
  );
}

export default App;
