import './globals.css';
import { Work_Sans } from 'next/font/google';

const WorkSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>{children}</body>
    </html>
  );
}
