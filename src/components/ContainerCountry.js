"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";



const ContainerCountry = ({ data }) => {
  console.log("data", data?.name?.common);

  const {push} = useRouter()

  return (
    
      <div onClick={()=>push(`/country/${data?.name?.common}`)} className="w-40 cursor-pointer mt-10 border-2 text-center transition-transform transform scale-100 hover:scale-105">
        <h1>{data?.name?.common}</h1>
        
        <Image className="rounded-md" width={200} height={200} src={data?.flags?.svg} alt={data?.cca2}/>
        
      </div>
 
  );
};

export default ContainerCountry;
