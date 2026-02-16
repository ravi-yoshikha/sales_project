import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SalesDataPoint } from "@/data/salesData";
import { Card } from "@/components/atoms";

interface PieChartComponentProps {
  data: SalesDataPoint[];
  title?: string;
  dataKey?: "sales" | "revenue";
}

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#f97316",
  "#6366f1",
  "#14b8a6",
  "#eab308",
  "#6b21a8",
];

export const PieChartComponent: React.FC<PieChartComponentProps> = ({
  data,
  title = "Sales Distribution",
  dataKey = "sales",
}) => {
  const pieData = data.map((item) => ({
    name: item.month,
    value: item[dataKey],
  }));

  return (
    <Card className="w-full">
      <h3 className="text-lg font-bold mb-4 text-gray-800">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }: { name?: string; percent?: number }) => {
              const p = percent ?? 0;
              return `${name ?? ""} ${(p * 100).toFixed(0)}%`;
            }}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
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
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
