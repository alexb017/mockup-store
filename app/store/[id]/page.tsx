import AddProduct from './add';
import Image from 'next/image';
import Link from 'next/link';
import RelatedProducts from './related';

export default async function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockupDetails/id${id}.json`,
    {
      next: { revalidate: 10 },
    }
  );
  const product: any = await res.json();

  return (
    <div>
      <div className="flex items-center pl-16">
        <Link href="/">Store</Link>
        <svg
          className="ml-2 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"
          />
        </svg>
        <h3 className="text-gray-500">{product.name}</h3>
      </div>
      <div className="grid grid-cols-2 gap-16 p-16">
        <Image
          src={product.image}
          alt={product.name}
          width={1920}
          height={1280}
          quality={100}
        />
        <div>
          <h1 className="mt-6 text-2xl text-gray-900">{product.name}</h1>
          <h3 className="mt-6 mb-6 text-lg text-gray-500">${product.price}</h3>
          <h3 className="mb-6 text-lg text-gray-500">{product.description}</h3>
          <ul>
            <li className="text-lg">+ {product.details.license}</li>
            <li className="text-lg">
              {product.details?.ratio && `+ ${product.details?.ratio}`}
            </li>
            <li className="text-lg">
              {product.details?.reflection &&
                `+ ${product.details?.reflection}`}
            </li>
            <li className="text-lg">+ {product.details.tool}</li>
            <li className="text-lg">+ {product.details.level}</li>
            <li className="text-lg">+ {product.details.resolution}</li>
            <li className="text-lg">
              {product.details?.background &&
                `+ ${product.details?.background}`}
            </li>
            <li className="text-lg">+ {product.details.format}</li>
            <li className="text-lg">+ {product.details.manual}</li>
          </ul>
          <AddProduct details={product} />
        </div>
      </div>
      <h1 className="ml-16 text-2xl text-gray-900">You might also like</h1>
      <RelatedProducts details={product} />
    </div>
  );
}
