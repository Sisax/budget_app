import React from 'react';
import Item from '../components/Item';
import { useQuery } from 'react-query';
import logo from '../assets/IceCream.png'

const PORT = 'http://localhost:8080/api/items';

const fetchItems = async () => {
  const res = await fetch(PORT);
  return res.json();
}

function Items() {
  const { status, data } = useQuery('items', fetchItems);

  return (
    <div>
        <header className="m-10 p-6 w-2/3 mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-10 justify-between">
          <img src={logo} alt="logo" className="h-12" />
          <p>Thing to achieve</p>
          <p>Price</p>
          <p>You'll get this on</p>
          <p>Expected Daily Saving</p>
        </header>
        {
          status === 'success' ?
            data.map((item) => {
            return (
            <div key={item.item_id}>
              <Item data={item} />
            </div>
            )
          }) : 'Wait a second'
        }
      </div>
  )
}

export default Items;