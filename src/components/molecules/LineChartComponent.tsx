import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SalesDataPoint } from "@/data/salesData";
import { Card } from "@/components/atoms";

interface LineChartComponentProps {
  data: SalesDataPoint[];
  title?: string;
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({
  data,
  title = "Sales Trend",
}) => {
  return (
    <Card className="w-full">
      <h3 className="text-lg font-bold mb-4 text-gray-800">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value: number | string | undefined) => {
              if (value === undefined || value === null) return "";
              const num =
                typeof value === "number"
                  ? value
                  : parseFloat(String(value)) || 0;
              return `$${num.toLocaleString()}`;
            }}
            contentStyle={{ backgroundColor: "#f3f4f6", border: "none" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            name="Sales"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            name="Revenue"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
