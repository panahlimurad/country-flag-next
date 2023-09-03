"use client"
import Link from "next/link";
import React from "react";
import { useSearchParams } from 'next/navigation'


const List = () => {

    const searchParams = useSearchParams()
    const region = searchParams.get("region")


  const list = [
    {
      name: "Europe",
      url: "europe",
    },
    {
      name: "Africa",
      url: "africa",
    },
    {
      name: "Asia",
      url: "asia",
    },
    {
      name: "North America",
      url: "North America",
    },
    {
      name: "South America",
      url: "South America",
    },
  ];

  return (

    
    <div className="flex justify-center mt-2 gap-32">
      {list.map((country, index) => (
        <Link key={index} className={`hover:opacity-50 transition-opacity ${country.url === region ? "underline underline-offset-4 text-amber-200" : ""}`} href={`/?region=${country.url}`}>{country.name}</Link>
      ))}
    </div>
  );
};

export default List;
