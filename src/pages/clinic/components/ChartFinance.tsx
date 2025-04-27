import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Line,
} from 'recharts';

const data = [
  { month: 'Jan', current: 50, previous: 30 },
  { month: 'Feb', current: 90, previous: 70 },
  { month: 'Mar', current: 300, previous: 90 },
  { month: 'Apr', current: 250, previous: 120 },
  { month: 'May', current: 500, previous: 300 },
  { month: 'Jun', current: 100, previous: 300 },
  { month: 'Jul', current: 270, previous: 330 },
  { month: 'Aug', current: 90, previous: 280 },
  { month: 'Sep', current: 480, previous: 400 },
];

const ChartFinance: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full h-full">
      <h2 className="text-lg font-bold mb-1">Sales Overview</h2>
      <p className="text-sm text-green-500 mb-4">
        5% more <span className="text-gray-400">in 2021</span>
      </p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#000" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorCurrent)"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#000"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartFinance;
