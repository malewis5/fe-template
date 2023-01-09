import ProductListingPage from '../../../components/ProductListingPage';

export default function Page({
  params,
}: {
  params: { productId: string; categoryId: string };
}) {
  return <ProductListingPage categoryId={params.categoryId} />;
}
