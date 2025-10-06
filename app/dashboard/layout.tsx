"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Inbox,
  FileText,
  Building2,
  Briefcase,
  CreditCard,
  Settings,
  LogOut,
  Bot,
  Calculator,
  FileBarChart,
  Sheet,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", icon: Inbox, label: "Posteingang" },
    { href: "/dashboard/findea-ai", icon: Bot, label: "Findea AI" },
    { href: "/dashboard/accounting", icon: Calculator, label: "Buchhaltung" },
    { href: "/dashboard/income-statement", icon: FileBarChart, label: "Erfolgsrechnung" },
    { href: "/dashboard/balance-sheet", icon: Sheet, label: "Bilanz" },
    { href: "/dashboard/documents", icon: FileText, label: "Dokumente" },
    { href: "/dashboard/company", icon: Building2, label: "Meine Firma" },
    { href: "/dashboard/services", icon: Briefcase, label: "Dienstleistungen" },
    { href: "/dashboard/balance", icon: CreditCard, label: "Kontoübersicht" },
    { href: "/dashboard/invoices", icon: ExternalLink, label: "Rechnungen", external: true },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col">
        <div className="p-4 border-b">
          <img src="/findea-icon.png" alt="Findea" className="h-10 w-10" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive ? "bg-[#e0f2fe] text-[rgb(8,125,192)] font-medium" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t space-y-1">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            Einstellungen
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5" />
            Abmelden
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
