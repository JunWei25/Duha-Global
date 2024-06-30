import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF00FF"];

const MostOrderedItemsProgressBar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-5">
        <ResponsiveContainer width={300} height={250}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="current"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        {data.map((entry, index) => (
          <div key={index} className="flex items-center justify-normal mb-2">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <div>{`${entry.item}: ${entry.current}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostOrderedItemsProgressBar;
