import React from "react";
import { Card, Badge } from "@/components/atoms";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendValue,
}) => {
  return (
    <Card className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        {trendValue && (
          <div className="mt-2 flex items-center gap-2">
            <Badge
              variant={
                trend === "up"
                  ? "success"
                  : trend === "down"
                    ? "error"
                    : "primary"
              }
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "-"} {trendValue}
            </Badge>
          </div>
        )}
      </div>
      {icon && <div className="text-blue-600 text-4xl">{icon}</div>}
    </Card>
  );
};
