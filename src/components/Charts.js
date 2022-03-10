import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const { simulacion } = useSelector((store) => store.app);

  const data = [
    {
      name: "Año 0",
      uv: 100,
      pv: -2400,
      amt: 2400,
    },
    {
      name: "Año 1",
      uv: 400,
      pv: -1398,
      amt: 2210,
    },
    {
      name: "Año 2",
      uv: 1000,
      pv: 100,
      amt: 1000,
    },
    {
      name: "Año 3",
      uv: 1500,
      pv: 250,
      amt: 1500,
    },
    {
      name: "Año 4",
      uv: 2000,
      pv: 500,
      amt: 2000,
    },
    {
      name: "Año 5",
      uv: 2500,
      pv: 1000,
      amt: 2500,
    },
  ];

  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={simulacion}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="INGRESOS" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ano5" fill="#8884d8" />
        <Bar dataKey="ano4" fill="#8884d8" />
        <Bar dataKey="ano3" fill="#82ca9d" />
        <Bar dataKey="ano2" fill="#8884d8" />
        <Bar dataKey="ano1" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default Charts;
