'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import dynamic from "next/dynamic";

const ThemeSelector = dynamic(
  () => import("@/components/settings/ThemeSelector"),
  {ssr: false}
)


const SettingsClient = () => {
  const [orderEmails, setOrderEmails] = useState(true)
  const [weeklySummary, setWeeklySummary] = useState(false)

  return (
    <div className="p-4 space-y-6 max-w-3xl h-full">

      {/* Profile */}
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col h-full gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              defaultValue={`Victor Souza`}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              defaultValue={'victor.souza.pro@outlook.com'}
            />
          </div>

          <div className="space-y-2">
            <Label>Role</Label>
            <Input value="Admin" disabled />
          </div>

          <Button className="mt-2">Save changes</Button>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Order notifications</p>
              <p className="text-sm text-muted-foreground">
                Email me when a new order is created
              </p>
            </div>
            <Switch
              checked={orderEmails}
              onCheckedChange={setOrderEmails}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Weekly summary</p>
              <p className="text-sm text-muted-foreground">
                Receive a weekly activity report
              </p>
            </div>
            <Switch
              checked={weeklySummary}
              onCheckedChange={setWeeklySummary}
            />
          </div>

          <div className="space-y-2">
            <Label>Language</Label>
            <Select defaultValue="en">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="font-medium">Theme</p>
            <ThemeSelector/>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default SettingsClient