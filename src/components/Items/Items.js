import React from 'react';

import { Link } from 'react-router-dom';

import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';
import { FloatingButton } from '../buttons'; 

function Items(props) {

  let rows = props.data.map(invoice => {
      return(
      <Kulukortti data={invoice} key={invoice.id}/>)
    }

  );

    return(
      <Content >
        {rows}
        <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link>
    </Content>
    );
  }

  export default Items;