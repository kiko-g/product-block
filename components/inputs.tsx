export function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (e: any) => void
  options: string[]
}) {
  const id = `select-${label}`

  return (
    <div className="flex flex-col w-full">
      <label className="text-sm font-medium mb-1">
        <span>{label}</span>
      </label>
      <select
        value={value}
        onChange={onChange}
        className="bg-gray-200 cursor-pointer hover:opacity-80 transition dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-2 w-full"
      >
        {options.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  )
}
