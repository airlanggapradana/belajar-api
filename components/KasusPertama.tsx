import React from "react";
import { RiUserLine, RiMailLine, RiPhoneLine } from "@remixicon/react";

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
};

type CardProps = {
  firstName: string;
  lastname: string;
  Email: string;
  telp: string;
  image: string;
};

const KasusPertama = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const dataFinal = data.users;

  return (
    <>
      {dataFinal.map((item: Props) => (
        <CustomCard
          key={item.id}
          firstName={item.firstName}
          lastname={item.lastName}
          Email={item.email}
          telp={item.phone}
          image={item.image}
        />
      ))}
    </>
  );
};

const CustomCard = (props: CardProps) => {
  return (
    <div className="max-w-lg rounded-lg p-4 shadow-md shadow-blue-300">
      <div className="flex items-center gap-5">
        <img
          src={props.image}
          alt=""
          className="rounded-xl shadow-md h-40 object-cover object-center"
        />
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <RiUserLine fillOpacity={0.25} />
            <h1 className="font-bold text-lg text-neutral-600">
              {props.firstName + " " + props.lastname}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <RiMailLine fillOpacity={0.25} />
            <p className="font-medium text-base text-neutral-500">
              {props.Email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <RiPhoneLine fillOpacity={0.25} />
            <p className="font-normal text-base text-neutral-500">
              {props.telp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasusPertama;
