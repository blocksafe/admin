import React from "react";

const Login = () => {
     return (
     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">

               {/* Login text  */}
               <div>
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Blocksafe</h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                         or
                         <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 px-2">register</a>
                    </p>
               </div>

               {/* Login Form */}
               <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                         {/* Form input code start here */}
                         <div>
                              <input 
                                   type="email" 
                                   autoComplete='none' 
                                   required 
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:shadow-outline-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Email address"
                              />

                              <input 
                                   type="password" 
                                   autoComplete='none' 
                                   required 
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus:outline-none focus:ring-indigo-500 focus:shadow-outline-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Password"
                              />
                         </div>
                         {/* Form input code end here */}
                    </div>

                    {/* Remeber and forget password code start here */}
                    <div className="flex justify-between items-center">
                         <div className="flex item-center">
                              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                              <label className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>   
                         </div>

                         <div className="text-sm ">
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                         </div>
                    </div>     
                    {/* Remeber and forget password code start here */}

                    {/* Login button code start here */}
                    <div>
                         <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo-500 active:bg-indigo-700 transition duration-150 ease-in-out">Login</button>
                    </div>
               </form>
          </div>
     </div>
     );
}

export default Login;