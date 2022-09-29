import type { NextPage } from 'next';
import Link from 'next/link';
import CodeCard from '../components/Cards/CodeCard';
import Navbar from '../components/Navbar';

const Codes: NextPage = () => {
  const identityCards = new Array(100).fill({
    imageUrl:
      'https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png',
    name: 'qr code 1',
  });

  return (
    <div className="w-full">
      <Navbar />
      <div className="px-4 py-8">
        <h1 className="text-2xl text-center font-medium mt-2 mb-5">
          Your QR Codes
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-6 justify-center">
          {identityCards.map((identityCard, index) => (
            <Link href={`/codes/${index}`}>
              <a>
                <CodeCard key={index} {...identityCard} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Codes;
