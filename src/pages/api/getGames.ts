import { getGamesEurope } from "nintendo-switch-eshop";

// Types
import type { NextApiRequest, NextApiResponse } from "next";
import type { GameEU } from "nintendo-switch-eshop";

// Interfaces
export interface GameEuResult {
  id: string;
  name: string;
  description: string;
  image: string;
  popularity: number;
  platforms: string[];
  categories: string[];
  type: string;
  discountPercentage: number;
  price: { regular: number; discount: number };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit } = req.query;
  const games = await getGamesEurope({ limit: Number(limit) || 100 });

  const prettyGame = (game: GameEU) => {
    const discountPercentage = game.price_discount_percentage_f;
    const price = game.price_regular_f;

    const discountedPrice = price - (price * discountPercentage) / 100;

    return {
      id: game.fs_id,
      name: game.title,
      description: game.excerpt,
      image: game.image_url,
      popularity: game.popularity,
      type: game.type,
      price: { regular: price, discount: discountedPrice.toFixed(2) },
      categories: game.pretty_game_categories_txt,
      discountPercentage,
      platforms: game.system_names_txt,
    };
  };

  res.status(200).json(games.map(prettyGame));
}
