export default function ProductDescriptionPage({
  productId,
  categoryId,
}: {
  productId: string;
  categoryId: string;
}) {
  return (
    <>
      <h1>Product Description Page</h1>
      <h2>Product Category: {categoryId}</h2>
      <h2>Product Id: {productId}</h2>
    </>
  );
}
