
import React from 'react';
import ContainerCountry from '../components/ContainerCountry';

const Page = async({searchParams}) => {

  const res =  await fetch(`https://restcountries.com/v3.1/region/${searchParams.region ? searchParams.region : "https://restcountries.com/v3.1/all"}`)
 
  const data =  await res.json()

  console.log(data);

  const dataArray = Object.values(data)

  return (

      <div className='flex gap-4 flex-wrap justify-center'>
        {
          dataArray?.map((data,index)=>(
            <ContainerCountry data={data} index={index}/>
          ))
        }
        </div>
  
  );
};

export default Page;
