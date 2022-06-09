import { useState } from 'react';
import { ConteinerCadastro } from './style';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

function Cadastro() {
  const [step, setStep] = useState(1);
  const [cep, setCep] = useState('');

  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    defaultValues: {
      name: null,
      address: null,
      complement: null,
      neighborhood: null,
      city: null,
      issue: null
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    await axios.post('http://localhost:8080/complaint', data)
      .then(() => {
        setStep(3);
        toast.success('Denúncia salva com sucesso');
      })
      .catch(() => toast.error('Ops...Parece que algo deu errado'));
  });

  const searchCep = async () => {
    if(cep !== '') {
      await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({ data }) => {
          setValue('address', data.logradouro);
          setValue('complement', data.complemento);
          setValue('neighborhood', data.bairro);
          setValue('city', data.localidade);
        });
    }
    setStep(2);
  };

  switch (step) {
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
            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>

        <div className="cep">
          <input type="text" className="form-control" placeholder='Digite o CEP' value={cep} onChange={(e) => setCep(e.target.value)} />
          <button onClick={() => searchCep()}><FaSearch /></button>
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
            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100">
            </div>
          </div>
        </div>


        <form onSubmit={onSubmit}>
          <div className={ errors.name ? 'form-control erro' : 'form-control' }>
            <input type="text" className="stepTwoInput" placeholder='Digite seu nome...' {...register('name', {required: true})} />
          </div>

          <div className={ errors.address ? 'form-control erro' : 'form-control' }>
            <input type="text" className='stepTwoInput' id='endereço' placeholder='Digite o endereço...'{...register('address', {required: true})} />
          </div>

          <div className={ errors.complement ? 'form-control erro' : 'form-control' }>
            <input type="text" className="stepTwoInput" placeholder='Digite o complemento' {...register('complement', {required: true})} />
          </div>

          <div className={ errors.neighborhood ? 'form-control erro' : 'form-control' }>
            <input type="text" className='stepTwoInput' id='numero' placeholder='Bairro' {...register('neighborhood', {required: true})} />
          </div>

          <div className={ errors.city ? 'form-control erro' : 'form-control' }>
            <input type="text" className='stepTwoInput' id='cidade' placeholder='Digite a cidade...'{...register('city', {required: true})} />
          </div>

          <div className={ errors.issue ? 'form-control erro' : 'form-control' }>
            <textarea className="stepTwoInput" placeholder='Descreva o defeito...' {...register('issue', {required: true})}></textarea>
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
            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100"></div>
          </div>
        </div>

        <div className='message'>
          <h4>SUCESSO</h4>
          <p>Em breve, estaremos trabalhando para<br />
              consertar esse problema nesse endereço.
          </p>
        </div>
      </ConteinerCadastro>
    );
  }

  return;

}

export default Cadastro;