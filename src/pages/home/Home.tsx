import React, { useState, useEffect } from "react";
import General from "../../components/Cards/General";
import MostOrderedItemsProgressBar from "../../components/Charts/MostOrderedItemsBarChart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import HomeSales from "../../components/Cards/HomeSales";
import { BarChart, UserPlus, DollarSign, ShoppingCart } from "lucide-react";

const generateData = () => {
  return {
    totalSales: Math.floor(Math.random() * 10000) + 5000,
    totalRevenue: Math.floor(Math.random() * 20000) + 10000,
    totalExpenses: Math.floor(Math.random() * 5000) + 1000,
    totalCustomers: 8,
    symbol: "RM",
  };
};

export default function Home() {
  const [data, setData] = useState({
    totalSales: 0,
    totalRevenue: 0,
    totalExpenses: 0,
    totalCustomers: 0,
    symbol: "",
  });

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <div className="">
      <div className="flex gap-3 mb-4">
        <div className="border border-solid rounded-lg shadow-md p-6 w-3/5">
          <div className="text-lg font-bold">Sales summary</div>
          <div className="flex gap-2 mt-2">
            <HomeSales
              icon={<ShoppingCart />}
              title="Total Sales"
              data={data.totalSales}
              color={"bg-blue-100"}
              symbol={data.symbol}
            />
            <HomeSales
              icon={<BarChart />}
              title="Total Revenue"
              data={data.totalRevenue}
              color={"bg-green-100"}
              symbol={data.symbol}
            />
            <HomeSales
              icon={<DollarSign />}
              title="Total Expenses"
              data={data.totalExpenses}
              color={"bg-yellow-100"}
              symbol={data.symbol}
            />
            <HomeSales
              icon={<UserPlus />}
              title="Customers"
              data={data.totalCustomers}
              color={"bg-red-100"}
            />
          </div>
        </div>
        <Card className="flex-1 shadow-md">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {/* Add content for upcoming events here */}
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="border border-solid rounded-lg shadow-md">
          <General />
        </div>
        <Card className="p-4 shadow-md">
          <CardHeader className="py-2">
            <CardTitle>Most Ordered Items</CardTitle>
          </CardHeader>
          <CardContent>
            <MostOrderedItemsProgressBar />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
