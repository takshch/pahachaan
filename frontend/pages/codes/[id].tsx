import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';

const imageUrl =
  'https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png';

const Code = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="w-full">
      <Navbar />
      <div className="px-4 py-8">
        <h1 className="text-2xl text-center font-medium mt-1 mb-5">
          Your QR Code
        </h1>
        <div className="flex flex-col flex-wrap gap-x-7 gap-y-2 items-center justify-center">
          <div>{id}</div>
          <div className="flex flex-col gap-2 w-48 mb-1.5">
            <img src={imageUrl} alt="QR Code" className="w-full" />
            <div className="flex flex-col gap-4">
              <button className="bg-zinc-600 hover:bg-zinc-500 mx-3 px-3 py-0.5 rounded text-white flex gap-2 items-center justify-center">
                <Icon icon="fa:repeat" className="text-sm" />
                Re-generate
              </button>
              <button className="bg-amber-800 hover:bg-red-700 mx-3 px-3 py-0.5 rounded text-white flex gap-2 items-center justify-center">
                <Icon icon="ant-design:delete-filled" className="text-sm" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
