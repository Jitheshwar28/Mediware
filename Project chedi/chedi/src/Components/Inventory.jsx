import React from 'react';
import { Link } from 'react-router-dom';
import '../inventory.css';

const Inventory = (props) => {
  const { data, search } = props;

  // Convert search to string and then filter the data based on the search term
  const filteredData = data.filter(item => {
    // Convert item name to lowercase and check if it includes the lowercase search term
    return item.name.toLowerCase().includes(String(search).toLowerCase());
  });

  return (
    <div className='container'>
      {filteredData.map(item => (
        <div className="card" key={item.id}>
          <div className="image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="content">
            <Link to={`/details/${item.id}`}>
              <span className="title">{item.name}</span>
            </Link>
            <p className="desc">{item.desc}</p>
            <Link className="action" to={`/details/${item.id}`}>
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
