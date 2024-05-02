import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from'./pages1/Header';
import Logo from'./pages1/Logo';
import Model from './pages1/Model';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/logo' element={<Logo />} />
      <Route path='/mol' element={<Model />}/>
     </Routes></BrowserRouter>
   </div>
  );
}

export default App;
