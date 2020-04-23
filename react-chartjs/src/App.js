import React from 'react'
import './App.css'
import LineChart from './components/lineChart'
import BarChart from './components/barChart'
import DoughnutChart from './components/doughnutChart'

function App () {
  return (
    <div className='App'>
      <div className='chart'>
        <LineChart />
        <BarChart />
        <DoughnutChart />
      </div>
    </div>
  )
}

export default App