import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, ListWrapper } from './style';

function List() {
  const [listItems, setListItems] = useState(null);
  console.log(listItems);

  async function getListItems() {
    const {data} = await axios.get('http://localhost:8080/complaint');
    setListItems(data.data);
  }

  useEffect(() => {
    getListItems();
  },[]);
  return(
    <ListWrapper>
      {listItems?.map((item) => {
        return (
          <li key={item._id}>
            <Card>
              <h6 className='card-items'>Nome: {item?.name}</h6>
              <h6 className='card-items'>Endereço: {item?.address}</h6>
              <h6 className='card-items'>Complemento: {item?.complement}</h6>
              <h6 className='card-items'>Bairro: {item?.neighborhood}</h6>
              <h6 className='card-items'>Cidade: {item?.city}</h6>
              <h6 className='card-items'>Defeito: {item?.issue}
              </h6>
            </Card>
          </li>
        );
      })}
    </ListWrapper>
  );
}

export default List;