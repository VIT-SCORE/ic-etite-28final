import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://icetite28.vit.ac.in"),
  title: {
    default: "ic-ETITE'28 | Third International Conference on Emerging Trends in Information Technology and Engineering",
    template: "%s | Third International Conference on Emerging Trends in Information Technology and Engineering",
  },
  description:
    "Official website of ic-ETITE'28, the Third International Conference on Emerging Trends in Information Technology and Engineering, organized by Vellore Institute of Technology, Vellore. Technically co-sponsored by IEEE. 10–11 February 2028.",
  keywords: [
    "ic-ETITE",
    "ic-ETITE 2028",
    "IEEE Conference",
    "VIT Vellore",
    "SCORE",
    "IEEE Information Theory Society",
    "Computer Science Conference",
    "Information Technology Conference",
    "Electronics Engineering",
    "IEEE Xplore",
  ],
  authors: [{ name: "Vellore Institute of Technology (VIT), Vellore" }],
  creator: "VIT Vellore, SCORE",
  publisher: "IEEE & Vellore Institute of Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Third International Conference on Emerging Trends in Information Technology and Engineering",
    description:
      "Official website of ic-ETITE'28, organized by Vellore Institute of Technology, Vellore. Technically co-sponsored by IEEE. 10–11 February 2028.",
    url: "https://icetite28.vit.ac.in",
    siteName: "ic-ETITE'28",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ic-ETITE'28 | IEEE International Conference",
    description:
      "Third International Conference on Emerging Trends in Information Technology and Engineering, VIT Vellore, 10–11 Feb 2028.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/icetite-logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data for Academic Conference Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AcademicConference",
              name: "The Third International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'28)",
              alternateName: "ic-ETITE'28",
              startDate: "2028-02-10",
              endDate: "2028-02-11",
              eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
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
              sponsor: [
                {
                  "@type": "Organization",
                  name: "IEEE",
                  url: "https://www.ieee.org",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#101B2E] antialiased">
        <LoadingScreen />
        <AppNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
