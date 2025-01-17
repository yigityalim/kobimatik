import { Hero } from '@/components/pages/home/hero';
import { Hr } from '@/components/pages/home/hr';
import { Inspection } from '@/components/pages/home/inspection';
import { PeopleSays } from '@/components/pages/home/people-says';

export function HomePage() {
  return (
    <main className="grow md:mx-12">
      <Hero />
      <Hr />
      <Inspection />
      <Hr />
      <PeopleSays />
    </main>
  );
}
