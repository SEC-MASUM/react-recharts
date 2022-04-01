import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      supplier: "supplier A",
      price: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      supplier: "supplier B",
      price: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      supplier: "supplier C",
      price: 2000,
      sales: 9800,
      amt: 2290,
    },
    {
      supplier: "supplier D",
      price: 2780,
      sales: 3908,
      amt: 2000,
    },
    {
      supplier: "supplier E",
      price: 1890,
      sales: 4800,
      amt: 2181,
    },
    {
      supplier: "supplier F",
      price: 2390,
      sales: 3800,
      amt: 2500,
    },
    {
      supplier: "supplier G",
      price: 3490,
      sales: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <LineChart width={800} height={400} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8190c8"></Line>
        <Line type="monotone" dataKey="sales" stroke="#8334d8"></Line>
        <XAxis dataKey={"supplier"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
