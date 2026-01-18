import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Dr. Shukla Physiotherapy - Top Rated Home Physiotherapy Services",
  description:
    "Expert home physiotherapy services specializing in Neuro & Ortho therapy, Post-operative care, and Pain Management. certified physiotherapists at your doorstep.",
  keywords: "Dr. Shukla Physiotherapy, physiotherapy, home visit, rehabilitation, back pain, sports injury, neuro therapy, ortho therapy, post-operative care, pain management",
  openGraph: {
    title: "Dr. Shukla Physiotherapy - Top Rated Home Physiotherapy Services",
    description: "Expert home physiotherapy services specializing in Neuro & Ortho therapy, Post-operative care, and Pain Management.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Shukla Physiotherapy",
    url: "https://drshuklaphysiotherapy.com", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shukla Physiotherapy - Top Rated Home Physiotherapy Services",
    description: "Expert home physiotherapy services at your doorstep.",
  },
  alternates: {
    canonical: "https://drshuklaphysiotherapy.com", 
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Shukla Physiotherapy",
    image: "https://drshuklaphysiotherapy.com/logo.png", 
    description: "Expert home physiotherapy services specializing in Neuro & Ortho therapy, Post-operative care, and Pain Management.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Health St",
      addressLocality: "New Delhi",
      addressRegion: "DL", // region
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    url: "https://drshuklaphysiotherapy.com",
    telephone: "+919451194384",
    openingHoursSpecification: [
        {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        opens: "08:00",
        closes: "20:00"
        },
        {
        "@type": "OpeningHoursSpecification",
        
        }
    ],
    priceRange: "$$",
  }

  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable}`}>
       <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Dr. Shukla Physiotherapy" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dr. Shukla Physio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0d9488" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
