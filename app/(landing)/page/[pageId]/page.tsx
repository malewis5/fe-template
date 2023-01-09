import LandingPage from '../../../../components/LandingPage';

export default function Page({ params }: { params: { pageId: string } }) {
  return (
    <div>
      <LandingPage pageId={params.pageId} />
    </div>
  );
}
