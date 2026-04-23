"use client";

import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PriceChart({ productId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const history = await getPriceHistory(productId);

      const chartData = history.map((item) => ({
        date: new Date(item.checked_at).toLocaleDateString(),
        price: parseFloat(item.price),
      }));

      setData(chartData);
      setLoading(false);
    }

    loadData();
  }, [productId]);

  return (
    <LineChart
      style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}>
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="purple"
        strokeWidth={2}
        name="My data series name"
      />
      <XAxis dataKey="name" tick={renderCustomAxisTick} height={50} />
      <YAxis
        width="auto"
        label={{ value: "UV", position: "insideLeft", angle: -90 }}
      />
      <Legend align="right" />
      <Tooltip />
    </LineChart>
  );
}
