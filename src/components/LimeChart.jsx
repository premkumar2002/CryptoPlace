import Chart from "react-google-charts";
import React, { useEffect, useState } from "react";

const LimeChart = ({ hisCoinData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (hisCoinData.prices) {
      hisCoinData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [hisCoinData]);
  return (
    <div>
      <Chart chartType="LineChart" data={data} height="100%" legendToggle/>
    </div>
  );
};

export default LimeChart;
