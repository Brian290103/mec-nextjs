import Wrapper from '@/components/Wrapper';
import AddStaff from '@/components/forms/AddStaff';
import React, { useState } from 'react';
import { BiUserPin } from 'react-icons/bi';
import {
  FaCertificate,
  FaNewspaper,
  FaPhotoVideo,
  FaUserPlus,
} from 'react-icons/fa';

const Dashboard = () => {
  const [addStaff, setAddStaff] = useState(false);

  console.log(addStaff);

  return (
    <Wrapper>
      {/* Forms */}
      <div className="py-5">
        <h1 className="py-3 font-medium text-red-500">Forms</h1>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-3">
          {/* Card1 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-red-500 hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform bg-red-500 rounded-md shadow hover:translate-x-2 hover:-translate-y-2">
                <FaNewspaper className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add News
                </h1>
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-black hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform bg-black rounded-md shadow hover:translate-x-2 hover:-translate-y-2">
                <FaCertificate className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add a Course
                </h1>
              </div>
            </div>
          </div>
          {/* Card3 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-green-600 hover:border-2">
              <div
                className="flex flex-col items-center justify-center p-3 text-white transition-transform bg-green-600 rounded-md shadow hover:translate-x-2 hover:-translate-y-2"
                onClick={() => setAddStaff(true)}
              >
                <FaUserPlus className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add Staff
                </h1>
              </div>
            </div>
          </div>
          {/* Card4 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-slate-500 hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform rounded-md shadow bg-slate-500 hover:translate-x-2 hover:-translate-y-2">
                <FaPhotoVideo className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add to Gallery
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forms */}
      <div className="py-5">
        <h1 className="py-3 font-medium text-red-500">Reports</h1>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-3">
          {/* Card1 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-red-500 hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform bg-red-500 rounded-md shadow hover:translate-x-2 hover:-translate-y-2">
                <BiUserPin className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Admissions
                </h1>
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-black hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform bg-black rounded-md shadow hover:translate-x-2 hover:-translate-y-2">
                <FaCertificate className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add a Course
                </h1>
              </div>
            </div>
          </div>
          {/* Card3 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-green-600 hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform bg-green-600 rounded-md shadow hover:translate-x-2 hover:-translate-y-2">
                <FaUserPlus className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add Staff
                </h1>
              </div>
            </div>
          </div>
          {/* Card4 */}
          <div className="">
            <div className="transition-all border-2 border-transparent border-dashed rounded-md cursor-pointer hover:border-slate-500 hover:border-2">
              <div className="flex flex-col items-center justify-center p-3 text-white transition-transform rounded-md shadow bg-slate-500 hover:translate-x-2 hover:-translate-y-2">
                <FaCertificate className="text-3xl md:text-5xl" />
                <h1 className="mt-4 text-sm font-medium md:text-xl">
                  Add to Gallery
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FORMS */}

      {addStaff && (
        <div className="min-h-[100vh] pt-20 px-2 absolute top-0 bottom-0 left-0 right-0 bg-black/[0.5] flex items-center justify-center cursor-pointer transition-all duration-300">
          {addStaff && <AddStaff setAddStaff={setAddStaff} />}
        </div>
      )}
    </Wrapper>
  );
};

export default Dashboard;
