import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-full">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
            K
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Kaffeehaus</h1>
            <button className="text-sm text-blue-600 hover:underline">(change)</button>
          </div>
        </div>
      </div>

      {/* Inbox */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Posteingang Kaffeehaus</h2>

        {/* Notification Cards */}
        <div className="space-y-4">
          {/* New Invoice Card */}
          <div className="relative">
            <span className="absolute -top-2 right-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
              NEW
            </span>
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold flex-shrink-0">
                  K
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">Neue Rechnung verfügbar</h3>
                      <p className="text-sm text-muted-foreground">
                        Eine neue Rechnung steht zur Zahlung bereit. Klicken Sie hier, um direkt zum Kontostand zu gelangen.
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">26. Juni</span>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 h-auto font-normal hover:underline">
                    Schliessen
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Year End Flow Card */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold flex-shrink-0">
                K
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">Aufgabe: Jahresabschluss-Flow abschließen</h3>
                    <p className="text-sm text-muted-foreground">
                      Bitte füllen Sie den Fragebogen aus, laden Sie die Dokumente hoch und schließen Sie den Vorgang ab.
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">10. Januar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
