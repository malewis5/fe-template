import Link from 'next/link';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <ul>
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <Link href="product">Product Page</Link>
            </li>
            <li>
              <Link href="product-listing">Product Listing Page</Link>
            </li>
            <li>
              <Link href="cart">Cart Page</Link>
            </li>
            <li>
              <Link href="checkout">Checkout Page</Link>
            </li>
          </ul>
          {children}
        </main>
      </body>
    </html>
  );
}
