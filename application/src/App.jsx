import Cadastro from './pages/Cadastro';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/header';
import List from './components/list';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer theme={'colored'} />
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
