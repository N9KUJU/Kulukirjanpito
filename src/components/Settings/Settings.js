import React from 'react';
import Content from '../Content/Content';
import Button from '../buttons';

import './Settings.css';

function Settings(props) {

    const handleSubmit = function(event) {
      event.preventDefault();
      let kulutyyppi = event.target.elements.kulutyyppi.value;
      props.onFormSubmit(kulutyyppi);
      event.target.elements.kulutyyppi.value = "";
    }

    return(
      <Content>
        <div className="settings">
          <h2>Profiili</h2>
          <div className="settings__profile">
                <div className="settings__userdata">
                 <div><img src={props.user.photoURL} alt=""></img></div>
                 <div>{props.user.displayName}<br />{props.user.email}</div>
                </div>
            <div>
              <Button onClick={props.onLogout}>Logout</Button>
            </div>  
          </div>
          <h2>Asetukset</h2>
          <h3>Kulutyypit</h3>
          <div className="settings__items">
            {props.selectList.map(item => <div key={item}>{item}</div>) }
            <form onSubmit={handleSubmit}>
              <div className="settingsForm"> 
                <input type="text" name="kulutyyppi" />
                <Button type="submit" primary>LISÄÄ</Button>
              </div>
            </form>
          </div>
        </div>
      </Content>
    )
  }

  export default Settings;