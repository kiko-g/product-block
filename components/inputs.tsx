export function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (e: any) => void;
  options: string[];
}) {
  const id = `select-${label}`;

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">
        <span>{label}</span>
      </label>
      <select
        value={value}
        onChange={onChange}
        className="mb-2 w-full cursor-pointer rounded-md border border-gray-300 bg-gray-200 p-2 transition hover:opacity-80 dark:border-gray-700 dark:bg-gray-700"
      >
        {options.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
