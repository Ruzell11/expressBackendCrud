import React from "react";
import { Link } from "react-router-dom";




const LoginPage = () => {
    return (
        <>
            <div className="flex justify-center h-screen w-screen items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center " >

                    <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>

                    <div className="w-3/4 mb-6">
                        <input type="email" name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                            placeholder="User Name" />
                    </div>

                    <div className="w-3/4 mb-6">
                        <input type="password" name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                            placeholder="Password" />
                    </div>

                    <div className="w-3/4 flex flex-row justify-between">
                        <div className=" flex items-center gap-x-1">
                            <input type="checkbox" name="remember" id="" className=" w-4 h-4  " />
                            <label className="text-sm text-slate-400">Remember me</label>
                        </div>
                        <div>
                          
                           <Link to="/signup-page" className="text-sm text-slate-400 hover:text-blue-500">Dont have an account?</Link>
                         
                        </div>
                    </div>

                    <div className="w-3/4 mt-4">
                        <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;