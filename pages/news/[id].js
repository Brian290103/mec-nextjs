import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';

const Category = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">News</h1>
          <span className="">{data.title}</span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="grid-cols-2 gap-5 md:grid">
          <Image
            src="/slider-1.jpg"
            width={1000}
            height={1000}
            alt="news image"
          />
          <div className="mt-5 mdmt-0">
            <h1 className="text-red-500">Title</h1>
            <h1 className="text-xl font-medium md:text-3xl">{data.title}</h1>
            <h1 className="">{data.subtitle}</h1>
            <div className="flex items-center gap-2 mt-2 font-medium">
              <BiCalendar className="text-red-500" />
              {data.dateOccuring}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-5 text-clip text- md:w-3/4">{data.descr}</p>
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  let allPaths;
  let newsData;

  try {
    const res = await fetch('http://localhost:3000/api/news');
    if (!res.ok) {
      throw new Error('Server Error');
    }
    newsData = await res.json();

    allPaths = newsData.map((path) => {
      let idStr = path.id.toString();

      return {
        params: {
          id: idStr,
        },
      };
    });
    // console.log(allPaths);

    return {
      paths: allPaths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error: ', error);
  }
}

export async function getStaticProps(context) {
  console.log(context);

  let newsData;

  const id = context.params.id;

  try {
    const res = await fetch('http://localhost:3000/api/news');
    if (!res.ok) {
      throw new Error('Server Error');
    }
    newsData = await res.json();

    const singleNews = newsData.find((nd) => nd.id.toString() === id);

    return {
      props: { data: singleNews },
    };
  } catch (error) {
    console.error('Error: ', error);
  }
}
