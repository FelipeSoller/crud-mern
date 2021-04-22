import React from 'react';


import { Doughnut } from 'react-chartjs-2';

const Chart = () => {

    return (
        <Doughnut
          data={{
            labels: ['1', '2', '3'],
            datasets: [
              {
                data: [300, 50, 100],
                borderColor: "#f0f0f0",
                backgroundColor: [
                  "#1d3557",
                  "#457b9d",
                  "#fca311",
                  "#e63946",
                  "#6a040f",
                  "#1a535c",
                  "#772e25",
                ],
              },
            ],
          }}
          width={1200}
          height={300}
          margin-left={50}
          options={{
            responsive: false,
            maintainAspectRatio: false,
          }}
        />
    );
}

export default Chart;