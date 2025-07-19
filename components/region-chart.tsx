"use client"

export function RegionChart() {
  const regions = [
    { name: "Central", value: 85 },
    { name: "North", value: 70 },
    { name: "South", value: 60 },
    { name: "West", value: 45 },
    { name: "East", value: 90 },
    { name: "Northeast", value: 35 },
    { name: "Southeast", value: 55 },
  ]

  return (
    <div className="space-y-2">
      {regions.map((region) => (
        <div key={region.name} className="flex items-center justify-between">
          <span className="text-sm text-gray-400 w-20">{region.name}</span>
          <div className="flex-1 mx-3">
            <div className="h-4 bg-gray-700 rounded">
              <div className="h-full bg-blue-500 rounded" style={{ width: `${region.value}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
