import Product from '@/components/Product';

async function getData() {
  const res = await fetch(
    'https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockup.json',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data as any[];
}

export default async function Store() {
  const products = await getData();

  return (
    <div className="grid grid-cols-2 gap-16 p-16">
      {products.map((product) => {
        return <Product details={product} />;
      })}
    </div>
  );
}
