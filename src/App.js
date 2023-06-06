import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';
import Header from './components/header';
import Home from './components/home';



function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/details' element={<Details />}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    </>
  );
}

export default App;
