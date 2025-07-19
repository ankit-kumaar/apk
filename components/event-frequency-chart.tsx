"use client"

export function EventFrequencyChart() {
  const data = [
    { label: "Traffic", value: 40 },
    { label: "Complaints", value: 60 },
    { label: "Sentiment", value: 30 },
    { label: "Other", value: 50 },
  ]

  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={item.label} className="flex items-center justify-between">
          <span className="text-sm text-gray-400">{item.label}</span>
          <div className="flex-1 mx-3">
            <div className="h-6 bg-gray-700 rounded">
              <div className="h-full bg-blue-500 rounded" style={{ width: `${item.value}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
