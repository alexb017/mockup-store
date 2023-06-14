import Link from 'next/link';
import Image from 'next/image';

type Product = {
  details: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
};

export default function Product({ details }: Product) {
  return (
    <Link href={`/${details.id}`}>
      <Image
        src={details.image}
        alt={details.name}
        width={1920}
        height={1280}
        quality={100}
      />
      <h1 className="mt-6 text-2xl text-gray-900">{details.name}</h1>
      <h3 className="text-base text-gray-500">${details.price}</h3>
    </Link>
  );
}
