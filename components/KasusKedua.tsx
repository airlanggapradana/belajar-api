import React from "react";
import { RiArrowRightSLine, RiCheckDoubleFill } from "@remixicon/react";

type apiProps = {
  id: number;
  name: string;
  image: string;
  rating: number;
  difficulty: string;
  cuisine: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
};

type CardProps = {
  foto: string;
  headline: string;
  difficulty: string;
  cuisine: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
};

const KasusKedua = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  const resep = data.recipes;

  return (
    <>
      {resep.map((item: apiProps) => (
        <RecipeCustomCard
          key={item.id}
          foto={item.image}
          headline={item.name}
          difficulty={item.difficulty}
          cuisine={item.cuisine}
          tags={item.tags}
          ingredients={item.ingredients}
          instructions={item.instructions}
        />
      ))}
    </>
  );
};

const RecipeCustomCard = (props: CardProps) => {
  return (
    <div className="w-full border-2 p-4 rounded-xl flex items-start shadow-lg gap-5">
      <img
        src={props.foto}
        alt={props.headline}
        className="h-[20rem] object-cover object-center rounded-xl mb-2"
      />
      <div className="space-y-4 w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-2xl">{props.headline}</h1>
          {/* tags */}
          <div className="flex items-center gap-3 text-center">
            <div className="p-2 border-2 rounded-xl w-28 shadow-sm">
              <h2 className="font-normal text-base text-neutral-700">
                {props.difficulty}
              </h2>
            </div>
            <div className="p-2 border-2 rounded-xl w-28 shadow-sm">
              <h2 className="font-normal text-base text-neutral-700">
                {props.cuisine}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {props.tags.map((i) => (
            <li
              key={i + 1}
              className="list-none border-2 p-2 rounded-full text-sm font-medium text-neutral-500"
            >
              {i}
            </li>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-xl">Ingredients</h1>
            {props.ingredients.map((x) => (
              <li key={x + 1} className="list-none flex items-center">
                <span>
                  <RiArrowRightSLine opacity={0.75} />
                </span>
                {x}
              </li>
            ))}
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-xl">Instructions</h1>
            {props.instructions.map((y) => (
              <li key={y + 1} className="list-none flex items-center">
                <span className="mr-1">
                  <RiCheckDoubleFill opacity={0.75} />
                </span>
                {y}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasusKedua;
