import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import { HOME_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: HOME_TITLE,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name, url: `${SITE.url}/authors/${SITE.author.slug}/` }],
  creator: SITE.author.name,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  appleWebApp: { capable: true, title: SITE.name, statusBarStyle: "default" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#16131f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        {/* Marks JS as available (for scroll-reveal) and restores the collapsed sidebar before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: "var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('fsd-sidebar-collapsed')==='1')d.classList.add('sb-collapsed')}catch(e){}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
