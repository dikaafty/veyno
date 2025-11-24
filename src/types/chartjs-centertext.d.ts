import { CenterTextOptions } from "@/components/Cashflow/DonutStatsCardChart";

declare module "chart.js" {
  interface PluginOptionsByType<TType extends keyof ChartTypeRegistry> {
    centerText?: TType extends "doughnut" ? CenterTextOptions : never;
  }
}