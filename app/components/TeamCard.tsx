interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  bio?: string;
}

export function TeamCard({ name, position, image, bio }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-900 font-semibold mb-3">{position}</p>
        {bio && <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>}
      </div>
    </div>
  );
}

