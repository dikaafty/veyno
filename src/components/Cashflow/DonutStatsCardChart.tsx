"use client";

import {
  Chart as ChartJS,
  registerables,
  type ChartOptions,
  type ChartData,
  type Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

type DonutStatsCardChartProps = {
  title: string;
  total: string;
  items: { title: string; value: number }[];
};

type CenterTextLine = {
  text: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  offsetY?: number;
};

const DonutStatsCardChart = () => {
  return <></>;
};

export default DonutStatsCardChart;
