import type { NextPage } from 'next';
import IdentityCard from '../components/IdentityCard';

const Home: NextPage = () => {
  const identityCards = new Array(100).fill({
    imageUrl:
      'https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png',
    name: 'qr code 1',
  });

  return (
    <div className="w-full">
      <div className="px-4 py-8">
        <h1 className="text-2xl text-center font-medium mt-2 mb-5">
          Your Identities
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-6 justify-center">
          {identityCards.map((identityCard, index) => (
            <IdentityCard key={index} {...identityCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
