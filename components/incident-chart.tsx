"use client"

export function IncidentChart() {
  return (
    <div className="h-32 flex items-end justify-between">
      <svg viewBox="0 0 300 100" className="w-full h-full">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points="0,80 50,60 100,70 150,40 200,30 250,50 300,20"
          className="text-blue-400"
        />
      </svg>
      <div className="flex justify-between text-xs text-gray-400 mt-2 w-full">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
      </div>
    </div>
  )
}
