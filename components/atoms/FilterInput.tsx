type Props = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export const FilterInput = ({ threshold, setThreshold }: Props) => (
  <div className="space-y-1">
    <label className="font-medium">Sales Threshold</label>
    <input
      type="number"
      value={threshold}
      onChange={(e) => setThreshold(Number(e.target.value))}
      className="border p-2 rounded w-full"
      placeholder="Enter minimum sales..."
    />
  </div>
);