import {
    ComposedChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle,
  ResponsiveContainer,
  Line
} from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-primary text-white p-2 rounded-md shadow-sm">
        <p className="label">{`Date: ${label}`}</p>
        <p className="intro">{`UV: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

interface DataEntry {
  date: string;
  uv: number;
}

const calculateMaxValue = (data: DataEntry[]): number => {
  const maxValue = Math.max(...data.map((entry) => entry.uv));
  return Math.ceil(maxValue * 1.1); // Extend by 10%
};

const data = [
  {
    date: "21/6/2024",
    uv: 4000,
  },
  {
    date: "22/6/2024",
    uv: 3000,
  },
  {
    date: "23/6/2024",
    uv: 2000,
  },
  {
    date: "24/6/2024",
    uv: 2780,
  },
  {
    date: "25/6/2024",
    uv: 1890,
  },
  {
    date: "26/6/2024",
    uv: 2390,
  },
  {
    date: "27/6/2024",
    uv: 3490,
  },
];

const OrderBarChart = () => {
  const yAxisMax = calculateMaxValue(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 1 }}
      >
        <XAxis dataKey="date" tick={{ fill: "#001c51" }} />
        <YAxis tick={{ fill: "#001c51" }} domain={[0, yAxisMax]} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="uv"
          fill="#8db4ff"
          activeBar={<Rectangle fill="#0057ff" />}
        />
        <Line type="monotone" dataKey="uv" stroke="#001c51" strokeWidth={2}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default OrderBarChart;
