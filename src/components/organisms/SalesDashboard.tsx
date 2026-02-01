"use client";

import React, { useState, useMemo } from "react";
import {
  BarChartComponent,
  LineChartComponent,
  PieChartComponent,
  StatCard,
} from "@/components/molecules";
import { Button, Input, Card } from "@/components/atoms";
import {
  getSalesDataByYear,
  filterSalesByThreshold,
  getAllSalesData,
  SalesDataPoint,
} from "@/data/salesData";
import { BarChart3, TrendingUp, DollarSign } from "lucide-react";

type ChartType = "bar" | "line" | "pie";

export const SalesDashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(0);
  const [filterError, setFilterError] = useState<string>("");

  const salesData = getSalesDataByYear(selectedYear);
  const allYearsData = getAllSalesData();

  const filteredData = useMemo(() => {
    if (!salesData) return [];
    if (threshold <= 0) return salesData;
    return filterSalesByThreshold(salesData, threshold);
  }, [salesData, threshold]);

  const handleThresholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    if (value < 0) {
      setFilterError("Threshold cannot be negative");
      return;
    }
    setFilterError("");
    setThreshold(value);
  };

  const calculateStats = () => {
    if (!salesData) return { total: 0, average: 0, highest: 0 };

    const filtered = filteredData.length > 0 ? filteredData : salesData;
    const totalSales = filtered.reduce(
      (acc: number, item: SalesDataPoint) => acc + item.sales,
      0,
    );
    const averageSales = Math.round(totalSales / filtered.length);
    const highestSales = Math.max(
      ...filtered.map((item: SalesDataPoint) => item.sales),
    );

    return { total: totalSales, average: averageSales, highest: highestSales };
  };

  const stats = calculateStats();
  const currentYearData = allYearsData.find(
    (item) => item.year === selectedYear,
  );
  const formattedThreshold = threshold.toLocaleString();
  const growthPercentage =
    currentYearData && selectedYear > 2022
      ? (
          ((currentYearData.total -
            (allYearsData.find((item) => item.year === selectedYear - 1)
              ?.total || 0)) /
            (allYearsData.find((item) => item.year === selectedYear - 1)
              ?.total || 1)) *
          100
        ).toFixed(1)
      : "0";

  const renderChart = () => {
    if (!salesData || filteredData.length === 0) {
      return (
        <Card className="w-full p-8 text-center">
          <p className="text-gray-500 text-lg">
            No data available for the selected threshold.
          </p>
        </Card>
      );
    }

    switch (chartType) {
      case "bar":
        return (
          <BarChartComponent
            data={filteredData}
            title={`Sales Data - ${selectedYear} (Threshold: $${threshold})`}
          />
        );
      case "line":
        return (
          <LineChartComponent
            data={filteredData}
            title={`Sales Trend - ${selectedYear} (Threshold: $${threshold})`}
          />
        );
      case "pie":
        return (
          <PieChartComponent
            data={filteredData}
            title={`Sales Distribution - ${selectedYear} (Threshold: $${threshold})`}
            dataKey="sales"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sales Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Track and analyze your sales performance across multiple years
          </p>
        </div>

        {/* Year Selection */}
        <Card className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Select Year</h2>
          <div className="flex gap-3">
            {[2022, 2023, 2024].map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "primary" : "secondary"}
                onClick={() => setSelectedYear(year)}
                size="md"
              >
                {year}
              </Button>
            ))}
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Sales"
            value={`$${stats.total.toLocaleString()}`}
            icon={<DollarSign />}
            trend="up"
            trendValue={`${growthPercentage}% YoY`}
          />
          <StatCard
            title="Average Sales"
            value={`$${stats.average.toLocaleString()}`}
            icon={<TrendingUp />}
            trend="up"
            trendValue="2.5% MoM"
          />
          <StatCard
            title="Highest Sales"
            value={`$${stats.highest.toLocaleString()}`}
            icon={<BarChart3 />}
            trend="up"
            trendValue="5.2% vs last year"
          />
        </div>

        {/* Chart Type Selection */}
        <Card className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Chart Type</h2>
          <div className="flex gap-3">
            {(["bar", "line", "pie"] as const).map((type) => (
              <Button
                key={type}
                variant={chartType === type ? "primary" : "secondary"}
                onClick={() => setChartType(type)}
                size="md"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Chart
              </Button>
            ))}
          </div>
        </Card>

        {/* Filter Section */}
        <Card className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Custom Filter
          </h2>
          <div className="max-w-sm">
            <Input
              label="Sales Threshold (minimum sales value)"
              id="threshold"
              type="number"
              value={threshold}
              onChange={handleThresholdChange}
              placeholder="Enter minimum sales threshold"
              error={filterError}
            />
            {threshold > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                {`Showing ${filteredData.length} of ${salesData?.length || 0} months with sales >= $${formattedThreshold}`}
              </p>
            )}
          </div>
        </Card>

        {/* Main Chart */}
        <div className="mb-8">{renderChart()}</div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LineChartComponent
            data={filteredData.length > 0 ? filteredData : salesData || []}
            title="Revenue Trend"
          />
          <PieChartComponent
            data={filteredData.length > 0 ? filteredData : salesData || []}
            title="Monthly Distribution"
            dataKey="revenue"
          />
        </div>
      </div>
    </div>
  );
};
