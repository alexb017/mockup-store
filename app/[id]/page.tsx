import Image from 'next/image';
import Link from 'next/link';

async function getProduct(id: any) {
  const res = await fetch(
    `https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockupDetails/id${id}.json`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function ProductDetails({ params }: any) {
  const product = await getProduct(params.id);
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
          <button
            type="button"
            className="inline-flex justify-center w-full mt-6 py-3 px-6 text-gray-900 font-semibold border-2 border-solid border-gray-900 hover:bg-gray-950 hover:text-gray-50 transition-all"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
