import IdentityCard from '../components/Cards/IdentityCard';
import Navbar from '../components/Navbar';
import { Identity } from '../types/identity';

function Identities() {
  const identities: Identity[] = new Array(100).fill({});

  identities.forEach((_, index) => {
    const identity = {
      numbers: ['+91 7042302884'],
      name: `Identity ${index}`,
    };

    identities[index] = identity;
  });

  return (
    <div className="w-full">
      <Navbar />
      <div className="px-4 py-8">
        <h1 className="text-2xl text-center font-medium mt-1 mb-8">
          Your Identities
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-6 justify-center">
          {identities.map((identity, index) => (
            <IdentityCard key={index} {...identity} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Identities;
