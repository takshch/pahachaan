import { Icon } from '@iconify/react';
import { Identity } from '../../types/identity';

function identityCard({ name, numbers }: Identity) {
  return (
    <div className="inline-flex flex-col max-w-fit px-3 py-2 border border-slate-300 rounded hover:shadow-md">
      <div>
        <ul className="flex flex-col gap-2">
          {numbers.map((number, index) => (
            <li key={index} className="flex gap-3 items-center">
              <Icon icon="clarity:phone-handset-solid" />
              {number}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center text-sm uppercase text-slate-800">{name}</div>
    </div>
  );
}

export default identityCard;
