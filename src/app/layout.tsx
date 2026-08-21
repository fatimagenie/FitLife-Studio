import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "FITLIFE STUDIO | Premier Gym in Gulbahar, Peshawar",
    template: "%s | FITLIFE STUDIO",
  },
  description:
    "FITLIFE STUDIO - the premier fitness center in Gulbahar, Peshawar with expert trainers, modern equipment, and personalized training programs. Transform your body and mind with our world-class facilities.",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "yoga",
    "crossfit",
    "peshawar",
    "gulbahar",
    "pakistan",
    "weight loss",
    "muscle building",
    "cardio",
    "strength training",
    "fitness center",
    "workout",
    "health",
    "wellness",
  ],
  authors: [{ name: "FITLIFE STUDIO" }],
  creator: "FITLIFE STUDIO",
  publisher: "FITLIFE STUDIO",
  metadataBase: new URL("https://fitlifestudio.com"),
  alternates: {
    canonical: "https://fitlifestudio.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitlifestudio.com",
    siteName: "FITLIFE STUDIO",
    title: "FITLIFE STUDIO | Premier Gym in Gulbahar, Peshawar",
    description:
      "FITLIFE STUDIO - the premier fitness center in Gulbahar, Peshawar with expert trainers, modern equipment, and personalized training programs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FITLIFE STUDIO - Premier Gym in Peshawar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FITLIFE STUDIO | Premier Gym in Gulbahar, Peshawar",
    description:
      "FITLIFE STUDIO - the premier fitness center in Gulbahar, Peshawar with expert trainers, modern equipment, and personalized training programs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FITLIFE STUDIO",
  description:
    "FITLIFE STUDIO - the premier fitness center in Gulbahar, Peshawar with expert trainers, modern equipment, and personalized training programs.",
  image: "https://fitlifestudio.com/og-image.jpg",
  url: "https://fitlifestudio.com",
  telephone: "+92 316 9689595",
  email: "info@fitlifestudio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gulbahar",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
    postalCode: "25000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0116,
    longitude: 71.5805,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "23:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Peshawar",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fitness Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group Classes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Weight Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cardio Training",
        },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
