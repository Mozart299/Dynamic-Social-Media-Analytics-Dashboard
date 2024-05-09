// // components/ChartComponent.tsx
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// interface ChartData {
//   followers: number;
//   engagementRate: number;
//   clickThroughRate: number;
// }

// interface ChartComponentProps {
//   data: ChartData;
// }

// const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
//   const chartData = {
//     labels: ['Followers', 'Engagement Rate', 'Click-Through Rate'],
//     datasets: [
//       {
//         label: 'KPIs',
//         data: [data.followers, data.engagementRate, data.clickThroughRate],
//         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
//         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return <Bar data={chartData} />;
// };

// export default ChartComponent;
