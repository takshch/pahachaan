interface IdentityCardProps {
  imageUrl: string;
  name: string;
}

function IdentityCard({ imageUrl, name }: IdentityCardProps) {
  return (
    <div className="inline-flex flex-col max-w-fit px-3 py-2 border border-slate-300 rounded hover:shadow-md">
      <div className="w-32 mb-1.5">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="text-center text-sm uppercase text-slate-800">{name}</div>
    </div>
  );
}

export default IdentityCard;
