import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';

const Admissions = () => {
  return (
    <div>
      {' '}
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">Admissions</h1>
          <span className="">
            Home - <b>Admissions</b>
          </span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="flex flex-col items-center justify-start gap-5 mb-5 md:flex-row">
          <Image
            src="/logo.jpg"
            width={1000}
            height={1000}
            className="rounded-full w-[100px]"
            alt="school logo"
          />
          <div className="">
            <h1 className="text-3xl font-medium text-center">
              Maasai Education Center
            </h1>
            <h1 className="text-2xl">Student Admission Form</h1>
            <p className="text-sm text-red-500">
              Kindly fill all the details appropriately *
            </p>
          </div>
        </div>
        {/* FORM */}

        <form action="" className="">
          {/* Personal Information */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Personal Information</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="mname">Middle Name</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="flex flex-col justify-center mb-2">
                <label htmlFor="gender">Gender</label>

                <select
                  name="gender"
                  id="gender"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Id Number */}
              <div className="mb-2">
                <label htmlFor="idno">Id Number</label>
                <input
                  type="number"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/*Contact Details */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Contact Details</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="fname">Phone</label>
                <input
                  type="number"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="mname">Email</label>
                <input
                  type="email"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="lname">Address</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="dob">Village / Sub Location</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/*Guardian Information */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Guardian Information</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="gname">Name</label>
                <input
                  type="name"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="gid">Id Number</label>
                <input
                  type="number"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="gphone">Phone</label>
                <input
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/*Academic Qualifiication */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">
              Academic Qualifiication{' '}
            </h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="school">School</label>
                <input
                  type="name"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="year">Year of Completion</label>
                <select
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="year">Grade Attained</label>
                <select
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>
            </div>
          </div>

          {/*Course Application */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Course Application </h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="year">Course Applying For</label>
                <select
                  type="text"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="TTO">Tour and Travel Operations</option>
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                  <option value="2000">2000</option>
                </select>
              </div>

              <div className="mb-2">
                <label htmlFor="commencement">Commencement of Course</label>
                <input
                  type="date"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="end">End of Course</label>
                <input
                  type="date"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/*Upload the following supporting documents */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">
              Upload the following supporting documents{' '}
            </h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="passport">Student Passport Photo</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="sid">Student Identity Card (ID)</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="gid">Guardian Identity Card (ID)</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="kcpe">KCPE Certificate</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="sec">
                  Secondary School Leaving Certificate
                </label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="kcse">KCSE Certificate</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="med">
                  Medical Certificate{' '}
                  <span className="text-red-500">
                    ( In case of special attention)
                  </span>
                </label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/*Signing Off */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Signing Off</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <button className="p-3 text-white transition-transform bg-red-500 rounded-lg active:scale-95 hover:bg-red-500/80">
                  Download School Rules and Regulations
                </button>
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  className="px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none me-2 "
                />
                <label htmlFor="confirm">
                  I have read the school rules and promise to abide by them
                </label>
              </div>
            </div>

            <button className="p-3 text-white transition-transform bg-red-500 rounded-lg active:scale-95 hover:bg-red-500/80">
              Submit Application Form
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Admissions;
