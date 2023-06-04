import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';

const Login = () => {
  return (
    <Wrapper className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="grid-cols-2 gap-5 md:grid">
        {/* LEFT COL */}
        <div className="flex-col items-center justify-center hidden md:flex">
          <Image
            src="/logo.jpg"
            width={2000}
            height={2000}
            alt="logo"
            className="w-[100px] h-[100px] rounded-full"
          />
          <h1 className="text-3xl font-medium">Maasai Education Center</h1>
          <span className="text-xl">the Style Hotel School</span>
          <p className="text-red-500 ">Admin Login</p>
        </div>
        {/* RIGHT COL */}
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <Image
              src="/logo.jpg"
              width={2000}
              height={2000}
              alt="logo"
              className="w-[100px] h-[100px] rounded-full"
            />
            <p className="mt-3 text-xl font-medium text-red-500">Admin Login</p>
          </div>
          <form action="">
            <div className="mb-2">
              <label htmlFor="sec">Username</label>
              <input
                type="text"
                className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="sec">Password</label>
              <input
                type="password"
                className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
              />
            </div>
            <div className="flex items-center pt-2">
              {' '}
              <button
                type="submit"
                className="w-full p-3 text-white transition-transform bg-red-500 rounded-lg active:scale-95 hover:bg-red-500/80"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
