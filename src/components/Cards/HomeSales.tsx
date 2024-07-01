import React from "react";

interface SalesCardProps {
  icon: React.ReactNode;
  title: string;
  data: number;
  color?: string;
  symbol?: string; 
}

const HomeSales: React.FC<SalesCardProps> = ({ icon, title, data, color, symbol}) => {
  return (
    <div className={`w-56 border border-solid rounded-md ${color ? color : "border-gray-200"}`}>
      <div className="p-4">
        <div className="mb-1">{icon}</div>
        <div className="flex items-center mb-2">
          <div className="text-xl font-bold">{symbol} {data}</div>
        </div>
        <h1 className="text-sm text-gray-600">{title}</h1>
      </div>
    </div>
  );
};

export default HomeSales;
