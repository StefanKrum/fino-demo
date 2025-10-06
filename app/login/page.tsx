"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <img src="/findea-login-banner.png" alt="Findea.ch and Taxea.ch" className="w-full" />
          </div>

          {/* Welcome */}
          <h1 className="text-2xl font-bold mb-2 text-center">Willkommen</h1>
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Melden Sie sich bei Findea an, um mit Findea Online fortzufahren.
          </p>

          {/* Form */}
          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <Label htmlFor="email">E-Mail-Adresse*</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Passwort*</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button type="button" className="text-sm text-red-600 hover:underline">
                Passwort vergessen?
              </button>
            </div>

            <Button type="submit" className="w-full bg-[rgb(8,125,192)] hover:bg-[rgb(6,100,154)] text-white" size="lg">
              Fortfahren
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
