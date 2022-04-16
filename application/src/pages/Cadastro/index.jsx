import {useState} from 'react';
import { ConteinerCadastro } from './style';
import axios from 'axios';

function Cadastro () {
  const [step, setStep] = useState(1);
  const [cep, setCep] = useState('');

  console.log(cep);

  switch(step) {
  case 1:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: '0%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>
        
              
       
        <div className="cep">
          <input type="text" className= "form-control" placeholder='Digite o CEP' value={cep} onChange={(e) => setCep(e.target.value)}/>
        </div>
          
        <div className='btn'>
          <button type="button" className="btn btn-primary" onClick={() => {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => console.log(res.data));
            setStep(2);
          }}>Primary</button>
        </div>
      </ConteinerCadastro>
    );

  case 2:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>
        
              
        <form>
          <div className="nome">
            <input type="text" className="form-control" placeholder='Digite seu nome...'/>
          </div>
        
          <div className='endereço'>
            <input type="text" className='form-control' id='endereço' placeholder='Digite o endereço...'/>
            <input type="text" id='numero' placeholder='N°'/>
          </div>
        
          <div className="complemento">
            <input type="text" className="form-control" placeholder='Digite o complemento'/>
          </div>
        
          <div className='descrição'>
            <textarea className="form-control" placeholder='Descreva o defeito...'></textarea>
          </div>

          <div className='btn'>
            <button type="button" className="btn btn-primary" onClick={() => {
              setStep(3);
            }}>Primary</button>
          </div>
        </form>
      </ConteinerCadastro>
    );

  case 3:
    return (
      <ConteinerCadastro>
        <div>
          <h4>sucesso</h4>
          <p>Em breve, estaremos trabalhando para
consertar esse problema nesse endereço.</p>
        </div>
      </ConteinerCadastro>
    );
  }  

  return; 
  
}

export default Cadastro;