import React from 'react';
import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';

import './EditItem.css';

function EditItem(props)  {
    return(
      <Content >

        <div className="edititem">

        <h2>Kulun muokkaaminen</h2>

        <ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} />
        
      </div>

      </Content>
    )
  }

  export default EditItem;