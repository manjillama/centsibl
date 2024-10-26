"use client";
import React, { useEffect, useState, memo, useMemo } from "react";
import ReactApexChart from "react-apexcharts";

// eslint-disable-next-line react/display-name
const MonthlyChart = memo(
  ({ series, labels }: { series: string; labels: string }) => {
    const [chartOptions, setChartOptions] = useState<ApexCharts.ApexOptions>({
      colors: [
        "#e11d48",
        "#1982c4",
        "#4ade80",
        "#f59e0b",
        "#7c3aed",
        "#ffbe0b",
        "#fb5607",
        "#f472b6",
        "#014f86",
        "#14746f",
      ],
      legend: {
        labels: {
          colors: "rgba(225, 225, 225, 0.443)",
        },
        position: "right",
      },
      stroke: {
        width: 0,
      },
      labels: JSON.parse(labels),
      chart: {
        type: "donut",
      },
    });

    useEffect(() => {
      setChartOptions({ ...chartOptions, labels: JSON.parse(labels) });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [labels]);

    const updateChartOptions = () => {
      const width = window.innerWidth;
      if (width <= 1024) {
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          legend: { ...prevOptions.legend, position: "bottom" },
        }));
      } else {
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          legend: { ...prevOptions.legend, position: "right" },
        }));
      }
    };

    useEffect(() => {
      updateChartOptions();
      window.addEventListener("resize", updateChartOptions);

      return () => {
        window.removeEventListener("resize", updateChartOptions);
      };
    }, []);

    return (
      <ReactApexChart
        options={chartOptions}
        series={JSON.parse(series)}
        type="donut"
      />
    );
  }
);

export default MonthlyChart;
