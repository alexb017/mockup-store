import Link from 'next/link';
import Image from 'next/image';
import DeleteProduct from './delete';

export default async function Cart() {
  const res = await fetch(
    `https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockupsCart.json`,
    { cache: 'no-store' }
  );
  const data: any = (await res.json()) || [];

  const products: any[] = Object.values(data);

  const price = products.reduce(
    (total, product) => total + Number.parseInt(product.price, 10),
    0
  );

  return (
    <div className="p-16">
      <h1 className="mb-4 text-2xl text-gray-900">Shopping Cart</h1>
      {products.length === 0 && (
        <div>
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
      )}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <div className="flex items-start justify-between pb-8 mb-8 border-b">
                <div className="flex items-start">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={192}
                    height={128}
                    quality={100}
                  />
                  <h1 className="ml-4 text-xl text-gray-900">{product.name}</h1>
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="text-base text-gray-500">${product.price}</h3>
                  <DeleteProduct product={product} />
                </div>
              </div>
            </div>
          );
        })}
      {products.length > 0 && (
        <div className="flex justify-end">
          <div className="flex flex-col w-4/12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-base text-gray-900">Subtotal</h1>
              <h3 className="text-2xl text-gray-500">${price}</h3>
            </div>
            <button className="py-3 px-6 text-gray-900 font-semibold border-2 border-solid border-gray-900 hover:bg-gray-950 hover:text-gray-50 transition-all">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
