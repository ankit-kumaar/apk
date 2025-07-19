import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown } from "lucide-react"
import { IncidentChart } from "@/components/incident-chart"
import { EventFrequencyChart } from "@/components/event-frequency-chart"
import { RegionChart } from "@/components/region-chart"
import { CityMap } from "@/components/city-map"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Citywide Insights</h1>
        <p className="text-gray-400">
          Explore patterns, trends, and citywide insights with interactive visualizations for Bangalore.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <Select defaultValue="30days">
          <SelectTrigger className="w-40 bg-gray-800 border-gray-700">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="90days">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-40 bg-gray-800 border-gray-700">
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="traffic">Traffic</SelectItem>
            <SelectItem value="emergency">Emergency</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="bangalore">
          <SelectTrigger className="w-40 bg-gray-800 border-gray-700">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bangalore">Bangalore</SelectItem>
            <SelectItem value="central">Central</SelectItem>
            <SelectItem value="north">North</SelectItem>
            <SelectItem value="south">South</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg">Incident Trends Over Time in Bangalore</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold">12,345</div>
              <div className="flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                +5%
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-4">Last 30 Days</div>
            <IncidentChart />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg">Event Frequency by Type in Bangalore</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold">6,789</div>
              <div className="flex items-center text-red-400 text-sm">
                <TrendingDown className="h-4 w-4 mr-1" />
                -2%
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-4">Last 30 Days</div>
            <EventFrequencyChart />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg">Event Frequency by Region in Bangalore</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold">3,456</div>
              <div className="flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                +3%
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-4">Last 30 Days</div>
            <RegionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700 mb-6">
        <CardContent className="p-0">
          <CityMap />
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
          Download CSV
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Share Report</Button>
      </div>
    </div>
  )
}
