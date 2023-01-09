export default function ProductListingPage({
  categoryId,
}: {
  categoryId: string;
}) {
  return (
    <>
      <h1>Product Description Page</h1>
      <h2>Product Category: {categoryId}</h2>
    </>
  );
}
