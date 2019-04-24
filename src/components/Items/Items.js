import React from 'react';
import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';
import { FloatingButton } from '../buttons'; 

function Items(props) {

  let rows = props.data.map(invoice => {
      return(<Kulukortti data={invoice} />)
    }

  );

    return(
      <Content >
        {rows}
        <FloatingButton secondary>+</FloatingButton>
    </Content>
    );
  }

  export default Items;