import { Card, ListWrapper } from './style';

function List() {
  return(
    <ListWrapper>
      <li>
        <Card>
          <h6 className='card-items'>Nome: Tony Stark</h6>
          <h6 className='card-items'>Endereço: Av Atlantica</h6>
          <h6 className='card-items'>Complemento: Próximo a acadêmia Smart Fit</h6>
          <h6 className='card-items'>Bairro: Copacabana</h6>
          <h6 className='card-items'>Cidade: Rio de Janeiro</h6>
          <h6 className='card-items'>Defeito: A rua possui um buraco logo após um quebra-molas, 
            além de diversos desniveis na calçada.
          </h6>
        </Card>
      </li>
      <li>
        <Card>
          <h6 className='card-items'>Nome: Steve Rogers</h6>
          <h6 className='card-items'>Endereço: Av. Duque de Caxias</h6>
          <h6 className='card-items'>Complemento: Na altura do hospital geral</h6>
          <h6 className='card-items'>Bairro: Vila Militar</h6>
          <h6 className='card-items'>Cidade: Rio de Janeiro</h6>
          <h6 className='card-items'>Defeito: Tem diversos desnivelamentos na calçada.
          </h6>
        </Card>
      </li>
      <li>
        <Card>
          <h6 className='card-items'>Nome: Natasha Romanoff</h6>
          <h6 className='card-items'>Endereço: Av. Glaucio Gil</h6>
          <h6 className='card-items'>Complemento: Rua próximo ao sacolão do gilmar</h6>
          <h6 className='card-items'>Bairro: Recreio dos Bandeirantes</h6>
          <h6 className='card-items'>Cidade: Rio de Janeiro</h6>
          <h6 className='card-items'>Defeito: As arvores estão com suas raizes a mostra, deixando as calçadas
          totalmente destruidas.
          </h6>
        </Card>
      </li>
      <li>
        <Card>
          <h6 className='card-items'>Nome: Peter Parker</h6>
          <h6 className='card-items'>Endereço: Av. Rio Branco</h6>
          <h6 className='card-items'>Complemento: Próximo ao infoshop</h6>
          <h6 className='card-items'>Bairro: Centro</h6>
          <h6 className='card-items'>Cidade: Rio de Janeiro</h6>
          <h6 className='card-items'>Defeito: A rua possui diversos buracos, e a calçada é 
          impossível para um cadeirante se locomover.
          </h6>
        </Card>
      </li>
    </ListWrapper>
  );
}

export default List;