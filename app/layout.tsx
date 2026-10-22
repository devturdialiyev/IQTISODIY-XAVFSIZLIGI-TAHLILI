import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EnterpriseSecurityMonitor — Korxona xavfsizlik monitori',
  description: 'Korxonaning moliyaviy va iqtisodiy xavfsizligini real vaqt rejimida tahlil qilish platformasi.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>
}
