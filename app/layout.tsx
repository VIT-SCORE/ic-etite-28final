import type { Metadata } from "next";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://icetite28.vit.ac.in"),
  title: {
    default:
      "ic-ETITE'28 | International Conference on Emerging Trends in Information Technology and Engineering",
    template: "%s | ic-ETITE'28",
  },
  description:
    "Join ic-ETITE'28, the Third International Conference on Emerging Trends in Information Technology and Engineering, organized by VIT Vellore and technically co-sponsored by IEEE, on 10–11 February 2028.",
  keywords: [
    "ic-ETITE 2028",
    "International Conference",
    "VIT Vellore",
    "IEEE Conference",
    "Computer Science Conference",
    "Information Technology",
    "Engineering",
    "Research Conference",
    "Emerging Technologies",
  ],
  authors: [{ name: "Vellore Institute of Technology, Vellore" }],
  creator: "VIT Vellore - SCORE",
  publisher: "Vellore Institute of Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://icetite28.vit.ac.in",
    siteName: "ic-ETITE'28",
    title:
      "ic-ETITE'28 | Third International Conference on Emerging Trends in Information Technology and Engineering",
    description:
      "VIT Vellore presents the Third International Conference on Emerging Trends in Information Technology and Engineering, 10–11 February 2028.",
    images: [
      {
        url: "/assets/icetite-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "ic-ETITE'28 International Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ic-ETITE'28 | International Conference",
    description:
      "Third International Conference on Emerging Trends in Information Technology and Engineering, VIT Vellore, 10–11 February 2028.",
    images: ["/assets/icetite-logo.jpeg"],
  },
  icons: {
    icon: "/assets/icetite-logo.jpeg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en" data-scroll-behavior="smooth">
        <head>
        <link rel="icon" href="/assets/icetite-logo.jpeg" />
        {/* JSON-LD Structured Data for Academic Conference Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Third International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'28)",
              alternateName: "ic-ETITE'28",
              description:
                "International Conference organized by Vellore Institute of Technology, Vellore, technically co-sponsored by IEEE.",
              startDate: "2028-02-10",
              endDate: "2028-02-11",
              eventStatus: "https://schema.org/EventScheduled",
              url: "https://icetite28.vit.ac.in",
              location: {
                "@type": "Place",
                name: "Vellore Institute of Technology",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "School of Computer Science Engineering and Information Systems (SCORE), VIT",
                  addressLocality: "Vellore",
                  addressRegion: "Tamil Nadu",
                  postalCode: "632014",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "CollegeOrUniversity",
                name: "Vellore Institute of Technology, Vellore",
                url: "https://vit.ac.in",
              },
              sponsor: {
                "@type": "Organization",
                name: "IEEE",
                url: "https://www.ieee.org",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#101B2E] antialiased">
        <AppNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
