import {useState} from 'react';
import { ConteinerCadastro } from './style';
import axios from 'axios';
import {useForm} from 'react-hook-form';

function Cadastro () {
  const [step, setStep] = useState(1);
  const [cep, setCep] = useState('');

  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setStep(3);
  });

  switch(step) {
  case 1:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span style={{background: 'rgba(97, 218, 251, 1)'}}></span>
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
            setStep(2);
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
              .then(({data}) => {
                setValue('endereço', data.logradouro);
                setValue('complemento', data.complemento);
                setValue('bairro', data.bairro);
                setValue('cidade', data.localidade);
              });
          }}>Proximo</button>
        </div>
      </ConteinerCadastro>
    );

  case 2:
    return (
      <ConteinerCadastro>
        <div className='wrapper-progress'>
          <div className='mark'>
            <span style={{background: 'rgba(97, 218, 251, 1)'}}></span>
            <span style={{background: 'rgba(97, 218, 251, 1)'}}></span>
            <span></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>
        
              
        <form onSubmit={onSubmit}>
          <div className="nome">
            <input type="text" className="form-control" placeholder='Digite seu nome...' {...register('nome')}/>
          </div>

          <div className='cidade'>
            <input type="text" className='form-control' id='endereço' placeholder='Digite o endereço...'{...register('cidade')}/>
          </div>
        
          <div className='endereço'>
            <input type="text" className='form-control' id='endereço' placeholder='Digite o endereço...'{...register('endereço')}/>
          </div>

          <div className="bairro">
            <input type="text" id='numero' placeholder='Bairro' {...register('bairro')}/>
          </div>
        
          <div className="complemento">
            <input type="text" className="form-control" placeholder='Digite o complemento' {...register('complemento')}/>
          </div>
        
          <div className='descrição'>
            <textarea className="form-control" placeholder='Descreva o defeito...'{...register('descrição')}></textarea>
          </div>

          <div className='btn'>
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
            <span style={{background: 'rgba(97, 218, 251, 1)'}}></span>
            <span style={{background: 'rgba(97, 218, 251, 1)'}}></span>
            <span style={{background: 'rgba(97, 218, 251, 1)'}}></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>
        
        <div className='message'>
          <h4>SUCESSO</h4>
          <p>Em breve, estaremos trabalhando para<br />
            consertar esse problema nesse endereço.</p>
        </div>
      </ConteinerCadastro>
    );
  }  

  return; 
  
}

export default Cadastro;