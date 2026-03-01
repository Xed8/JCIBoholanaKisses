import './globals.css';

export const metadata = {
  title: 'JCI Boholana Kisses | Developing Leaders for a Changing World',
  description:
    'JCI Boholana Kisses is an all women-LGBTQ++ chapter of Junior Chamber International Philippines, based in Tagbilaran City, Bohol. Empowering future leaders through community projects, leadership training, and advocacy.',
  keywords: [
    'JCI',
    'JCI Boholana Kisses',
    'Junior Chamber International',
    'Bohol',
    'Tagbilaran',
    'leadership',
    'women empowerment',
    'LGBTQ',
    'community organization',
    'Philippines',
  ],
  openGraph: {
    title: 'JCI Boholana Kisses | Developing Leaders for a Changing World',
    description:
      'An all women-LGBTQ++ chapter of JCI Philippines empowering future leaders in Bohol.',
    type: 'website',
    locale: 'en_PH',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A192F" />
      </head>
      <body>{children}</body>
    </html>
  );
}
