import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Cháy nhà ôm bình ga',
  description: 'Wo ai ni',
};

const font = Nunito({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ font.className }>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          { children }
        </ClientOnly>
      </body>
    </html>
  )
}
