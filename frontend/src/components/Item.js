/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function Item({ data }) {
  data.daily = Math.ceil(data.daily);
  data.saving_date_end = data.saving_date_end.toString().slice(0, 10);

  return (
    <div className="m-10 p-6 w-2/3 mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-10 justify-between">
      <img 
        src={data.image_url} 
        alt="Desired item image" 
        className="h-12"
      />
      <h1>{data.item_name}</h1>
      <p className="price">{data.price}</p>
      <p>{data.saving_date_end}</p>
      <p>{data.daily} HUF</p>
    </div>
  )
}

export default Item;
