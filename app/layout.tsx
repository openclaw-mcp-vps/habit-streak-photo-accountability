import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StreakSnap — Photo-Based Habit Tracking with AI Verification',
  description: 'Submit daily photos as proof of habit completion. AI verifies authenticity, maintains streaks, and keeps you accountable. Start your streak today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="39d9d208-3e88-49b9-8d57-14a2e49b22ed"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
