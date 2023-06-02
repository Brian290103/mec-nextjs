import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';

const NewsCard = ({ news }) => {
  return (
    <div>
      <div className="border-t flex flex-col justify-center rounded-md shadow h-[350px] p-2">
        <Image
          className="w-full h-40 rounded-t-md"
          src="/slider-1.jpg"
          alt="news image"
          width={1000}
          height={1000}
        />
        <div className="mt-auto mb-auto">
          <h1 className="text-lg">{news.title}</h1>
          <h1 className="text-sm">{news.subtitle}</h1>
          <div className="flex items-center gap-2 mt-1 text-red-500">
            <BiCalendar />
            <span className="">{news.dateOccuring}</span>
          </div>
          <Link
            href={`news/${news.id}`}
            className="float-right text-red-500 underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
