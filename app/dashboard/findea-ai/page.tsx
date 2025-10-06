"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mic, Video, X } from "lucide-react"

// 1. YouTube Video and API Constants
const YOUTUBE_VIDEO_ID = "b9aSHOgSyBY"
// enablejsapi=1: Required for JavaScript communication
// controls=0: Hides all player controls (menu bar)
// modestbranding=1: Minimizes YouTube branding/logo
// iv_load_policy=3: Hides video annotations/cards
// rel=0: Prevents related videos from showing at the end
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0`
const YOUTUBE_ORIGIN = "https://www.youtube.com" 

export default function FindeaAIPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    {
      role: "ai",
      content: "Hallo! Ich bin Ihr Findea AI assistant. Wie kann ich Ihnen heute mit Ihren Finanzen helfen?",
    },
  ])
  const [isVideoOn, setIsVideoOn] = useState(false)
  // Ref to hold the iframe element
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setMessages([...messages, { role: "user", content: message }])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Ich verstehe Ihre Frage. Ich helfe Ihnen gerne dabei...",
        },
      ])
    }, 1000)
  }

  // Function to send the "playVideo" command to the YouTube player
  const sendPlayCommand = () => {
    const iframe = iframeRef.current
    if (iframe && iframe.contentWindow) {
      // YouTube API postMessage format to execute the playVideo function
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo"}', 
        YOUTUBE_ORIGIN
      )
      console.log("Sent 'playVideo' command to YouTube iframe.")
    }
  }

  const handleStartVideo = () => {
    setIsVideoOn(true)
  }

  const handleStopVideo = () => {
    setIsVideoOn(false)
  }
  
  // Effect to wait for the iframe to load and then send the play command
  useEffect(() => {
    if (isVideoOn) {
      // A short delay ensures the iframe is mounted and the YouTube player is ready
      const timer = setTimeout(() => {
        sendPlayCommand()
      }, 500) 

      return () => clearTimeout(timer)
    }
  }, [isVideoOn])


  return (
    <div className="p-8 bg-gray-100 min-h-full">
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

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Findea AI Assistant</h2>
      </div>

      <div className="mb-6 bg-white border border-gray-300 rounded px-4 py-3">
        <p className="text-sm">
          <span className="font-semibold text-red-600">Beta:</span>{" "}
          <span className="text-gray-900">
            Bitte beachten Sie, dass sich diese neue Funktion noch in der Beta-Phase befindet. Sollten Ihnen
            Unstimmigkeiten auffallen, freuen wir uns über ihr Feedback
          </span>
        </p>
      </div>

      <div className="mb-6 bg-white border rounded-lg p-4">
        <p className="text-sm font-medium text-gray-900 mb-2">Der AI Assistant hat Zugriff auf:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2">
          <li>Ihre Buchhaltungsdaten</li>
          <li>Ihren Mailsverlauf mit Findea.ch</li>
          <li>Ihre allgemeinen Informationen in Fino</li>
          <li>Ihre Dokumente in Fino</li>
        </ul>
        <p className="mt-3 text-xs text-gray-600 italic">
          Zu Zwecken der Qualitätssicherung und des Trainings des Personals wird dies Gespräch aufgezeichnet.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative bg-gradient-to-br from-[#164e63] to-[#0f4f6c] aspect-video flex items-center justify-center">
              {isVideoOn ? (
                <>
                  <iframe
                    ref={iframeRef} 
                    key="youtube-video"
                    width="100%"
                    height="100%"
                    // UPDATED SRC for minimal UI
                    src={YOUTUBE_EMBED_URL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                  <button
                    onClick={handleStopVideo}
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors z-20"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">
                      Klicken Sie auf das Kamerasymbol, um die Live-Konversation mit Ihrem KI-Assistenten zu starten
                    </p>
                  </div>
                  <button
                    onClick={handleStartVideo}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
                    aria-label="Start video"
                  >
                    <Video className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="border-t">
              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.role === "user" ? "bg-[#164e63] text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="border-t p-4 bg-gray-50">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Schreiben Sie Ihre Nachricht..."
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" size="icon" className="flex-shrink-0 bg-transparent">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button type="submit" className="bg-[#164e63] hover:bg-[#0f4f6c] flex-shrink-0" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
