import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
// import { allUser } from '../allUser.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarOtherLike({data, allUser}) {
  var maleUser = allUser.filter((user) => user.sex == 'OTHER')

  
  // var likeList = [] 
  
  // data.forEach((brand) => {
  //   likeList.push(maleUser.filter((m) => brand.like.includes(m._id)))
  // });
  const [userData, setData] = useState({
    labels: data.map((data) => data.title),
    datasets: [{
      label: "OTHER",
      data: null,
      backgroundColor: [
        '#7371D9',
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
        '#00ADB5',
        '#61A48D',
        '#9EA1D4',
        '#FF5858',
        '#D071D9',
      ],
    }]
  }) 

  useEffect(() => {
    var positionBrandStore = {} 
    data.forEach((brand) => { 
      positionBrandStore[brand._id] = 0
    })
    maleUser.forEach((user) => {
      user.ads_poitions_selected.forEach((ads) => {
        console.log(ads)
        positionBrandStore[ads.brand_id] += 1
      })
      
    })
    setData({
      labels: data.map((data) => data.title),
      datasets: [{
        label: "OTHER",
        data: Object.values(positionBrandStore),
        backgroundColor: [
          '#7371D9',
          '#FD8A8A',
          '#F1F7B5',
          '#88D7B5',
          '#00ADB5',
          '#61A48D',
          '#9EA1D4',
          '#FF5858',
          '#D071D9',
        ],
      }]
    })
  }, [data,allUser])

  return (
    <div className="full-box">
      <div className="bar-chart">
        <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarOtherLike
