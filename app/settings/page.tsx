import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const subscriptions = [
  {
    location: "Downtown",
    eventTypes: "Civic Issues, Protests",
    notification: "Email",
    frequency: "Daily Summary",
  },
  {
    location: "Northside",
    eventTypes: "Weather Alerts",
    notification: "Push",
    frequency: "Instant",
  },
  {
    location: "Westside",
    eventTypes: "Traffic Incidents",
    notification: "WhatsApp",
    frequency: "Weekly Digest",
  },
]

export default function Settings() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Manage Alerts</h1>
        <p className="text-gray-400">
          Create and manage your real-time alert subscriptions for urban events and incidents.
        </p>
      </div>

      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle>Create New Subscription</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Select>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="northside">Northside</SelectItem>
                <SelectItem value="westside">Westside</SelectItem>
                <SelectItem value="eastside">Eastside</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-64 bg-gray-700 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKslDKFdXc5tkEe0vETWqJbZDlppmP.png"
              alt="Bangalore Map for Location Selection"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Select>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select Event Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traffic">Traffic Incidents</SelectItem>
                  <SelectItem value="emergency">Emergency Services</SelectItem>
                  <SelectItem value="weather">Weather Alerts</SelectItem>
                  <SelectItem value="civic">Civic Issues</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Notification Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="push">Push Notification</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instant">Instant</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily Summary</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700">Create Subscription</Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Active Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead>Location</TableHead>
                <TableHead>Event Types</TableHead>
                <TableHead>Notification Type</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((sub, index) => (
                <TableRow key={index} className="border-gray-700">
                  <TableCell>{sub.location}</TableCell>
                  <TableCell>{sub.eventTypes}</TableCell>
                  <TableCell>{sub.notification}</TableCell>
                  <TableCell>{sub.frequency}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-gray-600 bg-transparent">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-600 text-red-400 bg-transparent">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
