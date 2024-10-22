import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function MonthlyChart({
  series,
  labels,
}: {
  series: number[];
  labels: string[];
}) {
  return (
    <ReactApexChart
      options={{
        legend: {
          labels: {
            colors: "rgba(225, 225, 225, 0.443)",
          },
        },
        chart: {
          type: "donut",
        },
        stroke: {
          width: 0,
        },
        labels,
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //       legend: {
        //         position: "bottom",
        //       },
        //     },
        //   },
        // ],
      }}
      series={series}
      type="donut"
    />
  );
}
