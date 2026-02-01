export interface SalesDataPoint {
  month: string;
  sales: number;
  revenue: number;
}

export interface SalesRecord {
  year: number;
  data: SalesDataPoint[];
  total: number;
}

// Mock sales data inspired by e-commerce datasets
const salesData2022: SalesDataPoint[] = [
  { month: "Jan", sales: 4200, revenue: 84000 },
  { month: "Feb", sales: 3800, revenue: 76000 },
  { month: "Mar", sales: 5100, revenue: 102000 },
  { month: "Apr", sales: 4600, revenue: 92000 },
  { month: "May", sales: 5900, revenue: 118000 },
  { month: "Jun", sales: 6400, revenue: 128000 },
  { month: "Jul", sales: 7200, revenue: 144000 },
  { month: "Aug", sales: 6800, revenue: 136000 },
  { month: "Sep", sales: 5500, revenue: 110000 },
  { month: "Oct", sales: 6100, revenue: 122000 },
  { month: "Nov", sales: 7800, revenue: 156000 },
  { month: "Dec", sales: 8200, revenue: 164000 },
];

const salesData2023: SalesDataPoint[] = [
  { month: "Jan", sales: 5100, revenue: 102000 },
  { month: "Feb", sales: 4900, revenue: 98000 },
  { month: "Mar", sales: 6200, revenue: 124000 },
  { month: "Apr", sales: 5800, revenue: 116000 },
  { month: "May", sales: 7100, revenue: 142000 },
  { month: "Jun", sales: 7600, revenue: 152000 },
  { month: "Jul", sales: 8400, revenue: 168000 },
  { month: "Aug", sales: 7900, revenue: 158000 },
  { month: "Sep", sales: 6800, revenue: 136000 },
  { month: "Oct", sales: 7400, revenue: 148000 },
  { month: "Nov", sales: 9100, revenue: 182000 },
  { month: "Dec", sales: 9600, revenue: 192000 },
];

const salesData2024: SalesDataPoint[] = [
  { month: "Jan", sales: 6200, revenue: 124000 },
  { month: "Feb", sales: 5900, revenue: 118000 },
  { month: "Mar", sales: 7300, revenue: 146000 },
  { month: "Apr", sales: 6900, revenue: 138000 },
  { month: "May", sales: 8200, revenue: 164000 },
  { month: "Jun", sales: 8700, revenue: 174000 },
  { month: "Jul", sales: 9500, revenue: 190000 },
  { month: "Aug", sales: 9000, revenue: 180000 },
  { month: "Sep", sales: 7800, revenue: 156000 },
  { month: "Oct", sales: 8500, revenue: 170000 },
  { month: "Nov", sales: 10200, revenue: 204000 },
  { month: "Dec", sales: 10800, revenue: 216000 },
];

export const getAllSalesData = (): SalesRecord[] => {
  const calculate2022Total = salesData2022.reduce(
    (acc, item) => acc + item.sales,
    0,
  );
  const calculate2023Total = salesData2023.reduce(
    (acc, item) => acc + item.sales,
    0,
  );
  const calculate2024Total = salesData2024.reduce(
    (acc, item) => acc + item.sales,
    0,
  );

  return [
    { year: 2022, data: salesData2022, total: calculate2022Total },
    { year: 2023, data: salesData2023, total: calculate2023Total },
    { year: 2024, data: salesData2024, total: calculate2024Total },
  ];
};

export const getSalesDataByYear = (year: number): SalesDataPoint[] | null => {
  const dataMap: Record<number, SalesDataPoint[]> = {
    2022: salesData2022,
    2023: salesData2023,
    2024: salesData2024,
  };
  return dataMap[year] || null;
};

export const filterSalesByThreshold = (
  data: SalesDataPoint[],
  threshold: number,
): SalesDataPoint[] => {
  return data.filter((item) => item.sales >= threshold);
};
