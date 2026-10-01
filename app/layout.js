import './globals.css';

export const metadata = {
  title: 'Jihan Fauziah | Portfolio — Junior Web Developer',
  description:
    'Personal portfolio of Jihan Fauziah, Software Engineering student & Junior Web Developer specializing in JavaScript, React, and Next.js modern web applications.',
  keywords: [
    'Jihan Fauziah',
    'Junior Web Developer',
    'Portfolio',
    'Next.js',
    'React',
    'JavaScript',
    'SMK Rekayasa Perangkat Lunak',
    'Web Development',
  ],
  authors: [{ name: 'Jihan Fauziah' }],
  creator: 'Jihan Fauziah',
  openGraph: {
    title: 'Jihan Fauziah | Portfolio — Junior Web Developer',
    description:
      'Personal portfolio of Jihan Fauziah, Software Engineering student & Junior Web Developer specializing in JavaScript, React, and Next.js modern web applications.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
