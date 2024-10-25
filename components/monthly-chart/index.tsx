"use client";
import { useEffect, useMemo, useRef, useState } from "react";
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
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                width: 500,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 560,
            options: {
              chart: {
                width: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      }}
      series={series}
      type="donut"
    />
  );
}
