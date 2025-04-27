import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

const data = [
  { name: 'Mon', users: 300 },
  { name: 'Tue', users: 240 },
  { name: 'Wed', users: 100 },
  { name: 'Thu', users: 280 },
  { name: 'Fri', users: 480 },
  { name: 'Sat', users: 340 },
  { name: 'Sun', users: 230 },
];

const BarChar: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md w-full p-6">
      <div className="h-[15rem] py-5 bg-gradient-to-br from-[#1a1a40] to-[#0d0d2b] rounded-2xl shadow-md w-full items-center">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={5}>
            <XAxis dataKey="name" hide />
            <YAxis stroke="#ccc" tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
            <Bar dataKey="users" fill="#ccc" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h2 className="text-lg font-bold p-0 mt-4 mb-1">Active Users</h2>
      <div className={'p-0 m-0 flex gap-2'}>
        <p className="text-green-400 font-bold">+23% </p>
        <p className={'text-gray-400 font-bold'}>than last week</p>
      </div>
      <div className="flex justify-between text-sm text-black mt-4">
        <div>
          <div className={'flex items-center'}>
            <img
              className={'w-8 h-8'}
              src="/icon/icon-home-active.png"
              alt=""
            />
            <p className={'text-gray-400 font-bold text-[1rem]'}>Users</p>
          </div>
          <p className="font-bold text-black text-xl">32,984</p>
        </div>
        <div>
          <div className={'flex items-center'}>
            <img
              className={'w-8 h-8'}
              src="/icon/icon-home-active.png"
              alt=""
            />
            <p className={'text-gray-400 font-bold text-[1rem]'}>Clicks</p>
          </div>
          <p className="font-bold text-black text-xl">2.42m</p>
        </div>
        <div>
          <div className={'flex items-center'}>
            <img
              className={'w-8 h-8'}
              src="/icon/icon-home-active.png"
              alt=""
            />
            <p className={'text-gray-400 font-bold text-[1rem]'}>Sales</p>
          </div>
          <p className="font-bold text-black text-xl">2,400$</p>
        </div>
        <div>
          <div className={'flex items-center'}>
            <img
              className={'w-8 h-8'}
              src="/icon/icon-home-active.png"
              alt=""
            />
            <p className={'text-gray-400 font-bold text-[1rem]'}>Items</p>
          </div>
          <p className="font-bold text-black text-xl">320</p>
        </div>
      </div>
    </div>
  );
};

export default BarChar;

export const CustomCursor = (props: any) => {
  const { x, y, width, height } = props;
  const barWidth = 5;

  return (
    <rect
      x={x + width / 2 - barWidth / 2}
      y={y}
      width={barWidth}
      height={height}
      fill="rgba(255,255,255,0.2)"
      rx={4}
    />
  );
};

export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-white rounded-xl p-2 shadow-md text-xs w-24 opacity-80 flex flex-col">
        <p className="font-semibold bg-black p-2 rounded-t-xl">{label}</p>
        <p className="font-bold bg-gray-500 p-2 rounded-b-xl">
          {payload[0].value} users
        </p>
      </div>
    );
  }

  return null;
};
