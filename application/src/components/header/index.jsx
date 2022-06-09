import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ContainerHeader } from './style.js';

function Header() {
  const [text, setText] = useState('Lista');
  const navigate = useNavigate();

  const { id } = useParams();

  function showHideList(e) {
    e.preventDefault();
    let t;
    if(text === 'Lista') { 
      t = 'Voltar';
      navigate('/list');
    }else { 
      t = 'Lista';
      navigate('/');
    }
    setText(t);
  }

  useEffect(()=> {
    (id === '3') && setText('Voltar');
  }, []);

  return(
    <ContainerHeader>
      <button className='btn btn-primary' onClick={ e=> showHideList(e)}>{text}</button>
    </ContainerHeader>
  );
}

export default Header;