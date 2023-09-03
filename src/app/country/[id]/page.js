import React from 'react';
import Image from "next/image";



const getCountry = async (name) => {
  const lowercaseName = name.toLowerCase();
  const res = await fetch(`https://restcountries.com/v3.1/name/${lowercaseName}`);
  return await res.json();
};

const Page = async ({ params }) => {
  const name = params.id;
  let countryDetail = null;
  console.log("name", name);

  try {
    countryDetail = await getCountry(name);
    console.log('countryDetail', countryDetail);
  } catch (error) {
    console.error(error);
  }



  return (
    <div className='mt-10 flex justify-center'>
      {
        countryDetail?.map((country, index)=>(
          <div key={index} className='flex gap-9'>
            <div>
              <Image className='rounded-md' width={300} height={300} src={country.flags.svg}/>
            </div>
            <div>
              <p>{`Name: ${country?.name.official}`}</p>
              <p>{`Capital: ${country?.capital}`}</p>
              <p>{`Region : ${country?.region}`}</p>
              <p>{`Subregion: ${country?.subregion}`}</p>
              <p>{`Area: ${country?.area}`}</p>
              <p>{`Population: ${country?.population}`}</p>
              <div className='flex'>
                <p>Borders Country :</p>
              {
                country?.borders?.map((borders,index)=>(
                  <p key={index}>{`   , ${borders}`}</p>
                ))
              }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Page;
