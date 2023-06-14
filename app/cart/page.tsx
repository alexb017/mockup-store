import Link from 'next/link';

export default function Cart() {
  return (
    <div className="p-16">
      <h1 className="mb-4 text-2xl text-gray-900">Shopping Cart</h1>
      <h3 className="mb-8 text-base text-gray-500">
        You have nothing in your shopping cart.
      </h3>
      <Link
        href="/"
        className="py-3 px-6 text-gray-900 font-semibold border-2 border-solid border-gray-900 hover:bg-gray-950 hover:text-gray-50 transition-all"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
