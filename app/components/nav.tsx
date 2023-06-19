'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav(data: any) {
  const pathname = usePathname();
  const products = data.data?.length;

  return (
    <nav className="flex items-center justify-between p-16">
      <Link href="/" className="text-xl text-gray-900">
        Mockup-Store
      </Link>
      <ul className="flex items-center gap-24">
        <li>
          <Link
            href="/"
            className={`text-xl text-gray-900 ${
              pathname === '/' ? 'underline' : ''
            }`}
          >
            Store
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className={`text-xl text-gray-900 ${
              pathname === '/cart' ? 'underline' : ''
            }`}
          >
            Cart {products > 0 && `(${products})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
