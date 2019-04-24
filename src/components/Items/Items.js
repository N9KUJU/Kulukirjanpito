import React from 'react';
import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';
import testdata from '../../testdata';

function Items(props) {

  let rows = testdata.map(invoice => {
      return(<Kulukortti data={invoice} />)
    }

  );

    return(
      <Content >
        {rows}
    </Content>
    );
  }

  export default Items;