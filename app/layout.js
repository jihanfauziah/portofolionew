import './globals.css';

export const metadata = {
  title: 'Jihan Fauziah | Portofolio — Junior Web Developer',
  description:
    'Personal portofolio of Jihan Fauziah, Software Engineering student & Junior Web Developer specializing in JavaScript, and Next.js modern web applications.',
  keywords: [
    'Jihan Fauziah',
    'Junior Web Developer',
    'Portofolio',
    'Next.js',
    'React',
    'JavaScript',
    'SMK Negeri 1 Cianjur, Jurusan Rekayasa Perangkat Lunak',
    'Web Development',
  ],
  authors: [{ name: 'Jihan Fauziah' }],
  creator: 'Jihan Fauziah',
  openGraph: {
    title: 'Jihan Fauziah | Portofolio — Junior Web Developer',
    description:
      'Personal portofolio of Jihan Fauziah, Software Engineering student & Junior Web Developer specializing in JavaScript, and Next.js modern web applications.',
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
