import ProductListingPage from '../../../components/ProductListingPage';

export default function Page({
  params,
}: {
  params: { productId: string; categoryId: string };
}) {
  return (
    /* @ts-expect-error Server Component */
    <ProductListingPage categoryId={params.categoryId} />
  );
}
