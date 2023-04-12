import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Assignment_one', 'Assignment_two', 'Assignment_three', 'Assignment_four', 'Assignment_five', 'Assignment_six', "Assignment_seven", "Assignment_eight" ],
    datasets: [
      {
        label: 'Marks of Assignment :',
        data: [60, 60, 30, 60, 60, 30, 60, 46],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(200, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(155, 225, 56, 0.2)',
          'rgba(255, 200, 64, 0.2)',
          'rgba(175, 159, 80, 0.2)',
        ],
        borderWidth: 2,
      },
    ],
  };

const Statistics = () => {
  return (
    <div className='md:my-32 md:mx-40'>
      <Pie data={data}></Pie>
    </div>
  )
}

export default Statistics









