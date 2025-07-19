import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Plus, Car, Flame, Eye, Heart, CarIcon } from "lucide-react"

const incidents = [
  {
    icon: Car,
    title: "Traffic accident reported on MG Road",
    time: "10:15 AM",
  },
  {
    icon: Flame,
    title: "Fire alarm triggered at 45 Brigade Road",
    time: "10:30 AM",
  },
  {
    icon: Eye,
    title: "Suspicious activity reported near Vidhana Soudha",
    time: "10:45 AM",
  },
  {
    icon: Heart,
    title: "Medical emergency at Cubbon Park",
    time: "11:00 AM",
  },
  {
    icon: CarIcon,
    title: "Police activity reported on Residency Road",
    time: "11:15 AM",
  },
]

export default function Analytics() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar - Filters */}
      <div className="w-80 bg-gray-900 border-r border-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">Time Range</label>
            <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Location</label>
            <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Event Types</label>
            <Slider defaultValue={[70]} max={100} step={1} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Data Sources</label>
            <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
          </div>
        </div>
      </div>

      {/* Center - Map */}
      <div className="flex-1 relative">
        <div className="h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6mWUv91602iDemxiY9Y0v38MZZP3uG.png"
            alt="Bangalore Map with Incidents"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Time Slider at bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-4 w-96">
          <div className="text-center mb-2">
            <span className="text-sm font-medium">Time Slider</span>
          </div>
          <Slider defaultValue={[60]} max={100} step={1} className="w-full mb-2" />
          <div className="flex justify-between text-sm text-gray-400">
            <span>00:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Add Issue Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <Button className="bg-white text-black hover:bg-gray-100">
            <Plus className="h-4 w-4 mr-2" />
            Add Issue
          </Button>
        </div>
      </div>

      {/* Right Sidebar - Real-time Feed */}
      <div className="w-80 bg-gray-900 border-l border-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Real-time Incident Feed</h2>

        <div className="space-y-4">
          {incidents.map((incident, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <incident.icon className="h-5 w-5 mt-1 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{incident.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{incident.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
