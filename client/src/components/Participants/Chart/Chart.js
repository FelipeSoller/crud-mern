import React from 'react';

import { useSelector } from 'react-redux';

import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
  const participants = useSelector((state) => state.participants)

  return (
      <Doughnut
        data={{
          labels: participants.map(({ firstName }) => firstName),
          datasets: [
            {
              data: participants.map(({ participation }) => participation),
              borderColor: "#f0f0f0",
              backgroundColor: [
                "#003f5c",
                "#2f4b7c",
                "#665191",
                "#a05195",
                "#d45087",
                "#f95d6a",
                "#ff7c43",
                "#ffa600",
              ],
            },
          ],
        }}
        width={400}
        height={100}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
  );
}

export default Chart;