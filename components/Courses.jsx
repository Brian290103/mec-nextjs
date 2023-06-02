import Link from 'next/link';
import React from 'react';
import CourseCard from './cards/CourseCard';

const Courses = ({ courseData }) => {
  // console.log(courseData);
  return (
    <div>
      {' '}
      <h1 className="my-10 text-3xl text-center text-red-500 lg:text-5xl">
        Our Courses
      </h1>
      <div className="flex flex-col justify-between sm:items-center sm:flex-row">
        <p className="">Im MEC, we offers the following awesome courses:</p>
        <Link
          href="/about"
          className="float-right text-red-500 underline text-end "
        >
          Read More
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-3 lg:grid-cols-3 sm:grid-cols-2">
        {courseData.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
