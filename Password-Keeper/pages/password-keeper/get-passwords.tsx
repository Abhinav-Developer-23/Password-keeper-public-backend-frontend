import dynamic from 'next/dynamic';

const DynamicGetPasswords = dynamic(() => import('@/components/get-passwords'), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return (
    <div>
      <DynamicGetPasswords />
    </div>
  );
}
