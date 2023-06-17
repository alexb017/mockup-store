import Image from 'next/image';
import DeleteProduct from './delete';

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
    <div className="flex items-start justify-between pb-8 mb-8 border-b">
      <div className="flex items-start">
        <Image
          src={details.image}
          alt={details.name}
          width={192}
          height={128}
          quality={100}
        />
        <h1 className="ml-4 text-base text-gray-900">{details.name}</h1>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-base text-gray-500">${details.price}</h3>
        <DeleteProduct details={details} />
      </div>
    </div>
  );
}
