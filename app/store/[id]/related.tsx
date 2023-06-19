import Product from '../product';

export default async function RelatedProducts({ details }: any) {
  const res = await fetch(
    'https://mockup-store-default-rtdb.europe-west1.firebasedatabase.app/mockups.json',
    { cache: 'no-store' }
  );
  const products: any[] = (await res.json()) || [];

  // Fisher-Yates algorithm
  // shuffle an array randomly
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return (
    <div className="grid grid-cols-2 gap-16 p-16">
      {products
        .filter((product) => product.name !== details.name)
        .slice(0, 3)
        .map((product) => {
          return <Product key={product.id} details={product} />;
        })}
    </div>
  );
}
