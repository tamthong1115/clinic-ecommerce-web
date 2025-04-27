import React from 'react';

const stats = [
  {
    label: "Today's Moneys",
    value: '$53,000',
    change: '+55%',
    changeColor: 'text-green-500',
    icon: <img src={'/icon/icon-home-active.png'} />,
    bgColor: 'bg-teal-400',
  },
  {
    label: "Today's Users",
    value: '2,300',
    change: '+5%',
    changeColor: 'text-green-500',
    icon: <img src={'/icon/icon-home-active.png'} />,
    bgColor: 'bg-teal-400',
  },
  {
    label: 'New Clients',
    value: '+3,020',
    change: '-14%',
    changeColor: 'text-red-500',
    icon: <img src={'/icon/icon-home-active.png'} />,
    bgColor: 'bg-teal-400',
  },
  {
    label: 'Total Sales',
    value: '$173,000',
    change: '+8%',
    changeColor: 'text-green-500',
    icon: <img src={'/icon/icon-home-active.png'} />,
    bgColor: 'bg-teal-400',
  },
];

const CardDashboardItem: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-5 rounded-2xl shadow-sm bg-white"
        >
          <div>
            <p className="text-sm text-gray-500 font-bold">{stat.label}</p>
            <div className={'flex items-end gap-0.5'}>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              <p className={`text-sm ${stat.changeColor} font-bold`}>
                {stat.change}
              </p>
            </div>
          </div>
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bgColor}`}
          >
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDashboardItem;
