import React from "react";
import { ResponsiveContainer } from "recharts";

interface DataEntry {
  item: string;
  current: number; // current progress
  total: number; // total value
}

const data: DataEntry[] = [
  {
    item: "Chicken",
    current: 3000,
    total: 5000,
  },
  {
    item: "Pork",
    current: 2000,
    total: 4000,
  },
  {
    item: "Vegetables",
    current: 1500,
    total: 3000,
  },
  {
    item: "Water",
    current: 1200,
    total: 2500,
  },
  {
    item: "Fish",
    current: 800,
    total: 2000,
  },
];

// Determine the highest current value
const maxCurrent = Math.max(...data.map((entry) => entry.current));

const MostOrderedItemsProgressBar = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <div className="flex flex-col items-center justify-center w-full">
      {data.map((entry, index) => (
        <div key={index} className="mb-1 w-full">
          <div className="flex justify-between mb-1 w-full">
            <div className="text-left font-medium">{entry.item}</div>
            <div className="text-right font-medium">{entry.current}</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="h-4 rounded-full"
              style={{
                width: `${(entry.current / maxCurrent) * 100}%`,
                backgroundColor: "#8db4ff",
              }}
            />
          </div>
        </div>
      ))}
    </div>
    </ResponsiveContainer>
  );
};

export default MostOrderedItemsProgressBar;
