import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { youtube } from '../../dataYoutube.json'
import BarChart from '../BarChart';
import './BarChartPage.css'

function BarPositionYoutube() {
  const [Data, setData] = useState({
    labels: youtube.map((data) => data.name_position),
    datasets: [{
      label: "Youtube Position",
      data: youtube.map((data) => data.count_position),
      backgroundColor: [
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
        '#00ADB5',
        '#61A48D',
        '#9EA1D4',
        '#FF5858',
        '#7371D9',
        '#D071D9',
      ],
    }]
  }) 

  return (
    <div className="full-box">
      <div className="bar-chart">
        <BarChart chartData={Data}/>
      </div>
    </div>
  )
}

export default BarPositionYoutube
