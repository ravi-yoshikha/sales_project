import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SalesDataPoint } from "@/data/salesData";
import { Card } from "@/components/atoms";

interface BarChartComponentProps {
  data: SalesDataPoint[];
  title?: string;
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
  title = "Sales Overview",
}) => {
  return (
    <Card className="w-full">
      <h3 className="text-lg font-bold mb-4 text-gray-800">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) =>
              value !== undefined ? `$${value.toLocaleString()}` : ""
            }
            contentStyle={{ backgroundColor: "#f3f4f6", border: "none" }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" name="Sales" />
          <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
