import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

/* ==========================================================================
   FONTS

   next/font downloads these at build time and serves them from your own
   domain. No request to Google when someone visits, and no layout shift
   while they load.

   Each one sets a CSS variable that globals.css points at.
   ========================================================================== */

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

/* ==========================================================================
   SEO

   This is what Google shows in search results and what Slack, LinkedIn and
   WhatsApp show when someone pastes your link.

   All of it reads from data/profile.ts — you never edit this block.
   ========================================================================== */

const pageTitle = `${profile.name} - ${profile.title}`;
const pageDescription = `${profile.name} is a ${profile.title.toLowerCase()} based in ${profile.location}. Projects, skills and contact details.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

/* Structured data. This is how Google learns that this page is about a
   PERSON rather than a company, and connects it to your GitHub and
   LinkedIn. It makes a real difference when someone searches your name. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  sameAs: [profile.githubUrl, profile.linkedinUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body>
        {/* Lets keyboard users jump straight past the nav.
            Invisible until it receives focus. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}