import React from 'react'
import { Chart as ChartJS} from 'chart.js/auto'
import { Line} from 'react-chartjs-2'

const Data = [
  {
    "label": "Jan",
    "PropertiesSold": 0,
    "PropertiesRent": 0
  },
  {
    "label": "Feb",
    "PropertiesSold": 1,
    "PropertiesRent": 3
  },
  {
    "label": "Mar",
    "PropertiesSold": 3,
    "PropertiesRent": 5
  },
  {
    "label": "Apr",
    "PropertiesSold": 8,
    "PropertiesRent": 17
  },
  {
    "label": "May",
    "PropertiesSold": 5,
    "PropertiesRent": 15
  },
  {
    "label": "Jun",
    "PropertiesSold": 12,
    "PropertiesRent": 21
  }
]
function StatsDash() {
  return (
    <div className="card  h-full rounded overflow-hidden shadow-lg p-5 top-20 shadow-r-xl mb-10">
      
      <Line 
      data={{
        labels : Data.map((data) => (data.label)),
        datasets : [
          {
            label : "Properties Sold",
            data : Data.map((data) => data.PropertiesSold),
            backgroundColor: "red",
            borderColor : "red"
          },
          {
            label : "Properties R",
            data : Data.map((data) => data.PropertiesRent),
            backgroundColor : "black",
            borderColor : "black"
          }
        ]
      }
      }/>
    </div>    
    
  )
}

export default StatsDash