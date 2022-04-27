import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { ContainerHeader } from './style.js';

function Header() {
  const [text, setText] = useState('Lista');
  const navigate = useNavigate();

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

  return(
    <ContainerHeader>
      <button className='btn btn-primary' onClick={ e=> showHideList(e)}>{text}</button>
    </ContainerHeader>
  );
}

export default Header;