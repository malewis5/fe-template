export default function Head({ params }: { params: { categoryId: string } }) {
  return (
    <>
      <title>{`${params.categoryId} `}</title>
    </>
  );
}
