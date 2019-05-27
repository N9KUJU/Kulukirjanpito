import React from 'react';
import moment from 'moment';

import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

import './Kulukortti.css';

function Kulukortti(props) {

  var maksupaiva = moment(props.data.maksupaiva);
  var kausi = "";
  var keskiarvo;
  if (props.data.kaudenalku && props.data.kaudenloppu) {
    var kaudenalku = moment(props.data.kaudenalku);
    var kaudenloppu = moment(props.data.kaudenloppu);
    kausi = kaudenalku.format("D.M.Y") + " - " + kaudenloppu.format("D.M.Y");
    var paivat = kaudenloppu.diff(kaudenalku, 'days');
    keskiarvo = props.data.summa / paivat * 30;
  }

    return (
      <div className="kulukortti">
        <div className="kulukortti__ryhma">
        <div className="kulukortti__rivi">
          <div className="kulukortti__tyyppi">{props.data.tyyppi}</div>
          <div className="kulukortti__summa">{props.data.summa.toFixed(2)} €</div>
        </div>
        <div className="kulukortti__rivi">
          <div className="kulukortti__maksupäivä">{maksupaiva.format("D.M.Y")}</div>
          <div className="kulukortti__ajanjakso">{kausi}</div>
        </div>
        <div className="kulukortti__rivi"> 
          <div className="kulukortti__maksunsaaja">{props.data.saaja}</div>
          <div className="kulukortti__keskiarvo">{ keskiarvo ? keskiarvo.toFixed(2) + " € / kk" : ""}</div>
        </div> 
        </div>
        <div className="kulukortti__linkki">
          <Link to={"/edit/" + props.data.id}><ArrowRight /></Link>
        </div>
      </div>
  
    );
  }

  export default Kulukortti;