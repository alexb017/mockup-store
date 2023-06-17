'use client';

import { useRouter } from 'next/navigation';

export default function AddProduct({ details }: any) {
  const router = useRouter();

  async function postData(newProduct: any, id: string) {
    const res = await fetch(
      `https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockupsCart.json`,
      { cache: 'no-store' }
    );
    const data: any = (await res.json()) || [];

    const products: any[] = Object.values(data);

    const existingData: any[] = products.find(
      (product: { id: string }) => product.id === id
    );

    if (!existingData) {
      await fetch(
        `https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockupsCart/id${id}.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        }
      );

      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={() => postData(details, details.id)}
      className="inline-flex justify-center w-full mt-6 py-3 px-6 text-gray-900 font-semibold border-2 border-solid border-gray-900 hover:bg-gray-950 hover:text-gray-50 transition-all"
    >
      Add to cart
    </button>
  );
}
