import Product from './product';

export default async function Store() {
  const res = await fetch(
    'https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockups.json',
    { cache: 'no-store' }
  );
  const products: any[] = (await res.json()) || [];

  return (
    <div className="grid grid-cols-2 gap-16 p-16">
      {products.map((product) => {
        return <Product key={product.id} details={product} />;
      })}
    </div>
  );
}
