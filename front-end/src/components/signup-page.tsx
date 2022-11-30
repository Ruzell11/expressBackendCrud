import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface userRegister {
    userName:string,
    email:any,
    password:any
}
const SignUpPage = () => {
    const [registerUsers ,setRegisterUsers] = useState({
        userName:userRegister.userName,
        email:any,
        password:""
    } )


    const registerUser = async() => {
        try{
            const res = await axios.post('http://localhost:5000/api/users/register')
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <div className="flex justify-center h-screen w-screen items-center ">
                <div className="w-full md:w-1/2 flex flex-col items-center " >

                    <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">Sign Up</h1>

                   <form >
                
                       <div className="space-y-2">
                       <input type="email" name="email" onChange={(e:any) => setRegisterUsers(item => item.email(e))} id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                            placeholder="Email" />
                  
                 
                        <input type="text" name="text" id="text" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                            placeholder="User Name" />
             

                
                        <input type="password" name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                            placeholder="Password" />
                        <div className=" flex flex-row justify-between p-3">
                        <div className=" flex items-center gap-x-1">
                            <input type="checkbox" name="remember" id="" className=" w-4 h-4  " />
                            <label className="text-sm text-slate-400">Remember me</label>
                        </div>
                        <div>
                            <Link to="/" className="text-sm text-slate-400 hover:text-blue-500">Already have an account?</Link>
                        </div>
                    </div>

                    <div className="">
                        <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
                    </div>
                       </div>

                   
                   </form>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;