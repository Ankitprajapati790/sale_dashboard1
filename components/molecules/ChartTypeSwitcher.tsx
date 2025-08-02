type Props = {
  chartType: 'bar' | 'line' | 'pie';
  setChartType: (type: 'bar' | 'line' | 'pie') => void;
};

export const ChartTypeSwitcher = ({ chartType, setChartType }: Props) => (
  <div className="flex gap-2">
    {(['bar', 'line', 'pie'] as const).map((type) => (
      <button
        key={type}
        onClick={() => setChartType(type)}
        className={`px-4 py-2 rounded border ${chartType === type ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
      >
        {type.toUpperCase()}
      </button>
    ))}
  </div>
);
