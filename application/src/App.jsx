import Cadastro from './pages/Cadastro';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './components/header';
import List from './components/list';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
