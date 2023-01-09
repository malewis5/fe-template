import ProductDescriptionPage from '../../../../components/ProductDescriptionPage';

export default function Page({
  params,
}: {
  params: { productId: string; categoryId: string };
}) {
  return (
    <ProductDescriptionPage
      productId={params.productId}
      categoryId={params.categoryId}
    />
  );
}
