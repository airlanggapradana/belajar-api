import React from "react";

type productsProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
};

type CardProductProps = {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
};

const KasusKetiga = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const produk = data.products;

  return (
    <>
      {produk.map((item: productsProps) => (
        <CustomCardProduct
          key={item.id}
          id={item.id}
          brand={item.brand}
          thumbnail={item.thumbnail}
          title={item.title}
          description={item.description}
          price={item.price}
          stock={item.stock}
          rating={item.rating}
        />
      ))}
    </>
  );
};

const CustomCardProduct = (props: CardProductProps) => {
  return (
    <div className="max-w-md border-2 rounded-xl p-4 shadow-md">
      <img
        src={props.thumbnail}
        alt=""
        className="h-[20rem] object-cover object-center w-full rounded-xl"
      />

      <div className="space-y-4 mt-5">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="flex items-center justify-between">
          <h1>{"$" + props.price}</h1>
          <h1>{props.stock}</h1>
        </div>
      </div>
    </div>
  );
};

export default KasusKetiga;
