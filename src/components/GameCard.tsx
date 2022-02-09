import Image from "next/image";

// Types
import type { GameEuResult } from "../pages/api/getGames";

export const GameCard: React.FC<{ game: GameEuResult }> = ({ game }) => {
  return (
    <div className="p-4 space-y-4 bg-white rounded-md backdrop-blur-md bg-gray-100/10">
      <div className="flex items-center flex-shrink-0 space-x-4">
        <div className="flex flex-shrink-0 rounded-md">
          <Image
            src={game.image}
            alt={`${game.name} image`}
            width="64"
            height="64"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col items-start flex-grow space-y-1 overflow-x-hidden">
          <h2 className="w-full font-semibold leading-tight truncate">
            {game.name}
          </h2>

          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 text-xs text-green-800 rounded-md bg-green-400/80">
              {Number(game.price.discount) ? `$${game.price.discount}` : "Free"}
            </span>

            {game.discountPercentage > 0 && (
              <span className="px-2 py-1 text-xs text-red-800 rounded-md bg-red-400/80">
                🔥 {game.discountPercentage}%
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center flex-shrink-0 space-x-2 ">
        {game.categories.map((category) => (
          <span
            key={category}
            className="px-2 py-1 text-xs text-white rounded-md bg-gray-200/20"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameCard;
