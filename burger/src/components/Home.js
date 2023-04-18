import React from 'react';
import {Link} from 'react-router-dom'

export const Home = () => {
  return(
    <div>
      <div>
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  ) 
};
