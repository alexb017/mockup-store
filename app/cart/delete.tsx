'use client';

import { useRouter } from 'next/navigation';

export default function DeleteProduct({ product }: any) {
  const router = useRouter();

  async function deleteData(id: string) {
    await fetch(
      `https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockupsCart/id${id}.json`,
      {
        method: 'DELETE',
      }
    );

    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={() => deleteData(product.id)}
      className="p-2 text-gray-900 rounded-full hover:bg-gray-100 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
        />
      </svg>
    </button>
  );
}
