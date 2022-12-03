import React, { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


const SignUpPage = () => {
    const navigate = useNavigate();
 const emailRef = useRef<HTMLInputElement>(null);
 const usernameRef = useRef<HTMLInputElement>(null);
 const passwordRef = useRef<HTMLInputElement>(null);

 
    const registerUser = async(e:any) => {
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:5000/api/users/register' , {
                username:usernameRef.current?.value,
               email: emailRef.current?.value,
               password:passwordRef.current?.value
            })
           if(res.status === 201){
            navigate('/todo-app')
           }
           return;
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <div className="flex justify-center h-screen w-screen items-center ">
                <div className="w-full md:w-1/2 flex flex-col items-center " >

                    <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">Sign Up</h1>

                   <form onSubmit={(e) => registerUser(e)} >
                
                       <div className="space-y-2">
                       <input type="email" name="email"  id="email" ref={emailRef} className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                            placeholder="Email" />
                  
                 
                        <input type="text" name="text" id="text" ref={usernameRef} className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                            placeholder="User Name" />
             

                
                        <input type="password" name="password" id="password" ref={passwordRef} className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
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