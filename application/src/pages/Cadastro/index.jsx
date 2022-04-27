import {useState} from 'react';
import { ConteinerCadastro } from './style';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';

function Cadastro () {
  const [step, setStep] = useState(1);
  const [cep, setCep] = useState('');

  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setStep(3);
  });

  function searchCep() {
    setStep(2);
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(({data}) => {
        setValue('endereço', data.logradouro);
        setValue('complemento', data.complemento);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
      });
  }

  switch(step) {
  case 1:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span className='active'></span>
            <span></span>
            <span></span>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>    
       
        <div className="cep">
          <input type="text" className= "form-control" placeholder='Digite o CEP' value={cep} onChange={(e) => setCep(e.target.value)}/>
          <button onClick={()=> searchCep()}><FaSearch /></button>
        </div>

      </ConteinerCadastro>
    );

  case 2:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span className='active' ></span>
            <span className='active' ></span>
            <span></span>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>
        
              
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input type="text" className="stepTwoInput" placeholder='Digite seu nome...' {...register('nome')}/>
          </div>

          <div className='form-control'>
            <input type="text" className='stepTwoInput' id='endereço' placeholder='Digite o endereço...'{...register('endereço')}/>
          </div>

          <div className="form-control">
            <input type="text" className="stepTwoInput" placeholder='Digite o complemento' {...register('complemento')}/>
          </div>

          <div className="form-control">
            <input type="text" className='stepTwoInput' id='numero' placeholder='Bairro' {...register('bairro')}/>
          </div>

          <div className='form-control'>
            <input type="text" className='stepTwoInput' id='cidade' placeholder='Digite a cidade...'{...register('cidade')}/>
          </div>
        
          <div className='form-control'>
            <textarea className="stepTwoInput" placeholder='Descreva o defeito...' {...register('descrição')}></textarea>
          </div>

          <div className='btn-wrapper'>
            <div>
              <button type="button" className="btn btn-primary" onClick={() => {
                setStep(1);
              }}>Voltar</button>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </form>
      </ConteinerCadastro>
    );

  case 3:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span className='active'></span>
            <span className='active'></span>
            <span className='active'></span>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>
        
        <div className='message'>
          <h4>SUCESSO</h4>
          <p>Em breve, estaremos trabalhando para<br />
            consertar esse problema nesse endereço.
          </p>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={ ()=> setStep(1) }>Voltar</button>
        </div>
      </ConteinerCadastro>
    );
  }  

  return; 
  
}

export default Cadastro;