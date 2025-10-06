import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="bg-[#fef08a] py-2 text-center text-sm">
        <span className="font-semibold">Ihr Partner für klare Finanzen.</span> Mehr Durchblick, bessere Entscheidungen.
      </div>

      <div className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-end gap-6 px-6 py-2 text-sm">
          <Link href="#" className="text-[rgb(8,125,192)] hover:underline flex items-center gap-1">
            <span className="text-[rgb(8,125,192)]">📄</span> Blog
          </Link>
          <Link href="#" className="text-[rgb(8,125,192)] hover:underline flex items-center gap-1">
            <span className="text-[rgb(8,125,192)]">⬇️</span> Downloads
          </Link>
          <Link href="#" className="text-[rgb(8,125,192)] hover:underline flex items-center gap-1">
            <span className="text-[rgb(8,125,192)]">❓</span> FAQ
          </Link>
          <Link href="#" className="text-[rgb(8,125,192)] hover:underline flex items-center gap-1">
            <span className="text-[rgb(8,125,192)]">🎧</span> Help-Center
          </Link>
          <div className="flex items-center gap-2 ml-4">
            <button className="text-gray-700 hover:text-[rgb(8,125,192)]">DE</button>
            <button className="text-gray-400 hover:text-[rgb(8,125,192)]">FR</button>
            <button className="text-gray-400 hover:text-[rgb(8,125,192)]">IT</button>
            <button className="text-gray-400 hover:text-[rgb(8,125,192)]">EN</button>
          </div>
          <Link href="/login" className="text-gray-700 hover:text-[rgb(8,125,192)] ml-4">
            Login
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/findea-logo.svg" alt="Findea.ch" className="h-10" />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <button className="text-sm">Services ▾</button>
            <button className="text-sm">Wieso Findea.ch? ▾</button>
            <button className="text-sm">Über uns ▾</button>
            <button className="text-sm">Karriere</button>
            <button className="text-sm">Preise</button>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-[rgb(8,125,192)] text-[rgb(8,125,192)] bg-transparent">
                So einfach geht's
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-[rgb(8,125,192)] hover:bg-[rgb(6,100,154)]">Kostenloses Erstgespräch 📞</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Yellow Banner */}
      {/* <div className="bg-[#fef08a] py-2 text-center text-sm">
        <span className="font-semibold">Ihr Partner für klare Finanzen.</span> Mehr Durchblick, bessere Entscheidungen.
      </div> */}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-balance">
              Sie führen Ihr Unternehmen. Wir kümmern uns um den Rest.
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Mit unseren Spezialist:innen und digitalen Tools sparen Sie Zeit, senken Kosten und Ihre Finanzen sind
              bestens betreut.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[rgb(8,125,192)]" />
                <span>Fehlerfreie Buchhaltung</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[rgb(8,125,192)]" />
                <span>Gesetzeskonforme Lohnbuchhaltung</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[rgb(8,125,192)]" />
                <span>Steuererklärung mit maximalen Steuerabzügen</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[rgb(8,125,192)]" />
                <span>Unabhängige Revisionsarbeiten ... und vieles mehr!</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/login">
                <Button size="lg" className="bg-[rgb(8,125,192)] hover:bg-[rgb(6,100,154)]">
                  Angebot entdecken
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[rgb(8,125,192)] text-[rgb(8,125,192)] bg-transparent"
                >
                  Erstgespräch buchen
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="/findea-hero.webp" alt="Professional working" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  )
}
