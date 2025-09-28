import React from 'react'

 function ForgetPassword() {
  return (
    <div className="min-h-screen  bg-white  flex flex-col items-center justify-center px-4">
      <form className="w-full max-w-lg  bg-white rounded-lg p-8 shadow-md ">
              <h1 className="text-2xl font-bold mb-4 ">Recover your <span className='text-orange-600'>QuickBite</span> password</h1>

        <p className="text-gray-600 mb-6">Please sign in to your existing account</p>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required="."
          placeholder="example@gmail.com"
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="w-full  bg-orange-500  text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          SEND CODE
        </button>
      </form>
    </div>
  );
}
export default ForgetPassword