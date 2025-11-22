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

export type CenterTextOptions = {
  lines: CenterTextLine[];
  lineSpacing?: number;
};

const centerTextPlugin: Plugin<"doughnut", CenterTextOptions> = {
  id: "centerText",
  afterDraw: (chart, args, options) => {
    if (!options?.lines?.length) return;

    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    const lineSpacing = options.lineSpacing ?? 6;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const totalHeight =
      options.lines.reduce((sum, line) => {
        const size = line.fontSize ?? 16;
        return sum + size;
      }, 0) +
      lineSpacing * (options.lines.length - 1);

    let currentY = height / 2 - totalHeight / 2 + 5;

    for (const line of options.lines) {
      const fontSize = line.fontSize ?? 16;
      const fontWeight = line.fontWeight ?? "normal";
      const color = line.color ?? "#fff";
      const offsetY = line.offsetY ?? 0;

      ctx.font = `${fontWeight} ${fontSize}px SFProDisplayRegular`;
      ctx.fillStyle = color;

      ctx.fillText(line.text, width / 2, currentY + offsetY);

      currentY += fontSize + lineSpacing;
    }

    ctx.restore();
  },
};

ChartJS.register(...registerables, centerTextPlugin);

const DonutStatsCardChart = ({
  title,
  total,
  items,
}: DonutStatsCardChartProps) => {
  return <></>;
};

export default DonutStatsCardChart;
