import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export default function Reports() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Report an Issue</h1>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input placeholder="Briefly describe the issue" className="bg-gray-700 border-gray-600" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea
              placeholder="Provide detailed information about the issue..."
              className="bg-gray-700 border-gray-600 min-h-32"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Add Media</label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <Plus className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-400">Click to upload images or videos</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Issue Type</label>
            <Select>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="traffic">Traffic Issue</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="safety">Safety Concern</SelectItem>
                <SelectItem value="environment">Environmental</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-64 bg-gray-700 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LetAmhoTkvyb7OhHofWDh2mwlAv11e.png"
              alt="Bangalore Map for Issue Location"
              className="w-full h-full object-cover"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Report</Button>
        </CardContent>
      </Card>
    </div>
  )
}
