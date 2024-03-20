"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import {
  RiGithubFill,
  RiInstagramLine,
  RiNextjsFill,
  RiTailwindCssFill,
  RiReactjsFill,
} from "@remixicon/react";

const links = [
  {
    href: "/studi-kasus/kasus-pertama",
    key: "1",
    label: "Studi Kasus 1",
    labelDua: "Contact Person Pegawai",
  },
  {
    href: "/studi-kasus/kasus-kedua",
    key: "2",
    label: "Studi Kasus 2",
    labelDua: "Resep Makanan",
  },
  {
    href: "/studi-kasus/kasus-ketiga",
    key: "3",
    label: "Studi Kasus 3",
    labelDua: "Online Store",
  },
  {
    href: "/studi-kasus/kasus-keempat",
    key: "4",
    label: "Studi Kasus 4",
    labelDua: "Belom kepikiran hehe",
  },
];

const techStacks = [
  {
    href: "https://github.com/airlanggapradana",
    key: "1",
    stack: <RiGithubFill size={32} />,
  },
  {
    href: "https://nextjs.org/docs",
    key: "2",
    stack: <RiNextjsFill size={32} />,
  },
  {
    href: "https://react.dev/learn",
    key: "3",
    stack: <RiReactjsFill size={32} />,
  },
  {
    href: "https://tailwindcss.com/docs/installation",
    key: "4",
    stack: <RiTailwindCssFill size={32} />,
  },
];

const Hero = () => {
  const currentPath = usePathname();
  return (
    <section className="flex items-center justify-center pt-32 pb-14">
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h1 className="font-bold text-4xl text-neutral-500 text-center tracking-normal leading-relaxed">
            Test Data Fetching API
          </h1>
          <p className="font-medium text-base text-gray-500 text-center tracking-wide leading-loose max-w-2xl mx-auto mt-5">
            Studi kasus gua dalam implementasi Data-Fetching API menggunakan{" "}
            {""}
            <span className="underline font-semibold italic">
              Modern-Web
            </span>{" "}
            framework.
          </p>

          <div className="max-w-2xl mx-auto mt-6 space-y-5">
            <div className="w-full">
              <h1 className="font-medium text-lg text-center text-neutral-500">
                Tech-Stacks yg gua pake
              </h1>
            </div>
            <div className="flex items-center justify-center gap-14">
              {techStacks.map((item) => (
                <Link href={item.href} key={item.key}>
                  <TechStackCard icon={item.stack} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-evenly mt-12">
            {links.map((item) => (
              <Link href={item.href} key={item.key}>
                <StudiKasusCard
                  titleSatu={item.label}
                  titleDua={item.labelDua}
                  variant={classNames({
                    "border-blue-500 text-blue-600": currentPath === item.href,
                    "border-neutral-700": currentPath !== item.href,
                    "hover:border-blue-500 transition-colors": true,
                  })}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StudiKasusCard = (props: {
  titleSatu: string;
  titleDua: string;
  variant?: string;
}) => {
  return (
    <div className={`p-3 border-2 rounded-lg group w-60 ${props.variant}`}>
      <div className="space-y-2 text-center">
        <h1 className="font-semibold text-lg group-hover:text-blue-500">
          {props.titleSatu}
        </h1>
        <p className="font-normal text-base group-hover:text-blue-500">
          {props.titleDua}
        </p>
      </div>
    </div>
  );
};

const TechStackCard = (logo: { icon: React.JSX.Element; variant?: string }) => {
  return (
    <div
      className={`w-16 h-16 border-2 border-blue-300 rounded-xl p-1 ${logo.variant}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        {logo.icon}
      </div>
    </div>
  );
};

export default Hero;
