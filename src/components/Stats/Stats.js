import React from 'react';
import Content from '../Content/Content';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import stringHash from 'string-hash';
import './Stats.css';

function Stats(props)  {

    const reducer = (groupedData, currentItem) => {
      const index = groupedData.findIndex(item => item.tyyppi === currentItem.tyyppi);
      if (index >= 0) {
        groupedData[index].summa = groupedData[index].summa + currentItem.summa;
      } else {
        groupedData.push({tyyppi: currentItem.tyyppi, summa: currentItem.summa});
      }
      return groupedData;
    }

    let groupedData = props.data.reduce(reducer, []);

    let doughnutData = {
      labels: groupedData.map(item => item.tyyppi),
      datasets: [
        {
          data: groupedData.map(item=> item.summa),
          backgroundColor: groupedData.map(item => "hsl(" + (stringHash(item.tyyppi) % 360) + ", 80%, 70%)"),
        }
      ]
    }

    let linedata = props.data.map( item => ({x: item.maksupaiva, y: item.summa}) );

    let data = {
      datasets: [
        {
          label: "kulut",
          data: linedata,
          fill: false,
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderColor: 'rgba(0,0,0,0.3)'
        }
      ]
    }

    let options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                day: 'D.M.Y',
                month: 'M.Y'
              }
            }
          }
        ]
      }
    }

    return(
      <Content >
        <div className="stats">
        <h2>Tilastot</h2>
        <h3>Aikajanan kulut</h3>
        <div className="stats__graph">
        <Line data={data} options={options} />
        </div>
        <h3>Kulut tyypeittäin</h3>
        <div className="stats__graph">
        <Doughnut data={doughnutData}  />
        </div>

        </div>
      </Content>
    )
  }

  export default Stats;