import Link from 'next/link';
import { ReactNode } from 'react';
import LoginButton from '../components/LoginButton';
import '../styles/globals.css';
import Providers from './providers';

const pages = [
  { name: 'Home', route: '/' },
  { name: 'Product Description Page', route: '/mens/123' },
  { name: 'Product Listing Page', route: '/mens' },
  { name: 'Landing Page', route: '/page/1234' },
  { name: 'Cart', route: '/cart' },
  { name: 'Checkout', route: '/checkout' },
  { name: 'My Account', route: '/account' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <div className="flex gap-2 w-full items-center justify-around mb-5">
            {pages.map((page) => {
              return (
                <div key={page.name}>
                  <Link href={page.route}>{page.name}</Link>
                </div>
              );
            })}
          </div>
          <Providers>
            <LoginButton />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
