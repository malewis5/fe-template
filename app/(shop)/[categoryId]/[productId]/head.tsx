export default function Head({
  params,
}: {
  params: { productId: string; categoryId: string };
}) {
  return (
    <>
      <title>{`${params.categoryId} | ${params.productId}`}</title>
    </>
  );
}
